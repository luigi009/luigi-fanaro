import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//Carrinho de compras
class SingleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      price: this.props.price,
      quant: 1
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    this.props.func(this.state);
  }

  render() {
    return (
      <div className="col-md-2 col-sm-6 card grid-container">
        <div className="card-body">
          <img src="https://images.apple.com/v/macbook-pro/n/images/overview/compare13_small.jpg"></img>
          <h5 className="card-title">{this.state.title}</h5>
          <p className="card-text">R${this.state.price}</p>
          <button className="btn btn-dark btn-sm" onClick={this.addToCart}>Adicionar ao carrinho</button>
        </div>
      </div>
    );
  }
}

class ShopCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      cost: 0
    };
    this.addItem = this.addItem.bind(this);
    this.getOrder = this.getOrder.bind(this);
    this.removeCurrentItem = this.removeCurrentItem.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.quantPlus = this.quantPlus.bind(this);
    this.quantMinus = this.quantMinus.bind(this);
  }

  handleCheck(val) {
    var array = [...this.state.items];
    var check = array.includes(val);
    return check;
  }

  addItem(item) {
    var hasItem = this.handleCheck(item);
    if (!hasItem) {
      var cost = this.state.cost + parseInt(item.price);
      this.setState((prevState) => ({
        items: [...prevState.items, item],
        cost: cost
      }));
    } else {
      var array = [...this.state.items];
      var objIndex = array.findIndex((obj) => obj.title === item.title);
      array[objIndex].quant = array[objIndex].quant + 1;
      var cost = this.state.cost + parseInt(array[objIndex].price);
      this.setState({
        items: array,
        cost: cost
      });
    }
  }

  removeCurrentItem(e) {
    var array = [...this.state.items];
    var index = Number(e.target.attributes.getNamedItem("data-id").value);
    var ip = parseInt(array[index].price);
    var cost =
      this.state.cost -
      parseInt(array[index].price) * parseInt(array[index].quant);
    array[index].quant = 1;
    array.splice(index, 1);
    this.setState({
      items: array,
      cost: cost
    });
  }

  getOrder() {
    console.log(this.state);
  }

  quantPlus(e) {
    var array = [...this.state.items];
    var index = Number(e.target.attributes.getNamedItem("data-id").value);
    array[index].quant = array[index].quant + 1;
    var cost = this.state.cost + parseInt(array[index].price);
    this.setState({
      items: array,
      cost: cost
    });
  }

  quantMinus(e) {
    var array = [...this.state.items];
    var index = Number(e.target.attributes.getNamedItem("data-id").value);
    if (array[index].quant > 1) {
      array[index].quant = array[index].quant - 1;
      var cost = this.state.cost - parseInt(array[index].price);
      this.setState({
        items: array,
        cost: cost
      });
    }
  }
  //Carrinho: quantidade, tipo e tirar do carrinho
  render() {
    var listItems = this.state.items.map((item, n) => (
      <tr key={n} className="cart-table-row">
        <td>{item.title}</td>
        <td>R${item.price}</td>
        <td>
          <select className="form-control btn btn-light">
            <option>Preto</option>
            <option>Branco</option>
            <option>Azul</option>
            <option>Rosa</option>
          </select>
        </td>
        <td>
          <button
            data-id={n}
            onClick={this.quantPlus}
            className="btn btn-dark btn-md btn-rounded">+</button>
          {item.quant}{" "}
          <button
            data-id={n}
            onClick={this.quantMinus}
            className="btn btn-dark btn-md btn-rounded">-</button>
        </td>
        <td>
          <button
            onClick={this.removeCurrentItem}
            data-id={n}
            className="btn btn-dark btn-rounded">X</button>
        </td>
      </tr>
    ));
    var allItems = this.state.items;
    var itemsCount = allItems.length;
    //Descrição dos produtos fora e dentro do carrinho
    return (
      <div className="container-lg">
        <div className="row">
          <SingleItem
            ref={this.SingleItem}
            func={this.addItem}
            id="1"
            title="MacBook Air"
            price="3000,00"
          />
          <SingleItem
            ref={this.SingleItem}
            func={this.addItem}
            id="2"
            title="MacBook Pro 13 pol."
            price="5500,00"
          />
          <SingleItem
            ref={this.SingleItem}
            func={this.addItem}
            id="3"
            title="MacBook Pro 16 pol."
            price="1200,00"
          />
          <SingleItem
            ref={this.SingleItem}
            func={this.addItem}
            id="4"
            title="iMac"
            price="1500,00"
          />
          <SingleItem
            ref={this.SingleItem}
            func={this.addItem}
            id="5"
            title="iMac Pro"
            price="2500,00"
          />
          <SingleItem
            ref={this.SingleItem}
            func={this.addItem}
            id="6"
            title="Mac Pro"
            price="4000,00"
          />
        </div>
        <br />
        <br />
        <div class="container">
          <div class="row ">
            <h1 class="text-center m-auto cart-title">Carrinho</h1>
          </div>
        </div>
        <table className="table table-striped table-responsive-sm">
          <caption>
            {itemsCount > 0 ? (
              <p className="text-center m-auto total-text">
                Total: R${this.state.cost}</p>
            ) : (
              <p className="text-center m-auto">Seu carrinho esta vazio</p>
            )}
          </caption>
          <thead className="cart-thead">
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Preço</th>
              <th scope="col">Cor</th>
              <th scope="col">Quantidade</th>
              <th scopr="col">Excluir</th>
            </tr>
          </thead>
          <tbody>{listItems}</tbody>
        </table>
        <br />
        {itemsCount > 0 && (
          <div>
            <button className="btn btn-dark btn-lg checkout-btn" onClick={this.getOrder}>Finalizar Compras</button>&nbsp;
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <ShopCart />
  </div>,
  document.getElementById("root")
);