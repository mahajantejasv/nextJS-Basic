import { useRouter } from 'next/router';
const newsDetails = () => {
    console.log(useRouter().query.newsId);
	return <h1>I am on news details screen</h1>;
};
export default newsDetails;
