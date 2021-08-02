import styled from "styled-components";
import { Btn } from "../global/styles";

const Nav=styled.div`
    color: tomato;
    background: black;
    font-family: 'Poppins', sans-serif;

    h1{
        font-size: 3em;
        margin: 0px;

        &:hover{
            cursor: pointer;
        }
    }

    .margin{
        margin: 0 2em;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    a{
        margin-right: 50px;

        &:hover{
            color: rgb(211, 69, 44);
            cursor: pointer;
        }
    }
`



export default function Navbar(){
    return(
        <Nav>
            <div className="margin"> 
                <h1>Deliba💦</h1> 
                <div>
                    <a>Sobre</a>
                    <a>Github</a>
                    <a>Login</a>
                    <Btn>Registrar Encomenda 🚚</Btn>
                </div>
            </div>
        </Nav>
    )
}