import React,{useState, useContext} from 'react'
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext';
const Search =()=> {
  const githubContext =useContext(GithubContext);
  const alertContext =useContext(AlertContext);
  
    const [text, setText]=useState('');


   const onChange=(e)=> setText(e.target.value); 
   //this.setState({text:e.target.value}); 
  
   const onSubmit=(e)=>{
       e.preventDefault();
       if(text===''){
        alertContext.setAlert('Please enter something','light');
       }else{
        githubContext.searchUsers(text);
        setText('');
       }    
   };
   
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users.."
                        value={text}
                        onChange={onChange}></input>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"></input>
                </form>
                {githubContext.users.length > 0 &&
                <button onClick={githubContext.clearUsers} className="btn btn-light btn-block">Clear Users</button>
                }
            </div>
        );
}

export default Search;
