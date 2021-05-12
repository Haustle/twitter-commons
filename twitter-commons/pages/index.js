import GivenCard from '../components/Cards/TwitterGiven'
import React, { useEffect, useState } from 'react'
import check from '../db/users'



export default function Home() {


  // const [users, setUsers] = React.useState([])
  const [accounts, setAccounts] = React.useState(new Map());
  var inputUsername = React.createRef();

  const removeProfile = (username) => {
    var tempMap = accounts;
    tempMap.delete(username)
    setAccounts(new Map(tempMap));
    console.log('removed account');
    console.log(accounts)
    // setAccounts(tempMap);
  }



  const search = async () => {
    const enteredName = inputUsername.value;
    console.log(`entered name: ${enteredName}`);
    inputUsername.value = "";


    if (enteredName && !accounts.has(enteredName)){
      const foundInfo = await check(enteredName);
      if (foundInfo){

        setAccounts(new Map(accounts.set(enteredName, foundInfo)))
        console.log(accounts)
        console.log("Added account")
        }

    }
  }  
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
                  if(e.key == "Enter") search()
                }} />
              </div>
              <div className="enter-button" onClick={() => search()}>press <span className="enter-text">Enter</span></div>

            </div>
          </div>
          <div className="profiles-container">

            {[...accounts.keys()].map((username) => (
              <div className="profile">
                <GivenCard profileInfo={accounts.get(username)}/>
                <div className="remove-text" onClick={() => removeProfile(username)}>remove</div>
              </div>
            ))}

          </div>
      </div>

    </div>


    {/* need to go back and program so it sticks to footer */}
    <footer>
      <div className="footer-content ibm">
          Made by <span className="dev"><a href="https://tyrus.im" target="_blank">Tyrus</a></span> & <span className="dev"><a href="https://aenriq.com" target="_blank">Antonio</a></span>
      </div>
    </footer>
    <style jsx>{`

      .enter-text{
        background-color: #efefef;
        padding: 2px 5px;
        border-radius: 5px;
        margin-left: 5px;
      }
      .remove-text{
        width: max-content;
        margin: 0 auto;
        cursor: pointer;
        font-size: .8rem;
        margin-top: 15px;
      }
      .remove-text:hover{
        text-decoration: underline;
      }
      .profiles-container{
        display: inline-flex;

      }
      .dev{
        cursor: pointer;
        font-weight: 500;
        text-decoration: underline;
      }
      .footer-content{
        margin-top: 50px;
        margin-bottom: 100px;
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

