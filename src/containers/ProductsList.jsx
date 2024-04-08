import {connect} from 'react-redux';
import List from '../components/List';

function mapStateToProps(state){
    const {products} = state;
    return{products: products}
}

export default connect(
    mapStateToProps,
    null
)(List);