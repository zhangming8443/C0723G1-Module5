import React from "react";
import {Link} from "react-router-dom";

export default function Main() {
    return (
        <div className="container-fluid">
            <h1 className="justify-content-center d-flex">My App</h1>

            <div className="row">
                <div className="col-sm-2 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Exercise 1</h5>
                            <p className="card-text">ES6.</p>
                            <Link to="/exercise-1">
                                <button className="btn btn-primary">
                                    Click here
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Exercise 2.1</h5>
                            <p className="card-text">Tạo Element thể hiện bảng thông tin các sinh viên trong
                                lớp học.</p>
                            <Link to="/exercise-2.1">
                                <button className="btn btn-primary">
                                    Click here
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Exercise 2.2</h5>
                            <p className="card-text">Tạo Element thể hiện Sign in Form sử dụng Bootstrap.</p>
                            <Link to="/exercise-2.2">
                                <button className="btn btn-primary">
                                    Click here
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Exercise 3.1</h5>
                            <p className="card-text">Xây dựng component hiển thị danh sách sinh viên.</p>
                            <Link to="/exercise-3.1">
                                <button className="btn btn-primary">
                                    Click here
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Exercise 3.2</h5>
                            <p className="card-text">Ứng dụng quản lý công việc (Todo App).</p>
                            <Link to="/exercise-3.2">
                                <button className="btn btn-primary">
                                    Click here
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Exercise 4</h5>
                            <p className="card-text">Xây dựng Component Counter.</p>
                            <Link to="/exercise-4">
                                <button className="btn btn-primary">
                                    Click here
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-2 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Practice 5.1</h5>
                            <p className="card-text">Form đăng ký tài khoản mới.</p>
                            <Link to="/practice-5.1">
                                <button className="btn btn-primary">
                                    Click here
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Practice 5.2</h5>
                            <p className="card-text">Validate Form đăng ký.</p>
                            <Link to="/practice-5.2">
                                <button className="btn btn-primary">
                                    Click here
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Practice 5.3</h5>
                            <p className="card-text">Validate Form Login.</p>
                            <Link to="/practice-5.3">
                                <button className="btn btn-primary">
                                    Click here
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Practice 5.4</h5>
                            <p className="card-text">Validate Form Login with Formik.</p>
                            <Link to="/practice-5.4">
                                <button className="btn btn-primary">
                                    Click here
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Practice 5.5</h5>
                            <p className="card-text">Router 1.</p>
                            <Link to="/practice-5.5">
                                <button className="btn btn-primary">
                                    Click here
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Practice 5.6</h5>
                            <p className="card-text">Router 2.</p>
                            <Link to="/practice-5.6">
                                <button className="btn btn-primary">
                                    Click here
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-2 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Exercise 5.1</h5>
                            <p className="card-text">Tạo form liên hệ.</p>
                            <Link to="/exercise-5.1">
                                <button className="btn btn-primary">
                                    Click here
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}