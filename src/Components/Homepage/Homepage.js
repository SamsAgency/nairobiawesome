import React, {useEffect} from "react";
import Cards from "./cards";
import { fetchUsers } from './../../redux/actions';
import { connect } from "react-redux";



const Homepage = ({userData, fetchUsers }) => {
  // const [users, setUsers] = useState(userData)

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1> I am the Homepage </h1>
      
      {
        // userData.results.map(user => <Cards key={user.id} user = {user}/>)
        console.log(userData)
      }
      <Cards/>
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

