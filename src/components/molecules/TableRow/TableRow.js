import React from 'react'
import TableData from './../../atoms/TableData'

const TableRow = (props) => {
  const transferLength = props.transfer.length

  const declension = (amount) => {
    switch (amount) {
      case 1:
        return('пересадка')
      case 2:
      case 3:
        return('пересадки')
      default:
        return('пересадок')
    }
  }

  return (
    <table className="table">
      <tbody>
        <tr>
          <TableData title={`${props.from} - ${props.to}`} descr={props.time} />
          <TableData title="В пути" descr={props.duration} />
          <TableData title={`${transferLength} ${declension(transferLength)}`} descr={props.transfer.join(', ')} />
        </tr>
        </tbody>
    </table>
  )
}

export default TableRow