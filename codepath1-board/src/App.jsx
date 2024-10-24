import './App.css'
import InfoCard from './components/card.component'

const App = () => {
  return (
    <div className="App">
      <h1>GMK Keysets</h1>
      <div className='container'>
        <InfoCard 
          title = "GMK Olivia"
          image = "https://cdn.shopify.com/s/files/1/3099/8088/products/KirvyWide_3000x.png?v=1675439265"
          link = "https://novelkeys.com/products/gmk-olivia-no3"
        />
        <InfoCard 
          title = "GMK Metropolis"
          image = "https://cdn.shopify.com/s/files/1/3099/8088/products/NK_MetroR2_16x9-TILE_1512x.jpg?v=1673617453"
          link = "https://novelkeys.com/products/gmk-metropolis-r2"
        />
        <InfoCard 
          title = "GMK Dots"
          image = "https://cdn.shopify.com/s/files/1/3099/8088/products/GMK_Dots-render_boop-02_1512x.jpg?v=1662470114"
          link = "https://novelkeys.com/products/gmk-dots-r2"
        />
        <InfoCard 
          title = "GMK Mizu"
          image = "https://candykeys.com/img/gb/mizu/1x.jpg"
          link = "https://candykeys.com/group-buys/gmk-mizu"
        />
        <InfoCard 
          title = "GMK Bento"
          image = "https://candykeys.com/img/gb/2x.jpg"
          link = "https://novelkeys.com/products/gmk-bento-r2"
        />
        <InfoCard 
          title = "GMK Peach Blossom"
          image = "https://cdn.shopify.com/s/files/1/0238/7342/1376/products/Interesting_1728x.png?v=1652134165"
          link = "https://cannonkeys.com/products/gmk-peach-blossom-r2"
        />
        <InfoCard 
          title = "GMK Coral"
          image = "https://cdn.shopify.com/s/files/1/0277/8021/8940/products/GMKCoralMatrixVita5_1390x864.jpg?v=1655920745"
          link = "https://mekibo.com/products/gmk-coral-r2-group-buy"
        />
        <InfoCard 
          title = "GMK Rainy Day"
          image = "https://cdn.shopify.com/s/files/1/1994/3097/products/Rainy_Day_Boards_2020-May-25_02-43-27PM-000_CustomizedView15463664400-Copy_1390x1041.png?v=1661193322"
          link = "https://kono.store/products/gmk-rainy-day"
        />
        <InfoCard 
          title = "GMK Firefly"
          image = "https://cdn.shopify.com/s/files/1/1994/3097/products/GMK_Firefly_-_910_1391x782.png?v=1631750917https://candykeys.com/img/gb/mizu/1x.jpg"
          link = "https://kono.store/products/gmk-firefly"
        />
        <InfoCard 
          title = "GMK Peaches n Cream"
          image = "https://candykeys.com/img/gb/pnc/1x.jpg"
          link = "https://candykeys.com/group-buys/gmk-pnc"
        />
      </div>
      
    </div>
  )
}

export default App
