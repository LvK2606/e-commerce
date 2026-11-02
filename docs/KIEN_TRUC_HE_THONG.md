# NovaShop — Kiến trúc dự kiến

**Giai đoạn hiện tại:** prototype HTML/CSS/JavaScript dùng localStorage. Cửa hàng và admin là màn hình demo, chưa phải hệ thống thương mại điện tử phục vụ khách hàng thật.

## 1. Cấu trúc giai đoạn demo
```
Browser
 ├── index.html — Cửa hàng, tìm kiếm, giỏ hàng, checkout giả lập
 ├── admin.html — Dashboard, chỉnh dữ liệu giả lập
 ├── store.js, admin.js — Tương tác demo
 ├── design-data.js — Dữ liệu sản phẩm mẫu
 └── localStorage — Lưu giỏ hàng và đơn hàng chỉ trên thiết bị hiện tại
```

## 2. Kiến trúc full-stack dự kiến
```
React + TypeScript storefront / admin
             ↓ HTTPS /api/*
Cloudflare Workers API
  - xác thực và phân quyền quản trị
  - kiểm tra dữ liệu đầu vào
  - xử lý giá và tồn kho tại server
  - tạo đơn bằng giao dịch an toàn
             ↓ private connection
Neon PostgreSQL
  - users, roles, sessions
  - products, categories, product_images
  - carts, cart_items
  - orders, order_items, inventory_movements
```

## 3. Quy tắc an toàn
- Không tin giá, tồn kho, vai trò người dùng do trình duyệt gửi lên.
- Mọi thao tác cập nhật đơn hàng và tồn kho phải dùng transaction ở backend.
- Admin yêu cầu đăng nhập và phân quyền thật.
- Demo chưa tích hợp thanh toán; nếu sau này có thanh toán phải dùng cổng thanh toán hợp lệ và webhook xác minh.
- Secrets chỉ lưu tại môi trường hosting, tuyệt đối không commit.
- Không lưu dữ liệu khách hàng thật vào localStorage của demo.

## 4. Gói source bán sau này
Chỉ đóng gói và quảng cáo tính năng đã xây dựng, kiểm thử thực tế. Phiên bản hiện tại là **UI demo** chứ chưa phải full-stack.
