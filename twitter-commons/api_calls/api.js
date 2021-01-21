  const fetch = require('node-fetch');
  
  var requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': process.env.token
    }
    // redirect: 'follow',
    
  };


  
  async function user_call(username){
    let info;
    await fetch('https://api.twitter.com/2/users/by/username/' + username + '?user.fields=description,name,profile_image_url,public_metrics', requestOptions)
    .then(response => response.text())
    .then(result => {console.log(result); info = result;})
    .catch(error => console.log('error', error));
    
    info = JSON.parse(info);
    info = info.data;
    console.log(info.name);
    return info;
    

    // await fetch('https://api.twitter.com/2/users/1583284969/following', requestOptions)
    // .then(response => response.text())
    // .then(result => {followers = JSON.parse(result)})
    // .catch(error => console.log('error', error));
    // console.log(followers.content); 
  }
console.log(user_call('tonioenriquez'));
