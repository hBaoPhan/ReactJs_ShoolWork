import { memo } from 'react'

// Component con hiển thị 1 dòng sách
// TODO (Câu 1): SV giải thích ngắn trong bài làm:
//    - Props nào đang được nhận? -> Nhận các props: book (thông tin sách), 
// onView (hàm gọi khi click Xem), onDelete (hàm gọi khi click Xóa).
//    - Vì sao nên dùng React.memo ở đây? -> Tránh re-render lại các component BookItem không thay đổi khi danh sách 
// (hoặc component cha) bị re-render do thay đổi state, giúp tối ưu hiệu suất khi danh sách lớn.
function BookItem({ book, onView, onDelete }) {
  const statusMap = {
    read: { label: 'Đã đọc', className: 'badge-read' },
    reading: { label: 'Đang đọc', className: 'badge-reading' },
    unread: { label: 'Chưa đọc', className: 'badge-unread' },
  }
  const status = statusMap[book.status] || statusMap.unread

  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
      <td>{book.publishYear}</td>
      <td>{book.price ? book.price.toLocaleString('vi-VN') + ' đ' : ''}</td>
      <td><span className={`badge ${status.className}`}>{status.label}</span></td>
      <td>
        <button className="btn btn-primary" onClick={onView}>Xem</button>
        <button className="btn btn-danger" onClick={onDelete}>Xóa</button>
      </td>
    </tr>
  )
}

export default memo(BookItem)
