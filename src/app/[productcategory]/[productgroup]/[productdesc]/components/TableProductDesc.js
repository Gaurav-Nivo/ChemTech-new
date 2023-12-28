"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


function TableProductDesc({ pCode }) {
  const code = pCode[0];
  const [variation, setVariation] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost/chemtech15-12/chemtech/Api/local/variationapi.php?productcode=${code}`)
      .then((response) => {
        setVariation(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [code]);

  const excludedColumns = ['id', 'p_code', 'var_pcode', 'variation', 'created_date', 'status', 'created_by'];
  const renderTableHeader = () => {
    if (variation.length === 0) return null;

    const headers = Object.keys(variation[0]).filter(header => !excludedColumns.includes(header));

    return (
      <tr>
        {headers.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    );
  };

  const renderTableBody = () => {
    return (
      <>
         {variation.map((row, index) => (
        <tr key={index}>
          {Object.entries(row).filter(([key]) => !excludedColumns.includes(key)).map(([key, value]) => (
            <td key={key}>{value}</td>
          ))}
        </tr>
      ))}
      </>
    );
  };

  return (
    <>
      <Table responsive striped bordered hover>
        <thead className='table-info'>
          {renderTableHeader()}
        </thead> 
        <tbody>
          {renderTableBody()}
        </tbody>
      </Table>
    </>
  );
}

export default TableProductDesc;