import { formatNumber } from "../utils/format";
const COUNT = 4242;

function Home() {
  return (
    <>
      <div> home body </div>
      <div> COUNT: {formatNumber(COUNT)} </div>
    </>
  );
}

export default Home;
