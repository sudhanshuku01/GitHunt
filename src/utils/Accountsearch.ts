import axios from "axios";

export interface AccountType {
  login: string;
  name:string;
  id: number;
  avatar_url: string;
  html_url: string;
}

let url="https://api.github.com/search/users/";

// const AccessToken=import.meta.env.VITE_APP_ACCESS_TOKEN;
// console.log(AccessToken)

export const searchAccounts = async (searchTerm:string,searchType:string):Promise<AccountType[]> => {
    try {
      let response;
      if(searchTerm.trim().length < 1){
        return [];
      }
      if (searchType === 'Location') {
        url= `https://api.github.com/search/users?q=location:${searchTerm}`
      }else if(searchType === 'Username'){
        url=`https://api.github.com/search/users?q=${searchTerm}+in:login`
      }else if(searchType === "Fullname"){
       url=`https://api.github.com/search/users?q=${searchTerm}+in:name
       `
      }else if(searchType === "Email"){
        url=`https://api.github.com/search/users?q=${searchTerm}+in:email`
      }
       response = await axios.get(url);
       if(response){
           console.log(response.data.items);
         return response.data.items;
       }else{
        return [];
       } 
    } catch (error) {
      return [];
    }
};



//  matched with user name
  //   https://api.github.com/search/users?q=sudhanshuku01+in:login

// email
  //https://api.github.com/search/users?q=sudh+in:email

//full name
// https://api.github.com/search/users?q=sudhanshu%20kumar+in:name

// location
// https://api.github.com/search/users?q=location:{patna}