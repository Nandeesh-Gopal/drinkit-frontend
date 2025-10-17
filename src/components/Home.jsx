import '../styles/styles.css'
import '../styles/home.css'
import Nav from './Nav';
function Home(){
    return(
        <>
            <Nav />
            <div>
                <center><h1 style={{padding:"30px"}}>Fast. Fresh. At Your Door.</h1></center>
            </div>
            <div className='main-cont'>
            <div className='cont'>
                <img src="/images/R.jpeg" alt='image'/>
                <h3>orange juice</h3>
                <div>
                    Price: 20
                </div>
                <div>   
                    <button>Buy Now</button>
                    <button>Add to cart</button>
                </div>
            </div><div className='cont'>
                <img src="/images/R.jpeg" alt='image'/>
                <h3>orange juice</h3>
                <div>
                    Price: 20
                </div>
                <div>   
                    <button>Buy Now</button>
                    <button>Add to cart</button>
                </div>
            </div><div className='cont'>
                <img src="/images/R.jpeg" alt='image'/>
                <h3>orange juice</h3>
                <div>
                    Price: 20
                </div>
                <div>   
                    <button>Buy Now</button>
                    <button>Add to cart</button>
                </div>
            </div><div className='cont'>
                <img src="/images/R.jpeg" alt='image'/>
                <h3>orange juice</h3>
                <div>
                    Price: 20
                </div>
                <div>   
                    <button>Buy Now</button>
                    <button>Add to cart</button>
                </div>
            </div><div className='cont'>
                <img src="/images/R.jpeg" alt='image'/>
                <h3>orange juice</h3>
                <div>
                    Price: 20
                </div>
                <div>   
                    <button>Buy Now</button>
                    <button>Add to cart</button>
                </div>
                </div>
            </div>
        </>
    )
}
export default Home;