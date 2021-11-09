import { useState, useCallback } from 'react';
import axios from 'axios';
import axiosRetry from 'axios-retry';

import usePagedFetch from '../../hooks/usePagedFetch';

import LoadingSpinner from '../../components/Spinner/LoadingSpinner';
import Toast from '../../components/Toast/Toast';
import HouseList from '../../components/HouseList/HouseList';
import styles from './Home.module.css';

import { _0, _1, _3 } from '../../constants/index';

axiosRetry(axios, { retries: _3 });

function App () {
	const [page, setPage] = useState(_1);
	const { loading, error, houses } = usePagedFetch(page);
	const lastHouseRef = useCallback(node => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.9
		};
		if (node !== null) {
			const observer = new IntersectionObserver((entries) => {
				const entry = entries[_0];
				if (entry.isIntersecting) {
					setPage(prevPage => prevPage + _1);
					observer.unobserve(node);
				}
			}, options);
			observer.observe(node);
		}
	}, []);
	return (
		<div className={styles.homePage}>
			<header className={styles.header}>HomeVision</header>
			<main>
				<HouseList
					houses={houses}
					lastHouseRef={lastHouseRef}
				/>
			</main>
			{loading && <LoadingSpinner />}
			{error && <Toast success={false} />}
		</div>
	);
}

export default App;
