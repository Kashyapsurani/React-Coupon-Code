import { useRef, useState } from 'react'
import './Cupan.css'

function Cupan() {

    const [itemGeminiCountety, setGeminiCountety] = useState(1)
    const [itemChatCountety, setChatCountety] = useState(1)
    const [itemGoogleChatCountety, setGoogleCountety] = useState(1)
    const [itemChat, setChat] = useState(100)
    const [itemGemini, setGemini] = useState(40)
    const [itemGoogle, setGoogle] = useState(60)
    const [itemDescount, setDescount] = useState(itemChat+itemGemini+itemGoogle)

    const complite = useRef(null);

    const totle = itemChat+itemGemini+itemGoogle

    const hendelDescuount = ()=>{
        setDescount  ( totle / 2)
        complite.current.style.opacity = "1";
        console.log("efg5yghvrtb")
       }


    const chatplus = () => {
        setChatCountety(prevCount => prevCount + 1);
        setChat(prevCount => prevCount + 100);
    }

    const chatmine = () => {
        setChatCountety(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
        setChat(prevCount => (prevCount > 100 ? prevCount - 100 : 100));
    }

    const geminiplus = () => {
        setGeminiCountety(prevCount => prevCount + 1);
        setGemini(prevCount => prevCount + 40);
    }

    const geminimine = () => {
        setGeminiCountety(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
        setGemini(prevCount => (prevCount > 40 ? prevCount - 40 : 40));
    }

    const googleplus = () => {
        setGoogleCountety(prevCount => prevCount + 1);
        setGoogle(prevCount => prevCount + 80);
    }

    const googlemine = () => {
        setGoogleCountety(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
        setGoogle(prevCount => (prevCount > 80 ? prevCount - 80 : 80));
    }

    const cupen = "K24752psur261"


    return (
        <>
            <div className="page">
                <div className="prodect1">
                    <div className="img">
                        <img src="data:image/png;base64,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" alt="" width={"50px"} height={"50px"} />
                    </div>
                    <div className="info">
                        <div className="name">
                            <p>chatGpt Ai</p>
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
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAA+VBMVEX///9gY2lhZWr///1gZGdgY2hbXmTHycrs7O3//v9PVlySlJf5+vtOUlhZW2BVWl+1trfW19mAgoR6fH/p5d9UVlzl5+jc3t9YW2JbX2J+f4bP2ODi4N90uOOnw91SVlm5zd+jyODD1OB9vuPc3OLM1d/i4d2XweCQwuKwzeGJweNlteSyx92PutubvNqBuN1tq9VUpdU/nNAolM2oqqyanaBydHbLzc/z7+rj6e7Dzd+91ODw+frW6vCNuODK2N53sd3P3e293/Ftu+KLyOV0weBauOVzr9aWu9HX6/dtqNZYqtpApNpWo8wSkctztM8Ah8gAgLpDRklMnh5pAAAL/ElEQVR4nO2dCWObOBOGMSAgMZdxsCF1StKmOdo0V7G9aZze227bNM32//+Yb2bEaTvH7reE2ujt5TgCpEczoxlBHUkSEhISEhISEhISEhISEhISEhJaDJl1d+A3kGAgGKCMujtQv0zBQDJ7dfegfhmDlbq7ULuMgQiKvbXGMzAHa40PisZgrafU3Yma1RsMBmazIZiDwdraH81mYCCDtWYzGBCDRkdFgzNotCEMEgam1FgKRj+FoDSWwfZ2yqCxS4OxvQ2GsLPWYEMwHxEDDqGhhrCNDDJD+KPu7tShs2fPiobQRG8wn3AG/SQqgjc0DIJivn4NDB71+7khNC4kvOYMuDfs7DTQEpRnB5ubTziEgiU0qIhWpNeP94HBk4QBUEgsoUHbaudbB/sZhE4CYYdbQjNMQdnf3dpCBudzIDQiTVAmu7uPgcEBMSAIj/rJ8rDTiL0ERbp483IX7OAxGsLmFATEsGMsuzso+0fP95ABOMP+5vk5usPbt0lkpFVyZ7DUN10U6evRUcoggQCW8ORRagqJMQyM5bWEye67p0+fP9/LDCGBQHlCukxieAQKdfe1CinKZOt4YwPMABgUIGxyDG/fkkd0MmPoLaFDnO192dhABk/LEPgS+SQJCzx5TmSsSEu0zTj58PzFBunp0wKDFEJKIfGJbVQfURhLkjxPLvaP3iUEiAGHsLe1VaBwTstkulJyY+D20DMW2ClM0zh7v7/75t3Gu41cnEFuCRwCGUOGgZsD2QI5xqBnGKZpSgv6rMbk6/v9NxtTDDIInAJxODg4yDE8yzGAkEDd4/i/NXm/h77wcRpCZguI4eAgMYacAyYNZ+bKUoQEyH0nHzZefMwQIANOYXc3sYbHoMwYNjdfE4XtCR1ed///IwGGr3svPpJyDCmE3d3Dw8PHpAMutIazxfeAWV18IgpFY9hLjeHwMMPAQZwRuAUNg7fp4k+kAJHhKXI4wuLhZarDVEjhSWIDS8hAkj583uC2sMEZcL0pg3gM5fNSjj7R5OOLJDxi4lxUZhGbOP/LEgnnSJGUT59ffEwgfAG9ewd/oS3Ab9TLs7r7+BD68P0FihAcHx9/yXV09OXlMq4Gc3Tx+TNR+P79uCCEcPzX8uQDd+jr91wcwLdv9PdhYxCUIZycnHwjHZ+8bA4BmOyLy2T4ub79+FJ3tx5YHy7LBE5OfnxrSDjM9eny8uTk8vTkFIUIXp0t+42FWZ1cXl6e5np1rjSPwdlpSUdS8xAo0tarIoPJchZIt0uRMjd49erqHIqEBkKQvl69SnVcd19q05cUwdVF3V2pTRfXCYOfdfekRv28aroZQES4RghXTUuSi1KkH1eg66+NywyK2kcGp3X3ol5N/gYz2K27FzXr+Prq74tGuwLU0BAVm7RzMk+T66ujpjOQTq8/NJ7Bz+tJ3V2oXft/192D+nVx2qD99PlSJs0tmzOZf9Xdg99A53V34DdQk+vmVGcNj4ioxt1dEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEirL7LhDr9v12kO9/yAXHHTu98GSZqdTcU+4DHdk+YEWapqq2Xbkt8eVXxEuaLXv0VCPnNWo8u5IRjtyWAvE0t9aFLqVPnK7wkK4XjS8s2EnUlst1epX/PxvbGmtWQW2XuE1dZ8uEt35EFs3lGWYk3alDIyRI+Nl4EJa4DhOgEDga5lF9zHVfynXwSvK0Z0/9DNk2DttVCWDTkQDlpntd4eurrtx2/ZDlTDYo8qeNdQdVYXBWXfbATaTK7WDsaXieJnv6Xl3+sMoIDJht6rrmiGOzb7b0nRLhhmKKlwaOlZLVVnLGeFyqCTCLsYRRMaQVfexyL3Qt33vHg1dy7Ytt7J+SIaP093CS0x/VkFPDlnLqNQL75mHGLpe5eO/MjpCy59raCuj0GjAx3nEATpChNMx5yMrzCYg6NEabY0bMNQb1cZULRhKDfwMn1SGBcsTY/8YgdkfjzvzcxslbdDplZ0Lj+nfscjQwUZn3Ok/3P+AiDVgEOj/zBP6QwZrle1HftctdnWsgwiM3vUjx/EjL4u0Ziz7PqyElhznhxh4AGXjJr1aoYaq5duOE40K56YzV5UeUKIWIv57U+h1VzVIKGA9hWBqR3H+nRGMG5fYjuqEGGhbLFz1+EDc1QCa40EsjLIaRLcc3/+FLYxfTmDjqziy+clbWpA37EaO7VeUtRsR5qBDMsF7MnAjrCWol7ioMlvOlg4obVpQZFFqReOA7C5U0fo9h5BRyiurwI0foGPBQKmysYrrswmDxYyVzg4HZIA9SNy1ihjoQYvJ81ODGxRHalJbaRrj8wU1T4HB2I1w8JoW8ioslGEINlYjYUi5MV+G+OUdaFlkMAoZnRobEoTEEjytJVfFIA6xbrtX+OHDdDkCx/GGw7YaweFg81pygi5YSNjGKVsdtfHbDOfUcWObtZgTwlvdSMPDWcgP0NE8MgYqPzbq4ql9hr6kJn0DBpXZAZybqeq9mpK9dyyGcywn02MMfdx20ZKUHxkwjcmBx6N/f6QhI3yLhfwQM8Z8hAU89y/7ApM1xqIkZPY9B0OKHSf9ZJUxGCHr+xQtiR1oOOSADuDrXj+kHQBu292Q3NiJ0+bSiDZmIATIma25Nr7Fa9GpeAANuV/SwUMHTIHZ1LDKeIBRLZw5t2et+qhVEH/hRL+o/wHO+jq+5AgUzDMh1o3ITsAOeJkvrSQ/XKAfyTS0EA0jiZwjlu0ZlH0BYer4Yc1pQyDOKIlHBtXEA7iUzOb5mTe7rcYiHAXNc4g/uzr/ODzdYTIvN4gBeLVZqDxGaDiyo0v5j6LRcXOGz/e0HeAuiZItUGMIIy3brZaBdH8GKm54jSHiY6cQQZ4C4ii522I8aAWlMn8YkB0U3+rh8sf3KacZ+KUKzcTQEcZpjyqLB7jCz8QD9L55DNq4tTmzigwh1LMRvqJ4AN8vjIN7TwmLaanp9OpO6hbEAGJr4VBFIqujkVe8Lsiz64IXRZAH++mfgHyhx62mJXemNMTZt9AuyA5GpVPpeLBTTkCiAoOSHZRNSJHWs5F7wLmy/AAXr5k9TbOssY12APHA4mHf9x2oBRwUQHLIcXwsE7qzs0UM/HKh5NzIoHQXpcygIjsAu9NtzHZvyhOTAO1CbFKd1GfBcJgKqz78UnOXoalGX5jqKYWQ1TLkIoPSuoCBMncGpTDyKn3BgKnFeuFWtRMT76UMcOiMagKGX6kZgzl24PA6oKgbfWGawcP4goSjkO3b24R81UoYBE5EcSIJFqv0wv+FZtydXWXuYvAb2AEWDMDg1l3rDi5RuMXQ43GrN1c4EPKFslEtAgOD4px9W9VE2YJl4KI2E7vLQgZhmcF4AXxBakPAk2fT5Vx9H9ZwyCGgbwjjtuBBDKZi4gLYgWREGNeim28vy5jeO2NkgD1ht1SZ/8IObmXwAGsjV0z7G1bnhn0kvLqcJD54n1ideRTCzJZWYCAvoi9QfQszfYMltLHSlS1+Q8yMcD0cTTUZWt2EAu4jLaIvwOUdtHZmDaWZPUWjy5PAdP+vjVsuNMq8q7qvsmhExoEMpnOkhfAFKvJx986Wp63cdahYDrJSBoMH5JUEIWmjWy1A6PO6MZSnK9wF8QUFQj+jXb5o5OaZfT+2Hdo7DArVnAv9l9VwlIYAcxipjMm8bKT9g//SDh7OF+CiPVuDjBdKACdS20PXjYdeGGmslSNItwu8AJNlLRrF405Hb0PBhAgcjo5y5YWMiSiT9vXR0JmmBUGgYRygp9SsuBwlugEVDSwIoKjW+INsTnLTbU6euEAM0MpDlmyX8H/oq0DuUK8KWxueP7W9EshkBXw/cRHrhVxm7Ns0r1lBrEUMezp9E871bVYgYOU327pgP84UA0vTwqkNCnhL8zkDXwu1hAG8aWGYKVxtPdDCoH3DmavRiu45fmDjbR7Ntn2tfcO+gunKlhNgs8BnceFRnbYHikttO/iWV2bgeeueR+lIB154XWLQhVfrU8/lDNfXk/MNZ89cnfp6PGy327E7TnfDZx9OwSCqx9SqL83aSeHL5j7TcKeUxn/orpCQkJCQkJCQkJCQkJBQ7fofclWAs/HjONkAAAAASUVORK5CYII=" alt="" width={"50px"} height={"50px"} />
                    </div>
                    <div className="info">
                        <div className="name">
                            <p>Gemini Ai</p>
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
                        <img src="data:image/jpeg;base64,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" alt="" width={"50px"} height={"50px"} />
                    </div>
                    <div className="info">
                        <div className="name">
                            <p>Google Ai</p>
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
                    <div className="complite">
                        <img ref={complite} style={{ opacity: 0 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYf-yn96mf5wuchdC1h_3PdzfM4KiBxA-Huw&s" alt=""  />
                    </div>
                    <div className="right">
                        <div className="cupun">
                            <input type="text" placeholder='Enter Cupen Code'/>
                        </div>
                        <div className="submit">
                            <button type="submit" ref={complite} onClick={hendelDescuount} >Submit Cupen Code </button>
                        </div>
                        
                    </div>
                    <div className="totle">
                          Totle  {itemDescount}
                          <div className="nice">
                            <h3 ref={complite} style={{ opacity: 0 }}>You Got 50% Descount</h3>
                          </div>
                        </div>
                        
                </div>

                </div>
        </>
    )
}

export default Cupan
