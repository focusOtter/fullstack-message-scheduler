const ScheduleMessageForm = () => {
	const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
	return (
		<form>
			<div className="label">
				<span className="label-text">Enter a title</span>
			</div>
			<input required className="input input-accent" name="title" type="text" />
			<div className="label">
				<span className="label-text">Enter a message</span>
			</div>
			<textarea required className="input input-accent" name="message" />
			<div className="label">
				<span className="label-text">Enter a delivery time</span>
			</div>
			<input
				required
				className="input input-accent"
				name="date"
				type="datetime-local"
			/>
			<input required type="hidden" name="timezone" value={userTimeZone} />

			<div className="mt-4">
				<button className={`btn btn-secondary`} type="submit">
					Submit
				</button>
			</div>
		</form>
	)
}

export default ScheduleMessageForm
