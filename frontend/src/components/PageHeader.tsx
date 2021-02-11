import React from 'react';
import { Grid } from "@material-ui/core";

type PageHeaderProps = {
    name: string;
}
const PageHeader : React.FunctionComponent<PageHeaderProps> = ({ name }) => {
	const a = 1;
	return (
		<Grid className="page-header">
			{name}
		</Grid>
	);
};

export default PageHeader;
