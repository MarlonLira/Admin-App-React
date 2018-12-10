import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './CycleActions'

class CycleList extends Component {

  componentWillMount() {
    this.props.getList()
  }

  renderRows() {
    const list = this.props.list || []
  return list.map(Cycle => (
    <tr key={Cycle._id}>
      <td>{Cycle.name}</td>
      <td>{Cycle.month}</td>
      <td>{Cycle.year}</td>
      <td>
        <button className='btn btn-warning' onClick={() => this.props.showUpdate(Cycle)}>
          <i className='fa fa-pencil'></i>
        </button>
        <button className='btn btn-danger' onClick={() => this.props.showDelete(Cycle)}>
          <i className='fa fa-trash-o'></i>
        </button>
      </td>
    </tr>
  ))
}

render() {
  return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
              <th className='table-actions'>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({list: state.cycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CycleList)