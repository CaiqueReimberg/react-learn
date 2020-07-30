import React from 'react';

function FormField({ label, name, type, value, onChange }) {
	return (
		<div>
			<label>
				{ label }
				<textarea
					type={ type }
					name={ name }
					value={ value }
					onChange={ onChange }
				/>
			</label>
		</div>
	)
}

export default FormField;