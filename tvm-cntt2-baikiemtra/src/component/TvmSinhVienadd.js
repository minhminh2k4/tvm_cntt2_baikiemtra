import axios from './api/tvmapi.'
import React, { useEffect, useState } from 'react'

export default function TvmSinhVienadd({onTvmClose, onTvmSubmitForm, renderUser}){

    console.log(renderUsers);
    const [tvmId, setTvmId] = useState(0);
    const [tvmMaSV, setTvmMaSV] = useState("");
    const [tvmHoSV, setTvmHoSv] = useState("");
    const [tvmPhai, setTvmPhai] = useState("");
    const [tvmNgaySinh, setTvmNgaySinh]= useState("");
    const [tvmMaKH, setTvmMaKH]= useState("");
    const [tvmHocBong, setTvmHocBong]= useState("");
    const [tvmDiemTrungBinh, setTvmDiemTrungBinh]= useState("");
    const [tvmNoiSinh, setTvmNoiSinh]= useState("");

    useEffect(()=>{
        setTvmId(renderUser.id)
        setTvmUserName(renderUser.MaSV)
        setTvmPassword(renderUser.HoSV)
        setTvmEmail(renderUser.Phai)
        setTvmPhone(renderUser.NgaySinh)
        setTvmPhone(renderUser.MaKH)
        setTvmPhone(renderUser.HocBong)
        setTvmPhone(renderUser.DiemTrungBinh)
        setTvmPhone(renderUser.NoiSinh)

    },[renderUser])


    const tvmHandleClose = ()=>{
        onTvmclose(false);
    }

    const tvmHandleSubmit=async (event)=>{
        event.prevenDefaut();
        console.log(tvmId, tvmMaSV, tvmHoSV , tvmPhai ,tvmNgaySinh, tvmMaKH, tvmHocBong, tvmDiemTrungBinh, tvmNoiSinh )
        //post -> api
        let tvm0bjSinhVien = {
        UserName: tvmUserName,
        Password:  tvmPassword,
        Email: tvmEmail,
        Phone: tvmPhone,
        id: tvmId
        }
        const tvmRes = await axios.post("tvmSinhVien",tvmObjSinhVien);
        onTvmSubmitForm (false)

    }
  return (
    <div className='border'>
    <from>
    <div className="input-group mb-3">
        <span class="input-group-text" id="id">Id</span>
        <input type="text" class="form-control"
            name='id' value={tvmId}  onChange={(ev)=> setTvmId(ev.target.value)}
             placeholder="id" aria-label="id" aria-describedby="id"/>
    </div>

    <div className="input-group mb-3">
        <span class="input-group-text" id="MaSV">MaSV</span>
        <input type="text" class="form-control"
            name='MaSV' value={tvmMaSV} onChange={(ev)=> setTvmMaSV(ev.target.value)}
             placeholder="MaSV" aria-label="MaSV" aria-describedby="MaSV"/>
            </div>

    <div className="input-group mb-3">
        <span class="input-group-text" id="HoSv">HoSV</span>
        <input type="HoSv" class="form-control"
            name='HoSv' value={tvmPassword} onChange={(ev)=> setTvmHoSV(ev.target.value)}
             placeholder="HoSv" aria-label="HoSv" aria-describedby="HoSv"/>
            </div>

            <div className="input-group mb-3">
        <span class="input-group-text" id="TenSV">TenSV</span>
        <input type="TenSV" class="form-control"
            name='TenSV' value={tvmEmail} onChange={(ev)=> setTvmTenSV(ev.target.value)}
             placeholder="TenSV" aria-label="TenSV" aria-describedby="TenSV"/>
            </div>
            
            <div className="input-group mb-3">
        <span class="input-group-text" id="Phai">Phai</span>
        <input type="Phai" class="form-control"
            name='Phai' valPhaiue={tvmPhai} onChange={(ev)=> setTvmPhai(ev.target.value)}
             placeholder="Phai" aria-label="Phai" aria-describedby="Phai"/>
            </div>

            <div className="input-group mb-3">
        <span class="input-group-text" id="NgaySinh">NgaySinh</span>
        <input type="NgaySinh" class="form-control"
            name='NgaySinh' valPhaiue={tvmNgaySinh} onChange={(ev)=> setTvmNgaySinh(ev.target.value)}
             placeholder="NgaySinh" aria-label="NgaySinh" aria-describedby="NgaySinh"/>
            </div>
 
            <div className="input-group mb-3">
        <span class="input-group-text" id="MaKH">MaKH</span>
        <input type="MaKH" class="form-control"
            name='MaKH' valPhaiue={tvmMaKH} onChange={(ev)=> setTvmMaKH(ev.target.value)}
             placeholder="MaKH" aria-label="MaKH" aria-describedby="MaKH"/>
            </div>

            <div className="input-group mb-3">
        <span class="input-group-text" id="HocBong">HocBong</span>
        <input type="HocBong" class="form-control"
            name='HocBong' valPhaiue={tvmHocBong} onChange={(ev)=> setTvmHocBong(ev.target.value)}
             placeholder="HocBong" aria-label="HocBong" aria-describedby="HocBong"/>
            </div>
DiemTrungBinh
            <div className="input-group mb-3">
        <span class="input-group-text" id="DiemTrungBinh">DiemTrungBinh</span>
        <input type="DiemTrungBinh" class="form-control"
            name='DiemTrungBinh' valPhaiue={tvmDiemTrungBinh} onChange={(ev)=> setTvmNgaySinh(ev.target.value)}
             placeholder="DiemTrungBinh" aria-label="DiemTrungBinh" aria-describedby="DiemTrungBinh"/>
            </div>

 <div className="input-group mb-3">
        <span class="input-group-text" id="NoiSinh">NoiSinh</span>
        <input type="NoiSinh" class="form-control"
            name='NoiSinh' valPhaiue={tvmNoiSinh} onChange={(ev)=> setTvmNoiSinh(ev.target.value)}
             placeholder="NoiSinh" aria-label="NoiSinh" aria-describedby="NoiSinh"/>
            </div>
            
        <button className='btn btn-primary' name='btnTvmSave'onClick={(ev)=>tvmHandleSubmit(ev)}>Ghi lại</button>
        <button className='btn btn-danger' onClick={tvmHandleClose}>Đóng</button>
        </from>
    </div>
    
  )
}
