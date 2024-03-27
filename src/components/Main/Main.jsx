import React, { useContext } from "react";
import './Main.css';
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, setRecentPrompt } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className="main">
            <div className="nav">
                <p>Bot-chan</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hey, There!</span></p>
                            <p>Bot-chan is here to help</p>
                        </div>
                        <div className="cards">
                            <div onClick={()=>loadPrompt("Suggest beautiful places to see on an upcoming road trip")} className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div onClick={()=>loadPrompt("How to learn piano")}className="card">
                                <p>How to learn piano</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div onClick={()=>loadPrompt("Brainstorm team bonding activities for our work retreat")} className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div onClick={()=>loadPrompt("What is ReactJS?")} className="card">
                                <p>What is ReactJS?</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    : <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? <div className="loader">
                                <hr className="animated-bg"/>
                                <hr className="animated-bg"/>
                                <hr className="animated-bg"/>
                            </div>
                            :
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}

                        </div>
                    </div>}

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => { setInput(e.target.value) }} value={input} type="text" placeholder="Enter a prompt here" />
                        <div>
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} width={30} alt="" /> : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Bot-Chan uses Gemini. Gemini API may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                </div>
            </div>
        </div>
    )
}

export default Main;