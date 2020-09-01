import React, { Component} from "react";
import Cards from "./cards";

class Homepage extends Component{
  constructor(props){
    super(props)

    this.state = {}
  }

  render(){
    return(
      <div>
        <h1>I am the homepage</h1>
      </div>
    )
  }
}
export default Homepage







// const Homepage = () => {
//   const [persons, setpersons] = useState([])

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     const getDataFromApi = await fetch(
//       "https://rickandmortyapi.com/api/character"
//     );
//     const jsonData = await getDataFromApi.json();
//     console.log(jsonData.results);

//     setpersons(jsonData.resuts);
//   };


//   let itemsToRender;
//   if (persons) {
//     itemsToRender = persons.map(item => {
//       return <Cards/>;
//     });
//   }
//   return {itemsToRender};
// };
// export default Homepage;
