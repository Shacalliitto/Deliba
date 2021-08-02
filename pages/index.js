import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Handbox from '../images/handbox.png'
import { Btn } from '../global/styles'
import Card from '../components/Card'

const Content=styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 15px;
  padding: 2em;
  margin-top: 4em;
  margin-bottom: 2em;
  width: 80%;
  height: 60%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 8px 8px 8px 6px rgba(0, 0, 0, 0.2);

  h2{
    font-size: 2em;
    
  }
`

const Cards=styled.div`

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 1.8fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  width: 85%;
  height: 60%;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 15px;
  padding: 2em;
  margin-top: 2em;
  margin-bottom: 4em;
  margin-left: auto;
  margin-right: auto;

  

  .titulo{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 13px;
    box-shadow: 5px 5px 5px 3px rgba(0, 0, 0, 0.2);
    margin-bottom:2em;
    padding: 1em;

    h2{
      line-height: 0px;
      margin-bottom: 0px;
    }

    p{
      margin-bottom: 0px;
    }
  }

  .flex{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: rgb(75, 75, 75);
    border-radius: 16px;
    padding: 2em auto;
    box-shadow: 5px 5px 5px 3px rgba(0, 0, 0, 0.2);
  }
`


export default function Home(){
  return(
    <>
      <Navbar />
      <Content>
        <div>
        <h2>Tenha controle de suas encomendas em qualquer lugar!</h2>
        <p>Comece por aqui! Digite um código de rastreio válido.</p>
        <Btn>Procurar minha encomenda😄</Btn>
        </div>        
        <Image src={Handbox} />        
      </Content>
      <Cards>
        <div className='titulo'>
          <h2>Um app aprovado pela comunidade!</h2>
          <p>Veja os comentarios nas redes sociais sobre a gente.❣</p>
        </div>
        
        <div className='flex'>
          <Card name='Mateus' user='@MatDAVM' texto='Escutem @TheresNoFace no spotify!'/>
          <Card name='Ricardo' user='@rschstr' texto='Ai que dor.'/>
          <Card name='Tadeu' user='@burro' texto='Justo'/>
          <Card name='Vital' user='@Vitaalr' texto='Por isso que teu pai manca'/>
          <Card name='Shacalliitto' user='@Shacalliitto' texto='React podia ser mais facil...' />
        </div>              
      </Cards>
    </>
  )
}