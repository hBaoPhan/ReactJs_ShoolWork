import React from 'react'

const ComboBox = ({ handleFilter }) => {
    return (
        <select name="" id="" onChange={(e) => { handleFilter(e.target.value) }}>
            <option value="All">All</option>
            <option value="Điện thoại">Điện thoại</option>
            <option value="Laptop">Laptop</option>
            <option value="Màn hình">Màn hình</option>
            <option value="Tablet">Tablet</option>
            <option value="Đồng hồ">Đồng hồ</option>
            <option value="Phụ kiện">Phụ kiện</option>
        </select>
    )
}

export default ComboBox