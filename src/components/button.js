import './button.css';
import Modal from './Modal'
import {Component} from "react";
export default class Button extends Component {

    state = {
        visible: false
    }

    montrer = () => {
        this.setState({
            visible: true
        })
    }

    cache = () => {
        this.setState({
            visible: false
        })   }

    render() {
        return (
            <div>
                <button onClick={this.montrer} className='bouton'>ADD</button>
                <Modal
                visible={this.state.visible}
                cache={this.cache}/>
            </div>
        );
    }
}