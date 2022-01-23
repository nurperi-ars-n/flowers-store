import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function BasicSelect({ name, value, onChange, children }) {
	return (
		<FormControl fullWidth>
			<InputLabel id='demo-simple-select-label'>Avalaible</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={value}
				name={name}
				label='Avalaible'
				onChange={onChange}
			>
				{children}
			</Select>
		</FormControl>
	);
}

export default BasicSelect;
