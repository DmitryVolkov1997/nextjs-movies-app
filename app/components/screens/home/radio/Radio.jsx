import classes from './Radio.module.scss'

const Radio = ({ title, onChange = Function.prototype, typeMovie, checked }) => {
	return (
		<label className={classes.label}>
			{title}
			<input className={classes.radio} type='radio' data-type={typeMovie} onChange={onChange} checked={checked} />
		</label>
	)
}

export default Radio
