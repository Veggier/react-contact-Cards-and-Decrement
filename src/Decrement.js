import React,{Component} from "react"
import PropTypes from "prop-types";
class  Decrement extends Component{
    constructor(props){
        super(props);
        this.state={number:props.start};
    }
    handleDecrement=(state)=>{
        if(state.number===0){
            return alert("cannot be less than zreo")
        }
        this.setState({number: state.number-1});
    }
    render(){
        return(
        <div>
            {this.state.number}{" "}
            {this.props.number}<button onClick={()=>this.handleDecrement(this.state)}>decrement</button>
        </div>
        )
    }

 
}
Decrement.propTypes={
    start: PropTypes.number.isRequired,
};
export default Decrement;