import React, { Component } from 'react';

class Hopdongxemay extends Component {
    render() {
        return (
            <div className="formHD">
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <h1 className="display-4">THÔNG TIN HỢP ĐỒNG XE GẮN MÁY</h1>
                  <hr className="my-2" />
                  <form>
                    <div className="row">
                      <div className="col-12">
                        <div className="bg-dark p-2 m-2 text-light rounded">
                          I. THÔNG TIN NGƯỜI ĐƯỢC BẢO HIỂM
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mt-3">
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5 text-uppercase mt-1">stt</div>
                          <input className="col-7 bg-secondary rounded" />
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5 mt-1">Nguồn kinh doanh :</div>
                          <select className="form-control form-control-sm">
                            <option>Vui lòng chọn</option>
                          </select>
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5 mt-1">Loại khách hàng : </div>
                          <select className="col-7 form-control form-control-sm">
                            <option>Vui lòng chọn</option>
                            <option>Vip</option>
                            <option>Tiềm năng</option>
                            <option>Mới gia nhập</option>
                          </select>
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5 text-uppercase mt-1">MST : </div>
                          <input className="col-7 rounded" />
                        </div>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <div className="btn-group col-12 mb-2 align-self-center">
                          <div className="col-4 text-left mt-1 ">Số bảng kê</div>
                          <input className="col-5 bg-secondary rounded ml-auto" />
                          <button
                            type="button"
                            className="btn btn-outline-info btn-sm"
                          >
                            Tìm hợp đồng
                          </button>
                        </div>
                        <div className="btn-group col-12 mb-2 align-self-center">
                          <div className="col-4 text-left mt-1">Kênh phân phối</div>
                          <input className="col-5 bg-secondary rounded ml-auto" />
                          <button
                            type="button"
                            className="btn btn-outline-info btn-sm"
                          >
                            Tìm
                          </button>
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5 mt-1">Nhóm khách hàng :</div>
                          <select className="form-control form-control-sm">
                            <option>Vui lòng chọn</option>
                          </select>
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5 mt-1">Số CMND : </div>
                          <input className="col-7 rounded" />
                        </div>
                      </div>
                      <div className="col-12 mt-3">
                        <div className="btn-group col-12 mb-2">
                          <div className="col-4">Tên người được bảo hiểm (*) : </div>
                          <input
                            className="col-8 align-left rounded"
                            placeholder="Nguyễn Văn A"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="btn-group col-12 mb-2">
                          <div className="col-4">Địa chỉ : </div>
                          <input
                            className="col-8 align-left rounded"
                            placeholder="Thôn/Phường/Xã/Quận/TP"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Điện thoại</div>
                          <input className="col-7 rounded" />
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Fax </div>
                          <input className="col-7 rounded" />
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Tổ chức phi chính phủ </div>
                          <input className="col-7 rounded" />
                        </div>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Di động</div>
                          <input className="col-7 rounded" />
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Tỉnh/TP : </div>
                          <select className="col-7 form-control form-control-sm">
                            <option>American</option>
                            <option>Hà nội</option>
                            <option>TPHCM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* end I. */}
                    <hr className="my-2" />
                    {/* II. */}
                    <div className="row">
                      <div className="col-12">
                        <div className="bg-dark p-2 m-2 text-light text-uppercase rounded">
                          II. thông tin Lái xe
                        </div>
                      </div>
                      <div className="col-12"></div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mt-3">
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Tên lái phụ xe</div>
                          <input className="col-7 rounded" />
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Số CMND: </div>
                          <input className="col-7 rounded" />
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Giới tính</div>
                          <select className="col-7 form-control form-control-sm">
                            <option>Nam</option>
                            <option>Nữ</option>
                          </select>
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Thời hạn từ</div>
                          <input className="col-7 rounded" />
                        </div>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Số GPLX</div>
                          <input className="col-7 rounded" />
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Ngày sinh: </div>
                          <input className="col-7 rounded" />
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Loại bằng</div>
                          <select className="col-7 form-control form-control-sm">
                            <option>Vui lòng chọn</option>
                            <option>Đại học</option>
                            <option>Trung cấp</option>
                          </select>
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Thời hạn đến</div>
                          <input className="col-7 rounded" />
                        </div>
                      </div>
                    </div>
                    {/* end II. */}
                    <hr className="my-2" />
                    {/* III. */}
                    <div className="row">
                      <div className="col-12">
                        <div className="bg-dark p-2 m-2 text-light text-uppercase rounded">
                          III. thông tin tham gia bảo hiểm
                        </div>
                      </div>
                      <div className="col-12"></div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mt-3">
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Mục đích sử dụng</div>
                          <select className="col-7 form-control form-control-sm">
                            <option>Vui lòng chọn</option>
                          </select>
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Số ghế</div>
                          <input className="col-7 bg-secondary rounded" />
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Năm sản xuất: </div>
                          <input className="col-7 rounded" />
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Số khung: </div>
                          <input className="col-7 rounded" />
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Hãng xe:</div>
                          <select className="col-7 form-control form-control-sm">
                            <option>Vui lòng chọn</option>
                          </select>
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Kiểu xe:</div>
                          <select className="col-7 form-control form-control-sm">
                            <option>Vui lòng chọn</option>
                          </select>
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Màu sơn:</div>
                          <select className="col-7 form-control form-control-sm">
                            <option>Vui lòng chọn</option>
                          </select>
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Tỉnh/TP xe tham gia:</div>
                          <select className="col-7 form-control form-control-sm">
                            <option>Vui lòng chọn</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Loại xe:</div>
                          <select className="col-7 form-control form-control-sm">
                            <option>Vui lòng chọn</option>
                          </select>
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Trọng tải</div>
                          <input className="col-7 bg-secondary rounded" />
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Biển số xe: </div>
                          <input className="col-7 rounded" />
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Số máy: </div>
                          <input className="col-7 rounded" />
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Hiệu xe:</div>
                          <select className="col-7 form-control form-control-sm">
                            <option>Vui lòng chọn</option>
                          </select>
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Dòng xe:</div>
                          <select className="col-7 form-control form-control-sm">
                            <option>Vui lòng chọn</option>
                          </select>
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-5">Dung tích:</div>
                          <select className="col-7 form-control form-control-sm">
                            <option>Vui lòng chọn</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* end II. */}
                    <hr className="my-2" />
                    {/* IV. */}
                    <div className="row">
                      <div className="col-12">
                        <div className="bg-dark p-2 m-2 text-light text-uppercase rounded">
                          IV. phạm vi yêu cầu được bảo hiểm
                        </div>
                      </div>
                      <div className="col-12"></div>
                    </div>
                    <div className="row">
                      <div className="col-12 text-uppercase ml-3 mt-3">
                        <h6>1.thời hạn bảo hiểm</h6>
                      </div>
                      <div className="col-4 mt-2">
                        <div className="btn-group col-12 mb-2">
                          <div className="col-6">Thời hạn BH từ:</div>
                          <input className="col-6 rounded" placeholder="dd/MM/yyyy" />
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-6">Ngày cấp</div>
                          <input className="col-6 bg-secondary rounded" />
                        </div>
                      </div>
                      <div className="col-4 mt-2">
                        <div className="btn-group col-12 mb-2">
                          <div className="col-6">Thời hạn BH đến:</div>
                          <input className="col-6 rounded" placeholder="dd/MM/yyyy" />
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-6">Ngày nộp phí:</div>
                          <input className="col-6 bg-secondary rounded" />
                        </div>
                      </div>
                      <div className="col-4 mt-2">
                        <div className="btn-group col-12 mb-2">
                          <div className="col-6">Ngày bán:</div>
                          <input className="col-6 rounded" placeholder="today" />
                        </div>
                      </div>
                      <div className="col-12 text-uppercase ml-3 mt-3">
                        <h6>2.Bảo hiểm TNDS Bắt buộc</h6>
                      </div>
                      <div className="col-4 mt-2">
                        <div className="btn-group col-12 mb-2">
                          <div className="col-6">Loại giấy CNBH:</div>
                          <select className="col-6 form-control form-control-sm">
                            <option>Vui lòng chọn</option>
                          </select>
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-6">Tên nhân viên:</div>
                          <input className="col-6 bg-secondary rounded" />
                        </div>
                      </div>
                      <div className="col-4 mt-3">
                        <div className="btn-group col-12 mb-2">
                          <div className="col-6">Số GCNBH:</div>
                          <input className="col-6 rounded" />
                        </div>
                        <div className="btn-group col-12 mb-2">
                          <div className="col-6">Đại lý</div>
                          <select className="col-6 form-control form-control-sm">
                            <option>Vui lòng chọn</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* end II. */}
                  </form>
                </div>
              </div>
            </div>
          );
    }
}

export default Hopdongxemay;