import Grid from '../../common/template/grid'
import IconButton from '../../common/template/iconButton'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, changeName, changeAmount, changePrice, search, clear } from './productActions'

class ProductForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    const { add, clear, search, name, amount, price, _id } = this.props
    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(_id, name, amount, price)
    } else if (e.key === 'Escape') {
      clear()
    }
  }

  render() {
    const { add, search, _id, name, amount, price} = this.props
    return (
      <div role='form' className='productForm'>
      <br/>
        <Grid cols='12 6 3'>
            <input id='name' className='form-control'
            placeholder='Nome do Produto'
            onChange={this.props.changeName}
            onKeyUp={this.keyHandler}
            value={this.props.name}
            />
            <br/>
        </Grid>

        <Grid cols='12 6 3'>
            <input id='amount' className='form-control'
            placeholder='Quantidade'
            onChange={this.props.changeAmount}
            onKeyUp={this.keyHandler}
            value={this.props.amount}
            />
            <br/>
        </Grid>

        <Grid cols='12 6 3'>
            <input id='price' className='form-control'
            placeholder='Preço'
            onChange={this.props.changePrice}
            onKeyUp={this.keyHandler}
            value={this.props.price}
            />
            <br/>
        </Grid>
        
        <Grid cols='12 3 2'>
          <IconButton style='primary' icon='plus'
            onClick={() => add(_id, name, amount, price)}
          /> 
          <IconButton style='info' icon='search'
            onClick={search}
          />
          <IconButton style='default' icon='close'
            onClick={this.props.clear}
          />
            <br/>
            <br/>
        </Grid>
        <Grid cols='12 6 3'>
          <input id='_id' className='form-control'
            placeholder='id'
            onKeyUp={this.keyHandler}
            value={this.props._id}
            type="hidden"
          />
          <br/>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({name: state.product.name, amount: state.product.amount, 
  price: state.product.price, _id: state.product._id})
const mapDispatchToProps = dispatch => 
  bindActionCreators({add, changeName,changePrice,changeAmount, search, clear}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)
