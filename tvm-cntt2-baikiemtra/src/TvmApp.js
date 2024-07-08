
import './App.css';
import TvmSinhVienList from './component/TvmSinhVienList';
import axios from './api/tvmapi'
import TvmSinhVienadd from './component/TvmSinhVienadd';
function TvmApp() {
  return (
    <div className="container border my-3">
     <h1>Bài Kiểm Tra</h1>
     <hr/>
    <TvmSinhVienList/>
    <TvmSinhVienadd/>
    </div>
  );
}

export default TvmApp;
