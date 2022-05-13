import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="container">
        <div className="row g-3">
            <div className="col col-12 col-sm-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12">
                        <label for="" className="" >Username</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12">
                        <label for="" >Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12">

                        <button className="btn btn-success">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
