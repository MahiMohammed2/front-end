import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FinenciereEmp = () => {
  const [Employe, setEmploye] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const affiche = async () => {
      const accesToken = localStorage.getItem("accessToken_finenciere");
      if (accesToken === "undefined" || accesToken === null || accesToken === 0 || accesToken === false) {
          navigate('/finenciere/login')
      }
      const res = await axios({
        method: "get",
        url: "http://localhost:8000/api/admin/finenciere",
        headers: {
          "Accept": "application/json",
          "Authorization": 'Bearer ' + accesToken
        }
      })
      setEmploye(res.data.employe)
      console.log(Employe);
    }
    affiche();
  }, []);
  return (
    <div className=''>
      <table className='table'>
        <tr className='header'>
          <th colSpan={20}>Table des Employes</th>
        </tr>
        <tr>
          <th className='space-header'></th>
          <th className='space-header'></th>
          <th className='bordred-head'>ID</th>
          <th className='space-header'></th>
          <th className='bordred-head'>Full name</th>
          <th className='space-header'></th>
          <th className='bordred-head'>Email</th>
          <th className='space-header'></th>
          <th className='bordred-head'>CIN</th>
          <th className='space-header'></th>
          <th className='bordred-head'>Interet</th>
          <th className='space-header'></th>
        </tr>
        {
          Employe.map((e) => {
            return (
              <tr>
                <td></td>
                <td></td>
                <td>{e.id}</td>
                <td></td>
                <td>{e.fullname}</td>
                <td></td>
                <td>{e.email}</td>
                <td></td>
                <td>{e.CIN}</td>
                <td></td>
                <td>{e.interet}</td>
                <td></td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default FinenciereEmp