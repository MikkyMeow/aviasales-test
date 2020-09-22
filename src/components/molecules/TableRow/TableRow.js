import React from 'react'
import TableData from './../../atoms/TableData'

const TableRow = ({from, to, duration, transfer, time}) => {

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
    <table className='table'>
      <tbody>
        <tr>
          <TableData title={`${from} - ${to}`} descr={time} />
          <TableData title='В пути' descr={duration} />
          <TableData title={`${transfer.length} ${declension(transfer.length)}`} descr={transfer.join(', ')} />
        </tr>
        </tbody>
    </table>
  )
}

export default TableRow