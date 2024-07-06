import { useState } from "react";
import ProductCard from "../component/ProductCard";

export default function Shop() {

    const [searchTerm, setSearchTerm] = useState('');

    const [listData, setlisData] = useState([
        {
            id: 1,
            name: 'Bàn ăn Bali gỗ MDF chất lượng cao',
            price: 3500000,
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvwn5gpb3ysb41',
            description: '✅ Sử dụng công nghệ sơn gốc nước thân thiện với môi trường và vô hại nhập khẩu để sơn mặt bàn. Nó có thể khô tới 10 năm và bề mặt trở nên mịn màng hơn khi chạm vào bằng tay.',
        },
        {
            id: 2,
            name: 'Bàn trang điểm Bali kiểu dáng Bắc Âu',
            price: 3500000,
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvppy59x7ywp8d',
            description:
                `✅ Chất liệu: Ván sợi mật độ trung bình (MDF) 
                ✅ Kích thước thùng carton: 108x46x15cm 
                ✅ Quy cách đóng gói: 14kg`,
        },
        {
            id: 3,
            name: ' Bàn Chữ L Bàn Làm Việc Mặt Gỗ Mdf Chống Xước Khung Thép Chịu Lực',
            price: 780000,
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvwknmcpydp5b3',
            description:
                `✅Bàn làm việc chữ L phù hợp với mọi không gian.
                ✅Mặt bàn được làm từ chất liệu Melamine hoặc Laminate chống xước, chống cháy kết hợp công nghệ forming tiên tiến nên được bo tròn tạo nên những đường nét mềm mại.
                ✅Chân bàn được làm bằng sắt phun sơn tĩnh điện hạn chế tối đa việc gỉ sét như các loại sắt sơn gia công thông thường, đảm bảo tính thẩm mỹ và cực kỳ bền bỉ`,
        },
    ]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filterData = listData.filter((item) => {
        return item.name.includes(searchTerm);
    })

    return (
        <div className="container">
            <h2 className="text-center">Danh sách sản phẩm</h2>


            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={handleSearch} />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            <div className="row">

                {filterData.map((product) => (
                    <ProductCard key={product.id} randomNumber={product} />
                ))}

                {/* <ProductCard randomNumber={listData[0]}/>
                    <ProductCard randomNumber={listData[1]}/>
                    <ProductCard randomNumber={listData[2]}/> */}
            </div>

        </div>
    )
}