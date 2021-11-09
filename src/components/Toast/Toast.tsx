import styles from './Toast.module.css';

interface ToastProps {
	success: boolean;
	message?: string;
}

const Toast = ({
	success,
	message = 'Sorry, an error has occurred. Please try again.'
}: ToastProps) => (
	<div className={success ? styles.success : styles.error}>
		<p>{message}</p>
	</div>
);

export default Toast;
