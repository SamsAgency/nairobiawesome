import React, {useEffect} from "react";
import Cards from "./cards";
import { fetchUsers } from './../../redux/actions';
import { connect } from "react-redux";
import "./Homepage.css"


const Homepage = ({userData, fetchUsers }) => {
  // const [users, setUsers] = useState(userData)

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="homepage">
      <h1> I am the Homepage </h1>

      <div className="cards">
      {
        // userData.results.map(user => <Cards key={user.id} user = {user}/>)
        // console.log(userData)

        userData.results? userData.results.map(user => <Cards key={user.id} image={user.image} name={user.name} />) : null
      }
      </div> 

      <button className="button" >Previous</button>
      <button className="button">Next</button>
     
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData : state.usersReducer.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers : () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)

