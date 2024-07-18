import React, { useContext } from "react";
import { CardContext } from "../contexts/cardContext";
import giohangStyles from "../assets/styles/giohang.module.css";

export default function GioHang() {
    const myCardContext = useContext(CardContext);

    const renderListData = () => {
        const productList = [...myCardContext.cardProduct];
        return productList.map((item, index) => (
            <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td><img className={giohangStyles.anhSP} src={item.image} alt="" /></td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => myCardContext.removeProductToCard(item)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        ));
    };

    return (
        <div className="container">
            <h1 className="text-center">Giỏ hàng</h1>
            {myCardContext.cardProduct.length ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ảnh sản phẩm</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>{renderListData()}</tbody>
                </table>
            ) : (
                <div>
                    <p>Giỏ hàng của bạn đang trống.</p>
                </div>
            )}
        </div>
    );
}
