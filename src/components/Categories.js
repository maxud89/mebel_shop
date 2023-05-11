import React, {Component} from "react";

export class Categories extends Component{
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Ҳама молҳо'
                },
                {
                    key: 'chairs',
                    name: 'Курсӣ'
                },
                {
                    key: 'tables',
                    name: 'Миз'
                },
                {
                    key: 'sofa',
                    name: 'Диван'
                },
                {
                    key: 'light',
                    name: 'Чароғҳо'
                },
            ]
        }
    }
    render(){
        return(
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)} >{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories