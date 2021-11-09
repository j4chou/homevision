import { useState, useEffect } from 'react';
import axios from 'axios';
import { _1, _10 } from '../constants/index';

interface House {
	id: number,
	address: string,
	homeowner: string,
	price: number,
	photoURL: string
}

const usePagedFetch = (page = _1, pageSize = _10) => {
	const [houses, setHouses] = useState<Array<House>>([]);
	const [loading, toggleLoading] = useState(false);
	const [error, toggleError] = useState(false);

	useEffect(() => {
		async function getHouses () {
			if (error) {
				toggleError(false);
			}
			toggleLoading(true);
			try {
				const { data } = await axios.get(`${process.env.REACT_APP_HOMEVISION_API_URL}/api_project/houses`, {
					params: {
						page,
						pageSize
					}
				});
				toggleLoading(false);
				if (data.ok) {
					const newList = [...new Set([...houses, ...data.houses])];
					setHouses(newList);
				}
				else {
					toggleError(true);
				}
			}
			catch (error) {
				toggleLoading(false);
				toggleError(true);
			}
		}
		getHouses();
	}, [page]);

	return {
		houses,
		error,
		loading
	};
};

export default usePagedFetch;
