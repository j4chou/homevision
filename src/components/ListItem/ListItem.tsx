import styles from './ListItem.module.css';

interface ListItemProp {
	key: number;
	address: string;
	homeowner: string;
	price: number;
	photoURL: string;
	lastHouseRef?: (node: HTMLLIElement) => HTMLLIElement | void;
}

interface Attr {
	ref?: (node: HTMLLIElement) => HTMLLIElement | void;
}

const ListItem = ({
	address,
	homeowner,
	lastHouseRef,
	price,
	photoURL
}: ListItemProp) => {
	const email = `${homeowner.replace(' ', '.')}@gmail.com`;
	const attributes: Attr = {};
	if (lastHouseRef) {
		attributes.ref = lastHouseRef;
	}
	return (
		<li className={styles.listItem} {...attributes}>
			<img
				className={styles.house}
				alt={`${address}`}
				src={photoURL}
				width="100%"
				height="auto"
			/>
			<div className={styles.details}>
				<h1 className={styles.price}>${price.toLocaleString()}</h1>
				<div className={styles.description}>
					<p>{address}</p>
					<p>
						Contact <a href={`mailto:${email}`}>{homeowner}</a>
					</p>
				</div>
			</div>
		</li>
	);
};

export default ListItem;
