import React from "react";
import logo from "./logo.svg";
import "./App.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

import MaterialTable from "material-table";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tableColumns: [
				{title: "Start Id", field: "serverStartId", hidden: false},
				{title: "Data", field: "uuid", hidden: false},
			],
			tableRows: [],
		};
	}

	componentDidMount() {
		fetch("https://84.198.0.232:22750/api")
			.then((res) => res.json())
			.then((res) => {
				this.setState({tableRows: res});
			})
			.catch((err) => {
				console.log({err});
			});
	}

	render() {
		return (
			<>
				<AppBar>
					<Toolbar>
						<Typography variant="h6">RoBra Online</Typography>
					</Toolbar>
				</AppBar>
				<MaterialTable title="Simulation Data" columns={this.state.tableColumns} data={this.state.tableRows} />
			</>
		);
	}
}

export default App;