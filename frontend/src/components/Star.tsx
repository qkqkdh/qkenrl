import React, { Dispatch, SetStateAction } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Grid } from '@material-ui/core';

type Props = {
	star: number;
	setStar: Dispatch<SetStateAction<number>>;
}

const Star = ({ star, setStar }: Props) => {
	const renderStars = (): Array<React.ReactNode> => {
		const starArray = [];

		for (let i = 1; i < star + 1; i += 1) {
			starArray.push(<StarIcon key={i} onClick={() => setStar(i)} className="star-on star" />);
		}
		for (let j = star + 1; j <= 5; j += 1) {
			starArray.push(<StarBorderIcon key={j} onClick={() => setStar(j)} className="star-off star" />);
		}
		return starArray;
	};

	return (
		<Grid className="star-con">
			{renderStars()}
		</Grid>
	);
};

export default Star;
