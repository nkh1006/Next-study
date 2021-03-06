import Axios from "axios";

const CoinList = ({coinData}) => {
  return (
    <div>
      {coinData.coins.map((coin, idx) => {
        return (
          <div key={idx}>
            <h1>{coin.name}</h1>
            <img src={coin.icon} />
            <p>{coin.price}</p>
          </div>
        );
      })}
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const data = await Axios.get("https://api/coinstats.app/public/v1/coins?skip=0")

  return {
    props: {
      coinData: data.data
    }
  }
}

export default CoinList;