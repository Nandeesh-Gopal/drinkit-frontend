import '../styles/Nav.css'
import { useNavigate,useLocation } from 'react-router-dom';
function Nav(){
    const navi=useNavigate();
    const location=useLocation();
    const currentPath=location.pathname;
    return(
        <>
            <div className='nav'>
                <h1>Drink it</h1>
                <div>
                    <input type="text"></input>
                    <button>Search</button>
                </div>
                <div style={{display:"flex", gap:"20px"}}>
                    {
                        currentPath==="/login" ?(<button onClick={()=>navi("/signup")}>Signup</button>)
                        : currentPath==="/signup"?(<button onClick={()=>navi("/login")}>Login</button>)
                        :(<button onClick={()=>navi("/login")}>Login</button>)
                    }
                    <button onClick={ ()=>navi("/")}>Home</button>
                    <button onClick={ ()=>navi("/orders")}>My Orders</button>
                </div>
            </div>
        </>
    )
}
export default Nav;