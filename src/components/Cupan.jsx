import { useRef, useState } from 'react'
import './Cupan.css'

function Cupan() {

    const [itemGeminiCountety, setGeminiCountety] = useState(0)
    const [itemChatCountety, setChatCountety] = useState(0)
    const [itemGoogleChatCountety, setGoogleCountety] = useState(0)
    const [itemChat, setChat] = useState(0)
    const [itemGemini, setGemini] = useState(0)
    const [itemGoogle, setGoogle] = useState(0)
    const [itemDescount, setDescount] = useState(itemChat+itemGemini+itemGoogle)
    const [coupen, setCoupen] = useState('')
    
    const complite = useRef("");

    const totle = itemChat+itemGemini+itemGoogle

    const hendelDescuount = ()=>{
        setDescount  ( totle / 2)
        complite.current.style.opacity = 1;
;
       }

    const chatplus = () => {
        setChatCountety(prevCount => prevCount + 1);
        setChat(prevCount => prevCount + 120);
    }

    const chatmine = () => {
        setChatCountety(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
        setChat(prevCount => (prevCount > 0 ? prevCount - 120 : 120));
    }

    const geminiplus = () => {
        setGeminiCountety(prevCount => prevCount + 1);
        setGemini(prevCount => prevCount + 40);
    }

    const geminimine = () => {
        setGeminiCountety(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
        setGemini(prevCount => (prevCount > 0 ? prevCount - 40 : 40));
    }

    const googleplus = () => {
        setGoogleCountety(prevCount => prevCount + 1);
        setGoogle(prevCount => prevCount + 100);
    }

    const googlemine = () => {
        setGoogleCountety(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
        setGoogle(prevCount => (prevCount > 0 ? prevCount - 100 : 100));
    }

    
    const hendelCoupne = (event) => {
        event.prentDefault()

        setCoupen(event.target.value)

    }

    const cupen = "K24752psur261"


    return (
        <>
            <div className="page">
                <div className="prodect1">
                    <div className="img">
                        <img src="https://i.ytimg.com/vi/GcEDrhMrSCw/hqdefault.jpg" alt="" width={"50px"} height={"50px"} />
                    </div>
                    <div className="info">
                        <div className="name">
                            <p>Dhosa</p>
                        </div>

                        <div className="contity">
                            <div className="plus" onClick={chatplus}>+</div>
                            <div className="conty">{itemChatCountety}</div>
                            <div className="minse" onClick={chatmine}>-</div>
                        </div>

                    </div>
                    <div className="price">
                        <p>$ {itemChat}</p>
                    </div>
                </div>

                <div className="prodect2">
                    <div className="img">
                        <img src="https://img.freepik.com/premium-photo/image-indian-street-food-pani-puri_1059430-658.jpg" alt="" width={"50px"} height={"50px"} />
                    </div>
                    <div className="info">
                        <div className="name">
                            <p>Pani Puri</p>
                        </div>

                        <div className="contity">
                            <div className="plus" onClick={geminiplus}>+</div>
                            <div className="conty">{itemGeminiCountety}</div>
                            <div className="minse" onClick={geminimine}>-</div>
                        </div>

                    </div>
                    <div className="price">
                        <p>$ {itemGemini}</p>
                    </div>
                </div>

                <div className="prodect3">
                    <div className="img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_Qqy0TLxaIjyHupAtvgW3z-7Bl7b_i7S4w&s" alt="" width={"50px"} height={"50px"} />
                    </div>
                    <div className="info">
                        <div className="name">
                            <p>Pizza</p>
                        </div>

                        <div className="contity">
                            <div className="plus" onClick={googleplus}>+</div>
                            <div className="conty">{itemGoogleChatCountety}</div>
                            <div className="minse" onClick={googlemine}>-</div>
                        </div>

                    </div>
                    <div className="price">
                        <p>$ {itemGoogle}</p>
                    </div>
                </div>

                <div className="bottem">
                    <div className="complite" ref={complite}>
                        <img   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYf-yn96mf5wuchdC1h_3PdzfM4KiBxA-Huw&s" alt=""  />
                    </div>
                    <div className="right">
                        <div className="cupun">
                            <input 
                            type="text"
                            placeholder='Enter Cupen Code'
                            />
                        </div>
                        <div className="submit">
                            <button type="submit" ref={complite} onClick={hendelDescuount} >Submit Cupen Code </button>
                        </div>
                        
                    </div>
                    <div className="totle">
                          Total :-  {totle}
                          <div className="nice">
                            <h3 ref={complite} style={{ opacity: 0 }}>You Got 50% Descount <br /> Now You Pay :- {itemDescount}</h3>
                          </div>
                        </div>
                        <h1>{coupen}</h1>
                </div>

                </div>
        </>
    )
}

export default Cupan
