import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул коричневый',
          img: 'chair_grey.jpg',
          desc: 'Стул Марита жесткий (тон светлый орех)',
          category: 'chairs',
          price: '499.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.jpg',
          desc: 'Стол обеденный прямоугольный',
          category: 'tables',
          price: '1999.99'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'bad.jpg',
          desc: 'Диван комфорт',
          category: 'sofa',
          price: '3999.99'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'lamp.jpg',
          desc: 'Настольная лампа с абажуром Бронза',
          category: 'light',
          price: '199.99'
        },
        {
          id: 5,
          title: 'Стул белый',
          img: 'table_white.jpg',
          desc: 'Стул белый мягкий арт для гостинной',
          category: 'chairs',
          price: '799.99'
        },
        {
          id: 6,
          title: 'Кухонный мебель',
          img: 'kitchen.jpg',
          desc: 'Кохонный гарнитур МДФ',
          category: 'chairs',
          price: '10999.99'
        }
      ],
      showFullItem: false
    }
    this.state.currentItems = this.state.items
    this.addToOrder=this.addToOrder.bind(this)
    this.deleteOrder=this.deleteOrder.bind(this)
    this.chooseCategory=this.chooseCategory.bind(this)
    this.onShowItem=this.onShowItem.bind(this)
  }
  render(){
  return (
    <div className="wrapper">
        <Header orders={this.state.orders} onDelete ={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        
        {this.state.showFullItem && <ShowFullItem/>}
        <Footer />
    </div>
  )
}

onShowItem(){
  this.setState({showFullItem: !this.state.showFullItem})
}

chooseCategory(category){
  if(category === 'all'){
    this.setState({currentItems: this.state.items})
    return
  }
  
  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}

deleteOrder(id){
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}

addToOrder(item){
  let isInArray = false
this.state.orders.forEach(el => {
  if(el.id === item.id)
  isInArray=true
} )
if(!isInArray)

this.setState({orders: [...this.state.orders,item]} )
}
}

export default App;
