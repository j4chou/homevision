import styles from './HouseList.module.css';
import ListItem from '../ListItem/ListItem';

import { _1 } from '../../constants/index';

interface House {
	id: number;
	address: string;
	homeowner: string;
	price: number;
	photoURL: string;
}

interface HouseListProp {
	houses: House[];
	lastHouseRef: (node: HTMLLIElement) => HTMLLIElement | void;
}

const HouseList = ({ houses, lastHouseRef }: HouseListProp) => (
	<ul className={styles.list}>
		{houses.map(({ id, address, homeowner, price, photoURL }, index) => {
			const isLastHouse = houses.length - _1 === index;
			if (isLastHouse) {
				return (
					<ListItem
						key={id}
						address={address}
						homeowner={homeowner}
						lastHouseRef={lastHouseRef}
						price={price}
						photoURL={photoURL}
					/>
				);
			}
			return (
				<ListItem
					key={id}
					address={address}
					homeowner={homeowner}
					price={price}
					photoURL={photoURL}
				/>
			);
		})}
	</ul>
);

export default HouseList;
