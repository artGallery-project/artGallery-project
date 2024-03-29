import React, { Fragment } from 'react';
import AdminMenu from './AdminMenu';
import MetaData from '../layout/MetaData';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col-12 col-md-2'>
          <AdminMenu/>
        </div>

        <div className='col-12 col-md-9 pt-4 px-5'>
          <h1 className='pb-5'>Panel de control</h1>
          <Fragment>
            <MetaData title={'Panel de control'}/>

            <div className="row pb-3">
              <div className="col-xl-12 col-sm-12 mb-3">
                <div className="card text-white bg-primary o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">Monto Total<br /> <b>$2.000.000</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row pb-4">
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-success o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">Productos<br /> <b>123</b></div>
                  </div>
                  <Link className="card-footer text-white clearfix small z-1" to="/admin/products">
                    <span className="float-left">Ver Detalles</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>


              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-warning o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">Pedidos<br /> <b>34</b></div>
                  </div>
                  <Link className="card-footer text-white clearfix small z-1" to="/admin/orders">
                    <span className="float-left">Ver Detalles</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>


              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-info o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">Usuarios<br /> <b>512</b></div>
                  </div>
                  <Link className="card-footer text-white clearfix small z-1" to="/admin/users">
                    <span className="float-left">Ver Detalles</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>


              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-danger o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center card-font-size">Agotados<br /> <b>20</b></div>
                  </div>
                </div>
              </div>
            </div>

          </Fragment>
        </div>
      </div>
    </Fragment>
  )
}

export default Dashboard;