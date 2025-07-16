import React, { useState, useEffect } from 'react';
import { Search, Filter, Edit, Trash2, FileText, Truck, Store, Phone } from 'lucide-react';

const mockOrders = [
  {
    id: "ORD-12345678",
    orderDate: "2025-05-29T10:30:00Z",
    customer: {
      name: "Sasha Hill",
      company: "Hill Construction LLC",
      phone: "(229) 699-0100",
      email: "sashabrown089@icloud.com",
      deliveryAddress: "456 Construction Site Rd, Dickson TN 37055",
      billingAddress: "123 Abraham Street, Dickson TN 37055",
      customerPortalLink: "https://portal.example.com/customer/12345",
      accountLoginLink: "https://app.example.com/login"
    },
    items: [
      {
        id: 1,
        productName: "Skid Steer w/Cab - Weekend Special",
        equipmentCost: 591.00,
        optionsTotal: 237.00,
        options: ["Prepaid Diesel - 15 Gal", "Tooth Bucket", "Delivery", "Pick Up"],
        quantity: 1,
        lineTotal: 828.00,
        deliveryDate: "2025-05-16",
        deliveryTime: "14:00",
        deliveryMethod: "Truck",
        deliveryTechnician: "John Smith",
        returnDate: "2025-05-19",
        returnTime: "09:00",
        returnMethod: "Truck",
        returnTechnician: "",
        deliveryStatus: "Completed",
        returnStatus: "Pending",
        equipmentId: "Kub-S8-1",
        checklist: { delivery: "Completed", return: "Pending" },
        machineHours: { delivery: "Completed", return: "Pending" },
        video: { delivery: "Completed", return: "Pending" },
        equipmentComments: "Customer inspected equipment - no issues noted on delivery"
      },
      {
        id: 2,
        productName: "Grapple w/ Skid - Weekend Special",
        equipmentCost: 149.00,
        optionsTotal: 0,
        options: [],
        quantity: 1,
        lineTotal: 149.00,
        deliveryDate: "2025-05-16",
        deliveryTime: "14:00",
        deliveryMethod: "Truck",
        deliveryTechnician: "John Smith",
        returnDate: "2025-05-19",
        returnTime: "09:00",
        returnMethod: "Truck",
        returnTechnician: "",
        deliveryStatus: "Completed",
        returnStatus: "Pending",
        equipmentId: "CID-GR-3",
        checklist: { delivery: "Completed", return: "Pending" },
        machineHours: { delivery: "N/A", return: "N/A" },
        video: { delivery: "Completed", return: "Pending" },
        equipmentComments: "Grapple attachment - good condition on delivery"
      }
    ],
    subtotal: 977.00,
    salesTax: 77.90,
    totalAmount: 1054.90,
    paymentMethod: "Credit/Debit Card",
    paymentStatus: "Paid",
    paymentType: "Credit/Debit Card",
    salesFunnelTriggered: true,
    adminNotes: "Customer requested early morning delivery",
    orderHistory: [
      { timestamp: "2025-05-15T13:32:00Z", action: "New Order Placed: Sasha Hill" },
      { timestamp: "2025-05-15T13:32:00Z", action: "Order Paid: Credit / Debit Card" },
      { timestamp: "2025-05-16T13:35:00Z", action: "Terms Signed" },
      { timestamp: "2025-05-16T08:43:00Z", action: "Order Delivered" }
    ]
  },
  {
    id: "ORD-87654321",
    orderDate: "2025-05-28T14:20:00Z",
    customer: {
      name: "Sarah Johnson",
      company: "",
      phone: "(555) 987-6543",
      email: "sarah.j@email.com",
      deliveryAddress: "789 Pine Street, Nashville TN 37204",
      billingAddress: "789 Pine Street, Nashville TN 37204",
      customerPortalLink: "https://portal.example.com/customer/67890",
      accountLoginLink: "https://app.example.com/login"
    },
    items: [
      {
        id: 1,
        productName: "Concrete Mixer - 7 Cu Ft",
        equipmentCost: 95.00,
        optionsTotal: 0,
        options: [],
        quantity: 1,
        lineTotal: 95.00,
        deliveryDate: "2025-05-30",
        deliveryTime: "13:00",
        deliveryMethod: "Store",
        deliveryTechnician: "",
        returnDate: "2025-06-03",
        returnTime: "09:00",
        returnMethod: "Store",
        returnTechnician: "",
        deliveryStatus: "Completed",
        returnStatus: "Pending",
        equipmentId: "CM-7-2",
        checklist: { delivery: "Pending", return: "Pending" },
        machineHours: { delivery: "N/A", return: "N/A" },
        video: { delivery: "Pending", return: "Pending" },
        equipmentComments: ""
      }
    ],
    subtotal: 95.00,
    salesTax: 6.65,
    totalAmount: 101.65,
    paymentMethod: "COD",
    paymentStatus: "Pending",
    paymentType: "COD",
    salesFunnelTriggered: false,
    adminNotes: "",
    orderHistory: [
      { timestamp: "2025-05-28T14:20:00Z", action: "New Order Placed: Sarah Johnson" },
      { timestamp: "2025-05-30T13:00:00Z", action: "Order Delivered" }
    ]
  },
  {
    id: "ORD-11223344",
    orderDate: "2025-05-27T09:15:00Z",
    customer: {
      name: "Mike Rodriguez",
      company: "Rodriguez Landscaping",
      phone: "(615) 555-0123",
      email: "mike@rodriguezlandscaping.com",
      deliveryAddress: "321 Oak Avenue, Franklin TN 37064",
      billingAddress: "321 Oak Avenue, Franklin TN 37064",
      customerPortalLink: "https://portal.example.com/customer/11223",
      accountLoginLink: "https://app.example.com/login"
    },
    items: [
      {
        id: 1,
        productName: "Mini Excavator - Daily Rental",
        equipmentCost: 285.00,
        optionsTotal: 45.00,
        options: ["Delivery", "Pick Up"],
        quantity: 1,
        lineTotal: 330.00,
        deliveryDate: "2025-05-28",
        deliveryTime: "08:00",
        deliveryMethod: "Truck",
        deliveryTechnician: "Sarah Wilson",
        returnDate: "2025-05-29",
        returnTime: "17:00",
        returnMethod: "Truck",
        returnTechnician: "",
        deliveryStatus: "Completed",
        returnStatus: "Completed",
        equipmentId: "EX-M1-4",
        checklist: { delivery: "Completed", return: "Completed" },
        machineHours: { delivery: "Completed", return: "Completed" },
        video: { delivery: "Completed", return: "Completed" },
        equipmentComments: "Equipment returned in excellent condition"
      }
    ],
    subtotal: 330.00,
    salesTax: 26.40,
    totalAmount: 356.40,
    paymentMethod: "Account",
    paymentStatus: "Account",
    paymentType: "Account",
    salesFunnelTriggered: true,
    adminNotes: "Regular customer - preferred delivery time",
    orderHistory: [
      { timestamp: "2025-05-27T09:15:00Z", action: "New Order Placed: Mike Rodriguez" },
      { timestamp: "2025-05-27T09:15:00Z", action: "Added to House Account" },
      { timestamp: "2025-05-28T08:00:00Z", action: "Order Delivered" },
      { timestamp: "2025-05-29T17:00:00Z", action: "Order Returned" }
    ]
  }
];

export default function OrdersAdmin() {
  const [currentView, setCurrentView] = useState('summary');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders] = useState(mockOrders);
  const [filteredOrders, setFilteredOrders] = useState(mockOrders);
  const [searchName, setSearchName] = useState('');
  const [searchCompany, setSearchCompany] = useState('');
  const [searchPhone, setSearchPhone] = useState('');
  const [paymentMethodFilter, setPaymentMethodFilter] = useState('');
  const [paymentStatusFilter, setPaymentStatusFilter] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedItems(filteredOrders.map(order => order.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (orderId, checked) => {
    if (checked) {
      setSelectedItems(prev => [...prev, orderId]);
    } else {
      setSelectedItems(prev => prev.filter(id => id !== orderId));
    }
  };

  const extractPhoneNumbers = (phone) => phone.replace(/\D/g, '');

  const formatPhoneInput = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  const handlePhoneChange = (e) => setSearchPhone(formatPhoneInput(e.target.value));
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${month}/${day}/${year}`;
  };
  const formatCurrency = (amount) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'Paid': return 'text-green-600 bg-green-50';
      case 'Pending': return 'text-yellow-600 bg-yellow-50';
      case 'Account': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getIcon = (method, status) => {
    const iconColor = status === 'Pending' ? 'text-yellow-500' : 'text-blue-600';
    return method === 'Truck' ? <Truck className={`h-4 w-4 ${iconColor}`} /> : <Store className={`h-4 w-4 ${iconColor}`} />;
  };

  useEffect(() => {
    let filtered = orders;
    if (searchName) {
      filtered = filtered.filter(order =>
        order.customer.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    if (searchCompany) {
      filtered = filtered.filter(order =>
        order.customer.company && order.customer.company.toLowerCase().includes(searchCompany.toLowerCase())
      );
    }
    if (searchPhone) {
      const searchNumbers = extractPhoneNumbers(searchPhone);
      filtered = filtered.filter(order => {
        const orderNumbers = extractPhoneNumbers(order.customer.phone);
        return orderNumbers.includes(searchNumbers);
      });
    }
    if (paymentMethodFilter) {
      filtered = filtered.filter(order => order.paymentMethod === paymentMethodFilter);
    }
    if (paymentStatusFilter) {
      filtered = filtered.filter(order => order.paymentStatus === paymentStatusFilter);
    }
    setFilteredOrders(filtered);
  }, [orders, searchName, searchCompany, searchPhone, paymentMethodFilter, paymentStatusFilter]);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setCurrentView('detail');
  };

  const handleBackToSummary = () => {
    setCurrentView('summary');
    setSelectedOrder(null);
  };

  if (currentView === 'summary') {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="flex flex-col h-screen">
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Orders Management</h1>
            </div>
          </div>

          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="grid grid-cols-7 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Search Name</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Customer name..." 
                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
                    value={searchName} 
                    onChange={(e) => setSearchName(e.target.value)} 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Search Company</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Company name..." 
                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
                    value={searchCompany} 
                    onChange={(e) => setSearchCompany(e.target.value)} 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Search Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Phone number..." 
                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
                    style={{width: '203px'}}
                    value={searchPhone} 
                    onChange={handlePhoneChange} 
                    maxLength="14" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">All Categories</option>
                  <option value="Excavators">Excavators</option>
                  <option value="Concrete">Concrete Equipment</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  value={paymentMethodFilter} 
                  onChange={(e) => setPaymentMethodFilter(e.target.value)}
                >
                  <option value="">All Methods</option>
                  <option value="Credit/Debit Card">Credit/Debit Card</option>
                  <option value="COD">COD</option>
                  <option value="Account">Account</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status</label>
                <select 
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  style={{width: '128px'}}
                  value={paymentStatusFilter} 
                  onChange={(e) => setPaymentStatusFilter(e.target.value)}
                >
                  <option value="">All Status</option>
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                  <option value="Account">Account</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
                <button 
                  className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm ${
                    selectedItems.length > 0 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'bg-gray-400 text-white cursor-not-allowed'
                  }`}
                  onClick={() => setShowDeleteDialog(true)} 
                  disabled={selectedItems.length === 0}
                >
                  <Trash2 className="h-4 w-4" />
                  Delete Selected ({selectedItems.length})
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-auto">
            <table className="w-full bg-white">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase w-12">
                    <input 
                      type="checkbox" 
                      className="rounded" 
                      checked={selectedItems.length === filteredOrders.length && filteredOrders.length > 0}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase w-16">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase min-w-[150px]">Customer</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase min-w-[200px]">Product</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase min-w-[200px]">Address</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase w-40">Phone</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase w-24">Amount</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase w-24">Payment</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase w-20">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase w-24">Delivery</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase w-24">Return</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase w-24">Created</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase w-24">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <input 
                        type="checkbox" 
                        className="rounded" 
                        checked={selectedItems.includes(order.id)}
                        onChange={(e) => handleSelectItem(order.id, e.target.checked)}
                      />
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      {order.id.slice(-4)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      <div className="truncate max-w-[140px]" title={order.customer.name}>
                        {order.customer.name}
                      </div>
                      {order.customer.company && (
                        <div className="truncate max-w-[140px] text-xs text-gray-500 mt-1" title={order.customer.company}>
                          {order.customer.company}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      <div className="truncate max-w-[180px]" title={order.items[0].productName}>
                        {order.items[0].productName}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      <div className="truncate max-w-[180px]" title={order.customer.deliveryAddress}>
                        {order.customer.deliveryAddress}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{order.customer.phone}</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{formatCurrency(order.totalAmount)}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      <div className="truncate" title={order.paymentMethod}>
                        {order.paymentMethod === 'Credit/Debit Card' ? 'Card' : order.paymentMethod}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPaymentStatusColor(order.paymentStatus)}`}>
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      <div className="flex items-center gap-1">
                        {getIcon(order.items[0].deliveryMethod, order.items[0].deliveryStatus)}
                        <span className="text-xs">{formatDate(order.items[0].deliveryDate)}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      <div className="flex items-center gap-1">
                        {getIcon(order.items[0].returnMethod, order.items[0].returnStatus)}
                        <span className="text-xs">{formatDate(order.items[0].returnDate)}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{formatDate(order.orderDate)}</td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center gap-1">
                        <button 
                          onClick={() => handleOrderClick(order)} 
                          className={`transition-colors p-1 ${
                            order.adminNotes 
                              ? 'text-orange-600 hover:text-orange-900' 
                              : 'text-blue-600 hover:text-blue-900'
                          }`}
                          title="View Details"
                        >
                          {order.adminNotes ? <FileText className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                        </button>
                        <button className="text-red-600 hover:text-red-900 transition-colors p-1" title="Delete Order">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center">
            <div className="text-sm text-gray-700">
              Showing {filteredOrders.length} of {orders.length} orders
            </div>
            <div className="text-sm text-gray-500">
              Total Revenue: {formatCurrency(filteredOrders.reduce((sum, order) => sum + order.totalAmount, 0))}
            </div>
          </div>

          {showDeleteDialog && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Confirm Deletion</h3>
                <p className="text-gray-600 mb-6">Are you sure you want to delete the selected orders?</p>
                <div className="flex justify-end gap-3">
                  <button 
                    onClick={() => setShowDeleteDialog(false)} 
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => { 
                      setShowDeleteDialog(false); 
                      setSelectedItems([]); 
                    }} 
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Placeholder for detail view
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Details</h2>
        <p className="text-gray-600 mb-6">Order detail view is under construction.</p>
        <button 
          onClick={handleBackToSummary}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Orders List
        </button>
      </div>
    </div>
  );
}