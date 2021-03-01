import React, { ChangeEvent } from "react";

import { Grid, Tabs, Tab, Box, Typography } from "@material-ui/core";

import { PageHeader, Layout } from "../components";
import '../css/PetCustom.scss';

type TabPanelProps = {
	children : React.ReactChildren | string;
	value : number;
	index : number;
}
const TabPanel = ({ children, value, index } : TabPanelProps) => {
	const a = 1;
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
};

const PetCustom: React.FunctionComponent = () => {
	const dog = {
		name: "댕댕이",
		weight: 3,
		gender: "남",
		breed: "말티즈"
	};
	const [value, setValue] = React.useState(0);
	const handleChange = (event : ChangeEvent<{}>, newValue : number) => {
		setValue(newValue);
	};

	const a11yProps = (index : number) => ({
		id: `scrollable-auto-tab-${index}`,
		'aria-controls': `scrollable-auto-tabpanel-${index}`,
	});

	return (
		<Layout>
			<PageHeader
				name="마이펫"
			/>
			<Grid className="petcustom-con">
				<Grid className="profile">
					<Grid>
						<span className="shadow">
							<span>
								<p>
									몸무게 :
									{dog.weight}
									{' '}
									kg
								</p>
								<p>
									성별 :
									{dog.gender}
								</p>
								<p>
									견종 :
									{dog.breed}
								</p>
							</span>
						</span>
						<img src="/img/dog.PNG" alt="dog profile" />
					</Grid>
					<span>{dog.name}</span>
				</Grid>
				<Grid className="custom-info">
					<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor="primary"
						textColor="primary"
						variant="scrollable"
						scrollButtons="auto"
						aria-label="scrollable auto tabs example"
					>
						<Tab label="옷차림" {...a11yProps(0)} />
						<Tab label="예방접종" {...a11yProps(1)} />
					</Tabs>
					<TabPanel value={value} index={0}>
						Lorem justo amet at justo dolores, amet sit clita amet kasd duo, sit lorem rebum sanctus dolor lorem magna. Nonumy erat consetetur et sadipscing et sit voluptua. Aliquyam consetetur dolore erat sadipscing dolores sed dolores. Stet sanctus clita et eos invidunt, diam at tempor duo et et consetetur tempor dolor. Takimata eirmod sea ut eirmod takimata labore, invidunt aliquyam amet gubergren erat erat. Dolores sit accusam no ea sit dolore et ipsum, amet voluptua dolor amet dolor diam tempor, ea amet aliquyam elitr accusam amet justo accusam ipsum et. Sed nonumy at kasd amet amet sed, rebum aliquyam nonumy kasd et accusam dolor et accusam ea. Ipsum magna consetetur justo est. Dolor aliquyam et sea sea. Sit takimata at dolore ipsum lorem clita, rebum amet labore ea sit sit. Duo labore erat accusam erat. Dolore magna voluptua elitr dolore invidunt consetetur est, tempor dolores lorem labore et gubergren justo et tempor. Dolor est sed eos elitr vero accusam sadipscing tempor, vero dolor at voluptua ipsum diam lorem nonumy sit, at sanctus rebum diam lorem sea et. At est ut kasd eos elitr justo ea amet. No no ea et lorem ipsum et, erat erat clita sea invidunt takimata at dolor,.Lorem justo amet at justo dolores, amet sit clita amet kasd duo, sit lorem rebum sanctus dolor lorem magna. Nonumy erat consetetur et sadipscing et sit voluptua. Aliquyam consetetur dolore erat sadipscing dolores sed dolores. Stet sanctus clita et eos invidunt, diam at tempor duo et et consetetur tempor dolor. Takimata eirmod sea ut eirmod takimata labore, invidunt aliquyam amet gubergren erat erat. Dolores sit accusam no ea sit dolore et ipsum, amet voluptua dolor amet dolor diam tempor, ea amet aliquyam elitr accusam amet justo accusam ipsum et. Sed nonumy at kasd amet amet sed, rebum aliquyam nonumy kasd et accusam dolor et accusam ea. Ipsum magna consetetur justo est. Dolor aliquyam et sea sea. Sit takimata at dolore ipsum lorem clita, rebum amet labore ea sit sit. Duo labore erat accusam erat. Dolore magna voluptua elitr dolore invidunt consetetur est, tempor dolores lorem labore et gubergren justo et tempor. Dolor est sed eos elitr vero accusam sadipscing tempor, vero dolor at voluptua ipsum diam lorem nonumy sit, at sanctus rebum diam lorem sea et. At est ut kasd eos elitr justo ea amet. No no ea et lorem ipsum et, erat erat clita sea invidunt takimata at dolor,.Lorem justo amet at justo dolores, amet sit clita amet kasd duo, sit lorem rebum sanctus dolor lorem magna. Nonumy erat consetetur et sadipscing et sit voluptua. Aliquyam consetetur dolore erat sadipscing dolores sed dolores. Stet sanctus clita et eos invidunt, diam at tempor duo et et consetetur tempor dolor. Takimata eirmod sea ut eirmod takimata labore, invidunt aliquyam amet gubergren erat erat. Dolores sit accusam no ea sit dolore et ipsum, amet voluptua dolor amet dolor diam tempor, ea amet aliquyam elitr accusam amet justo accusam ipsum et. Sed nonumy at kasd amet amet sed, rebum aliquyam nonumy kasd et accusam dolor et accusam ea. Ipsum magna consetetur justo est. Dolor aliquyam et sea sea. Sit takimata at dolore ipsum lorem clita, rebum amet labore ea sit sit. Duo labore erat accusam erat. Dolore magna voluptua elitr dolore invidunt consetetur est, tempor dolores lorem labore et gubergren justo et tempor. Dolor est sed eos elitr vero accusam sadipscing tempor, vero dolor at voluptua ipsum diam lorem nonumy sit, at sanctus rebum diam lorem sea et. At est ut kasd eos elitr justo ea amet. No no ea et lorem ipsum et, erat erat clita sea invidunt takimata at dolor,.
					</TabPanel>
					<TabPanel value={value} index={1}>
						Erfreuet klage stunden seh neu busen die und zu klage und, tränen euch labyrinthisch steigt gestalten schwebet. Manche lied ihr wiederholt naht hören. Mein mit lied mir euch gestalten. Wohl ernsten menge jenem sehnen tränen weich stillen lied klage, erschüttert tränen seelen ich faßt es nach. In die meinem und herzen busen guten. Ihr verklungen stillen ihr nennt gleich fühlt mich tränen, seh zu seh tränen euch getäuscht wahn euch was, mein gedränge erste sich die unbestimmten stillen lebt. Seelen in mir mild zerstoben liebe gesänge die euren euren, weich folgt bang sehnen nun schauer um, nennt freundschaft jugendlich umwittert mein stillen, irrt zu besitze ihr mir faßt schatten ist. Ernsten die mir ein busen diesmal ihr irren. Mild was die alten der mit, die mein mir die mich unbekannten fühlt, vom längst mich guten herz was ein herz erste, zu der in wiederholt die ertönt die mein. An froher auf meinem hinweggeschwunden, jenem gestalten lauf noch welt, herzen fühlt versuch nach der, wenn walten getäuscht ihr erfreuet einst ein sich um nebel. Wird festzuhalten umwittert nun nun fühlt freundliche, noch vom faßt herz es wie, wahn herz fühl und beifall ein lied walten. Bringt mir lebt nicht euch erfreuet..Erfreuet klage stunden seh neu busen die und zu klage und, tränen euch labyrinthisch steigt gestalten schwebet. Manche lied ihr wiederholt naht hören. Mein mit lied mir euch gestalten. Wohl ernsten menge jenem sehnen tränen weich stillen lied klage, erschüttert tränen seelen ich faßt es nach. In die meinem und herzen busen guten. Ihr verklungen stillen ihr nennt gleich fühlt mich tränen, seh zu seh tränen euch getäuscht wahn euch was, mein gedränge erste sich die unbestimmten stillen lebt. Seelen in mir mild zerstoben liebe gesänge die euren euren, weich folgt bang sehnen nun schauer um, nennt freundschaft jugendlich umwittert mein stillen, irrt zu besitze ihr mir faßt schatten ist. Ernsten die mir ein busen diesmal ihr irren. Mild was die alten der mit, die mein mir die mich unbekannten fühlt, vom längst mich guten herz was ein herz erste, zu der in wiederholt die ertönt die mein. An froher auf meinem hinweggeschwunden, jenem gestalten lauf noch welt, herzen fühlt versuch nach der, wenn walten getäuscht ihr erfreuet einst ein sich um nebel. Wird festzuhalten umwittert nun nun fühlt freundliche, noch vom faßt herz es wie, wahn herz fühl und beifall ein lied walten. Bringt mir lebt nicht euch erfreuet..Erfreuet klage stunden seh neu busen die und zu klage und, tränen euch labyrinthisch steigt gestalten schwebet. Manche lied ihr wiederholt naht hören. Mein mit lied mir euch gestalten. Wohl ernsten menge jenem sehnen tränen weich stillen lied klage, erschüttert tränen seelen ich faßt es nach. In die meinem und herzen busen guten. Ihr verklungen stillen ihr nennt gleich fühlt mich tränen, seh zu seh tränen euch getäuscht wahn euch was, mein gedränge erste sich die unbestimmten stillen lebt. Seelen in mir mild zerstoben liebe gesänge die euren euren, weich folgt bang sehnen nun schauer um, nennt freundschaft jugendlich umwittert mein stillen, irrt zu besitze ihr mir faßt schatten ist. Ernsten die mir ein busen diesmal ihr irren. Mild was die alten der mit, die mein mir die mich unbekannten fühlt, vom längst mich guten herz was ein herz erste, zu der in wiederholt die ertönt die mein. An froher auf meinem hinweggeschwunden, jenem gestalten lauf noch welt, herzen fühlt versuch nach der, wenn walten getäuscht ihr erfreuet einst ein sich um nebel. Wird festzuhalten umwittert nun nun fühlt freundliche, noch vom faßt herz es wie, wahn herz fühl und beifall ein lied walten. Bringt mir lebt nicht euch erfreuet..
					</TabPanel>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default PetCustom;
