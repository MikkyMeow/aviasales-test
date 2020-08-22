import React from 'react'
import TableData from './../../atoms/TableData'

const TableRow = () => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <TableData title="MOW - HKT" descr="10:45 - 08:00" />
          <TableData title="В пути" descr="21ч 15м" />
          <TableData title="2 пересадки" descr="HKG, JNB" />
        </tr>
        </tbody>
    </table>
  )
}

export default TableRow