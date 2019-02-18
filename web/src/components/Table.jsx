import React from 'react';

export default function Table(props) {

  return (
    <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            <button className="button" onClick={() => props.sortBy('price')}>Price</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.map(row => (
            <tr>
              <td width="500">{row.name}</td>
              <td className="priceRow">{row.price}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
