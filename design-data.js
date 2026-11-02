/* NovaShop: dữ liệu mẫu hư cấu, chỉ dùng cho bản thiết kế giao diện. */
const NOVA_SEED = [
  {id:'nova-aura',name:'Tai nghe Aura Max',brand:'NOVA AUDIO',category:'Âm thanh',price:1890000,oldPrice:2390000,rating:4.9,reviews:128,inventory:28,badge:'Bán chạy',tone:'lavender',art:'headphones',desc:'Tai nghe chụp tai không dây, chống ồn chủ động, âm thanh cân bằng, thời lượng pin 32 giờ.'},
  {id:'nova-keys',name:'Bàn phím Mellow 75',brand:'NOVA STUDIO',category:'Bàn phím',price:1590000,oldPrice:0,rating:4.8,reviews:84,inventory:12,badge:'Mới',tone:'peach',art:'keyboard',desc:'Bàn phím cơ layout 75%, kết nối Bluetooth và USB-C, switch gõ êm phù hợp làm việc.'},
  {id:'nova-wave',name:'Loa Wave Mini',brand:'NOVA AUDIO',category:'Âm thanh',price:990000,oldPrice:1290000,rating:4.7,reviews:65,inventory:19,badge:'-23%',tone:'mint',art:'speaker',desc:'Loa Bluetooth gọn nhẹ, âm thanh 360 độ, kháng nước và pin dùng đến 12 giờ.'},
  {id:'nova-loop',name:'Đồng hồ Loop S',brand:'NOVA MOVE',category:'Thiết bị đeo',price:2190000,oldPrice:2590000,rating:4.9,reviews:93,inventory:16,badge:'Bán chạy',tone:'sky',art:'watch',desc:'Đồng hồ thông minh theo dõi vận động và giấc ngủ, hiển thị AMOLED rõ nét.'},
  {id:'nova-pods',name:'Tai nghe Buds Air',brand:'NOVA AUDIO',category:'Âm thanh',price:1090000,oldPrice:0,rating:4.8,reviews:54,inventory:32,badge:'Mới',tone:'rose',art:'earbuds',desc:'Tai nghe true wireless nhẹ nhàng, mic thoại rõ và hộp sạc nhỏ gọn.'},
  {id:'nova-mouse',name:'Chuột Arc Pro',brand:'NOVA STUDIO',category:'Phụ kiện',price:690000,oldPrice:890000,rating:4.6,reviews:74,inventory:25,badge:'-22%',tone:'sand',art:'mouse',desc:'Chuột không dây công thái học, cảm biến chính xác và kết nối đa thiết bị.'},
  {id:'nova-charge',name:'Sạc không dây Orbit',brand:'NOVA ESSENTIAL',category:'Phụ kiện',price:590000,oldPrice:0,rating:4.7,reviews:42,inventory:30,badge:'',tone:'mint',art:'charger',desc:'Đế sạc nhanh không dây để bàn, chân đế chống trượt và thiết kế tối giản.'},
  {id:'nova-lamp',name:'Đèn thông minh Glow',brand:'NOVA HOME',category:'Nhà thông minh',price:1290000,oldPrice:1590000,rating:4.9,reviews:115,inventory:14,badge:'Yêu thích',tone:'peach',art:'lamp',desc:'Đèn bàn điều chỉnh độ sáng và nhiệt độ màu, tạo không gian làm việc dễ chịu.'},
  {id:'nova-camera',name:'Camera Home Eye',brand:'NOVA HOME',category:'Nhà thông minh',price:1490000,oldPrice:1890000,rating:4.7,reviews:51,inventory:9,badge:'-21%',tone:'sky',art:'camera',desc:'Camera trong nhà góc rộng, hỗ trợ quan sát ban đêm và cảnh báo chuyển động.'},
  {id:'nova-hub',name:'Hub kết nối One',brand:'NOVA HOME',category:'Nhà thông minh',price:790000,oldPrice:0,rating:4.5,reviews:37,inventory:20,badge:'',tone:'lavender',art:'hub',desc:'Bộ điều khiển trung tâm cho các thiết bị thông minh trong nhà.'},
  {id:'nova-case',name:'Túi phụ kiện Canvas',brand:'NOVA ESSENTIAL',category:'Phụ kiện',price:390000,oldPrice:490000,rating:4.8,reviews:70,inventory:48,badge:'-20%',tone:'sand',art:'case',desc:'Túi đựng phụ kiện công nghệ chất liệu canvas, ngăn chứa gọn gàng.'},
  {id:'nova-pad',name:'Bàn di chuột Cloud',brand:'NOVA STUDIO',category:'Bàn phím',price:290000,oldPrice:0,rating:4.7,reviews:29,inventory:38,badge:'',tone:'rose',art:'mousepad',desc:'Bàn di chuột bề mặt vải mịn, đế cao su chống trượt và đường may bền.'}
];
const NOVA_CATEGORIES=['Tất cả','Âm thanh','Bàn phím','Thiết bị đeo','Phụ kiện','Nhà thông minh'];
const NOVA_MONEY=n=>new Intl.NumberFormat('vi-VN').format(n)+'₫';
const NOVA_STORAGE={
  get(key,fallback){try{const v=localStorage.getItem('novashop-demo-'+key);return v?JSON.parse(v):fallback;}catch{return fallback;}},
  set(key,value){try{localStorage.setItem('novashop-demo-'+key,JSON.stringify(value))}catch{}},
  products(){return this.get('products',NOVA_SEED.map(p=>({...p})))},
  orders(){return this.get('orders',[])},
  cart(){return this.get('cart',[])}
};
const NOVA_SEED_ORDERS = [
  {id:'NS-260201',name:'Khách Demo A',phone:'0900000001',address:'Địa chỉ giả lập A',note:'',date:'2026-11-01T10:35:00.000Z',total:2580000,status:'Hoàn thành',items:[{id:'nova-aura',name:'Tai nghe Aura Max',price:1890000,quantity:1},{id:'nova-mouse',name:'Chuột Arc Pro',price:690000,quantity:1}]},
  {id:'NS-260202',name:'Khách Demo B',phone:'0900000002',address:'Địa chỉ giả lập B',note:'',date:'2026-11-01T09:02:00.000Z',total:1590000,status:'Đang xử lý',items:[{id:'nova-keys',name:'Bàn phím Mellow 75',price:1590000,quantity:1}]},
  {id:'NS-260203',name:'Khách Demo C',phone:'0900000003',address:'Địa chỉ giả lập C',note:'',date:'2026-10-31T14:30:00.000Z',total:2190000,status:'Hoàn thành',items:[{id:'nova-loop',name:'Đồng hồ Loop S',price:2190000,quantity:1}]},
  {id:'NS-260204',name:'Khách Demo D',phone:'0900000004',address:'Địa chỉ giả lập D',note:'',date:'2026-10-31T08:00:00.000Z',total:990000,status:'Mới',items:[{id:'nova-wave',name:'Loa Wave Mini',price:990000,quantity:1}]},
  {id:'NS-260205',name:'Khách Demo E',phone:'0900000005',address:'Địa chỉ giả lập E',note:'',date:'2026-10-30T11:05:00.000Z',total:1290000,status:'Hoàn thành',items:[{id:'nova-lamp',name:'Đèn thông minh Glow',price:1290000,quantity:1}]},
  {id:'NS-260206',name:'Khách Demo F',phone:'0900000006',address:'Địa chỉ giả lập F',note:'',date:'2026-10-30T07:12:00.000Z',total:690000,status:'Đã hủy',items:[{id:'nova-mouse',name:'Chuột Arc Pro',price:690000,quantity:1}]}
];
NOVA_STORAGE.orders = function (){return this.get('orders',NOVA_SEED_ORDERS.map(o=>({...o,items:o.items.map(i=>({...i}))})))};
