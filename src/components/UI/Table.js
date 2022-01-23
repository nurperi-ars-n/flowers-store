import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField, Typography, Box } from "@mui/material";
import {
	useTable,
	useFilters,
	useGlobalFilter,
	useAsyncDebounce,
} from "react-table";

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}
function DefaultColumnFilter({
	column: { filterValue, preFilteredRows, setFilter },
}) {
	const count = preFilteredRows.length;

	return (
		<TextField
			value={filterValue || ""}
			onChange={(e) => {
				setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
			}}
			placeholder={`Search ${count} flowers...`}
		/>
	);
}

function FlowerTable({ columns, data, handleCreateClick }) {
	const filterTypes = React.useMemo(
		() => ({
			// Add a new fuzzyTextFilterFn filter type.
			// fuzzyText: fuzzyTextFilterFn,
			// Or, override the default text filter to use
			// "startWith"
			text: (rows, id, filterValue) => {
				return rows.filter((row) => {
					const rowValue = row.values[id];
					return rowValue !== undefined
						? String(rowValue)
								.toLowerCase()
								.startsWith(String(filterValue).toLowerCase())
						: true;
				});
			},
		}),
		[],
	);

	const defaultColumn = React.useMemo(
		() => ({
			// Let's set up our default Filter UI
			// Filter: <div />,
			Filter: DefaultColumnFilter,
		}),
		[],
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		visibleColumns,
		preGlobalFilteredRows,
		setGlobalFilter,
	} = useTable(
		{
			columns,
			data,
			defaultColumn,
			filterTypes,
		},
		useFilters,
		useGlobalFilter,
	);

	const firstPageRows = rows.slice(0, 10);

	return (
		<>
			<TableContainer component={Paper} sx={{ p: 5 }}>
				<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
					<Button
						variant={"contained"}
						size={"large"}
						onClick={handleCreateClick}
					>
						Create new flower
					</Button>
				</Box>
				<Table {...getTableProps()}>
					<TableHead>
						{headerGroups.map((headerGroup) => (
							<TableRow {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<TableCell {...column.getHeaderProps()}>
										<Typography variant='h5'>
											{column.render("Header")}
										</Typography>
										<div>
											{column.canFilter ? column.render("Filter") : null}
										</div>
									</TableCell>
								))}
							</TableRow>
						))}
					</TableHead>
					<TableBody {...getTableBodyProps()}>
						{firstPageRows.map((row, i) => {
							prepareRow(row);
							return (
								<TableRow {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return (
											<TableCell {...cell.getCellProps()}>
												{cell.render("Cell")}
											</TableCell>
										);
									})}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

export default FlowerTable;
