import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getSingleItem} from '../actions';
import NavButton from './nav_button';


class ViewItem extends Component {
    componentDidMount(){
        // console.log('View Item Props:', this.props.match.params.item_id);

        this.props.getSingleItem(this.props.match.params.item_id);
    }

    render(){
        // console.log('Item:', this.props.item);

        const {details='Loading Details', title='Loading Title'} = this.props.item;

        if(!title){
            return<h1>LOADING...</h1>
        }

        return (
            <div>
                <h1 className="center">View Item</h1>
                <NavButton color="blue" to="/" text="Back To List" />
                <p><b>Title:</b> {title}</p>
                <p><b>Details:</b> {details}</p>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        item: state.list.single
    }
}

export default connect(mapStateToProps,{
    getSingleItem: getSingleItem
})(ViewItem);