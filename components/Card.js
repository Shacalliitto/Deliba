import styled from "styled-components"

const Content=styled.div`
    display: flex;
    flex-direction: column;
    border: 3px solid rgba(255, 99, 71, 0.664);
    border-radius: 18px;
    background: rgb(51, 51, 51);
    color: rgba(255, 99, 71, 0.664);
    width: 30em;
    heigth: 5em;
    margin: 1em auto;
    transition: 0.6s;
    
    div{
        display:flex;
        flex-direction: column;
        align-items: center
    }

    &:hover{
        box-shadow: 8px 8px 8px 6px rgba(0, 0, 0, 0.2);
        background:black;
        color: tomato;
        cursor: pointer;
    }
`

export default function Card(props){
    return(
        <Content>
            <div>
            <h2>{props.name}</h2>
            <h4>{props.user}</h4>
            <p>{props.texto}</p>
            </div>
        </Content>        
    )
}