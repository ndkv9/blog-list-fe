const Noti = ({ noti }) => {
	if (!noti.message) {
		return null
	}

	return <div className={noti.type}>{noti.message}</div>
}

export default Noti
