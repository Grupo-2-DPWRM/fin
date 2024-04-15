import React from 'react';
import './style.css';
// import './script.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
    


const Chatbot = () => {
    return (
        <article class="chatbot" id="cuerpo">
        <div class="text">
        
            <div id="agregar">
        
            </div>
        
        </div>
        
        <div id="botones">
            <button type="button" id="1" class="botones" onclick="hola()">HOLA</button>
            <button type="button" id="3" class="botones" onclick="hola()">COMO ESTAS</button>
            <button type="button" id="4" class="botones" onclick="hola()">OSTIA</button>
            <button type="button" id="2" class="botones" onclick="hola()">ADIOS</button>
            <button type="button" id="5" onclick="clearElements()" class="clear">CLEAR</button>
        </div>
        
        <div class="send-cont">
            <div class="btn-container">
                <button class="send-button" id="send">
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                fill="currentColor"
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <span>Send</span>
                </button>
            </div>
            <input maxlength="50" type="text" id="insertartexto"></input>
        </div>
        
    </article>
    );
};
export default Chatbot;


