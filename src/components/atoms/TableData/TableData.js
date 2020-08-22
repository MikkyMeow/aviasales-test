import React from 'react'
import './TableData.scss'

const TableData = (props) => {
  return (
    <td className="table-data">
      <span className="table-data__title">{props.title}</span>
      <span className="table-data__value">{props.descr}</span>
    </td>
  )
}

export default TableData