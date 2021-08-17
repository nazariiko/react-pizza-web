import React from "react";
import { Route } from "react-router-dom";
import axios from 'axios'
import { connect } from 'react-redux'

import { setPizzas as setPizzasAction } from './redux/actions/pizzas'

import { Header } from './components'
import { Home, Cart } from './pages'


class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas)
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home pizzas={this.props.items} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


















// function App() {
//   const [pizzas, setPizzas] = React.useState([])

//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       setPizzas(data.pizzas)
//     });
//   }, [])

//   return (
    // <div className="wrapper">
    //   <Header />
    //   <div className="content">
    //     <Route path="/" render={() => <Home pizzas={pizzas} />} exact />
    //     <Route path="/cart" component={Cart} exact />
    //   </div>
    // </div>
//   );
// }