import { useContext, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { ListPosts } from "../listPosts/ListPosts";
// import "./TabPostagens.css";

import { useTheme } from "../../contexts/theme/ThemeContext";

export function TabPosts() {
	const { state: themeContext } = useTheme();

	const [value, setValue] = useState("1");
	const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
		setValue(newValue);
	};

	// TabIndicatorProps={{style: {display: 'none'}}}
	return (
		<TabContext value={value}>
			<AppBar
				position="static"
				className="barrinha"
				style={{ color: "#fcfcfc", background: themeContext.bg.primary }}
			>
				<TabList
					centered
					indicatorColor="primary"
					onChange={handleChange}
					aria-label="simple tabs example"
				>
					<Tab label="Postagens" value="1" />
					<Tab label="Sobre o projeto" value="2" />
				</TabList>
			</AppBar>
			<TabPanel value="1">
				<ListPosts />
			</TabPanel>
			<TabPanel value="2">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
				similique nulla neque deserunt sed repudiandae ea accusantium, dicta
				nihil nisi nostrum ratione quod incidunt aspernatur delectus temporibus,
				sit, expedita recusandae.
			</TabPanel>
		</TabContext>
	);
}
