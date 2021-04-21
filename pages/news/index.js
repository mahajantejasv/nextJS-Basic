import { Fragment } from 'react';
import  Link  from 'next/link';
const newsPage = () => {
	return (
		<Fragment>
			<h2>News</h2>
			<ul>
				<li>
					<Link href="/news/detailedViewForNews">Click me to navigate</Link>
				</li>
			</ul>
		</Fragment>
	);
};
export default newsPage;
