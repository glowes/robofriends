import React ,{Component} from 'react'
import CardList from '../Components/CardList'
//import {robots} from './robots'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import './App.css'



class App extends Component{

	constructor(){
		super()
		this.state = {
		//state
		robots: [],
		searchfield: ''
	}
}

	//este metodo é um metodo usado no lyfecycle do REACT --> aprender mais aqui:
	//https://reactjs.org/docs/react-component.html

	//aqui é usado uma busca pelo API dado pelo link em baixo (ira devolver os mesmos valores que o que temos no robots.js)
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}))
	}


	
	onSearchChange = (event) =>{ // a function we create to deal with search
		//we should always use the method setState to set a attribute in the state
		this.setState({searchfield: event.target.value})
	}

	render(){

		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})

		if(this.state.robots.length === 0){
			return <h1>Loading...</h1>
		}



		return (
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange= {this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
	}
}

export default App;