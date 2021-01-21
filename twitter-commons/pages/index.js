import GivenCard from '../components/Cards/TwitterGiven'
import React, { useEffect, useState } from 'react'


export default function Home() {
  const [users, setUsers] = React.useState([])
  var inputUsername = React.createRef();

  const getValue = () => {
    const enteredName = inputUsername.value;
    if(enteredName && !users.includes(enteredName)){
      var temp = [...users, enteredName]
      setUsers(temp)
      inputUsername.value = "";
    }
  }

  useEffect(() => {

  })


  return (
    <>
    <header>
      <div className="header-container">
        <div>Simple Commons</div>
        <div className="other-tabs">
            <div>FAQ</div>
            <div>Donate</div>
            <div>Contact</div>
        </div>
        


        </div>
    </header>
    <div className="content-container flex-center">

      <div className="width-100 content-wrapper">

          <div className="search-bar-wrapper width-100 flex-center">
            <div className="search-bar-container">
              <div>
                <input id="search-bar" type="text" ref={ input => inputUsername = input} placeholder="Enter twitter @" onKeyDown={(e) => {
                  if(e.key == "Enter") getValue()
                }} />
              </div>
              <div className="enter-button" onClick={getValue}>Enter</div>

            </div>
          </div>
          <div className="profiles-container">


            {users.map((username, index) => (

              <div key={`${username}-${index}`}> 
              
              {/* Throwing twitter @'s into the component */}
                <GivenCard profileName={username}/>
              </div>

            ))}


          </div>
      </div>
    </div>


    {/* need to go back and program so it sticks to footer */}
    <footer>
      <div className="footer-content ibm">
          Made by <span className="dev">Tyrus</span> & <span className="dev">Antonio</span>

      </div>
    </footer>
    <style jsx>{`
      .profiles-container{
        display: flex;
      }
      .dev{
        cursor: pointer;
        font-weight: 500;
        text-decoration: underline;
      }
      .footer-content{
        margin-top: 100px;
      }
      footer{
        margin: 0 auto;
        width: 50%;
        font-size: .9rem;
      }
      .search-bar-wrapper{
        margin-bottom: 50px;
      }
      .enter-button{
        margin-left: 20px;
      }
      .content-wrapper{
        margin-top: 150px;
      }
      #search-bar{
        border: 1px solid grey;
        border-radius: 10px;
        padding: 10px;
        font-size: 1rem;
        outline: none;

      }
      .input-title{
        margin-right: 30px;
      }
      .search-bar-container{
        display: flex;
        margin-top: 40px;
        align-items: center;
      }
      .width-100{
        width: 100%;
      }
      .landing-text{
        font-size: 2.3rem;
        margin-top: 75px;
      }
      .content-container{
        width: 50%;
        margin: 0 auto;
      }
      .flex-center{
        display: flex;
        justify-content: center;
      }
      .other-tabs{
        display: inline-flex;
      }
      .other-tabs div:not(first-child){
        margin-left: 20px;
      }
      .other-tabs div:hover{
        text-decoration: underline;
        cursor: pointer;
      }
      header{
        display: flex;
        justify-content: center;
      }
      .header-container{
        width: 50%;
        margin-top: 100px;
        display: flex;
        justify-content: space-between;
        font-size: 1rem;
      }
    `}</style>
    </>
  )
}
