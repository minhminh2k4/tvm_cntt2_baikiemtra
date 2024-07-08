import React, { Component } from 'react'

export default class TvmSinhVienList extends Component {
  render() {
    let tvmElementSinhVien = renderTvmSinhVien.map((tvmSinhVien,index)=>{
      return(
          <>
              <tr key={index}>
                  <td>{tvmSinhVien.id}</td>
                  <td>{tvmSinhVien.MaSV}</td>
                  <td>{tvmSinhVien.HoSv}</td>
                  <td>{tvmSinhVien.TenSV}</td>
                  <td>{tvmSinhVien.Phai}</td>
                  <td>{tvmSinhVien.NgaySinh}</td>
                  <td>{tvmSinhVien.MaKH}</td>
                  <td>{tvmSinhVien.HocBong}</td>
                  <td>{tvmSinhVien.DiemTrungBinh}</td>
                  <td>{tvmSinhVien.NoiSinh}</td>
                  <td>
                      <button className='btn btn-danger'onClick={tvmHandleDelete}>Delete</button>
                  </td>
              </tr>
          </>
      )
  })

  const tvmHandleDelete = async (param)=>{
      if(window.confirm('Bạn có muốn xóa thật không?')){
          const tvmRes = await axios.delete("tvmUsers/"+param.id);
      }
      onTvmDelete();
  }
    return (
      <div className='row'>
    <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Id</th>
                <th>MaSV</th>
                <th>HoSv</th>
                <th>TenSV</th>
                <th>Phai</th>
                <th>NgaySinh</th>
                <th>MaKH</th>
                <th>HocBong</th>
                <th>DiemTrungBinh</th>
                <th>NoiSinh</th>
            </tr>
        </thead>
        <tbody>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

         </tbody>
        </table>
      </div>
    )
  }
}
