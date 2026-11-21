"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentStatus = exports.OrderStatus = exports.PaymentStatus = exports.PaymentMethod = exports.Role = void 0;
exports.Role = {
    MEMBER: 'MEMBER',
    ADMIN: 'ADMIN',
    SUPERADMIN: 'SUPERADMIN'
};
exports.PaymentMethod = {
    BANK_TRANSFER: 'BANK_TRANSFER',
    VIRTUAL_ACCOUNT: 'VIRTUAL_ACCOUNT',
    EWALLET: 'EWALLET',
    QRIS: 'QRIS',
    CREDIT_CARD: 'CREDIT_CARD',
    COD: 'COD'
};
exports.PaymentStatus = {
    PENDING: 'PENDING',
    PAID: 'PAID',
    FAILED: 'FAILED',
    EXPIRED: 'EXPIRED',
    CANCELLED: 'CANCELLED',
    REFUNDED: 'REFUNDED'
};
exports.OrderStatus = {
    PENDING_PAYMENT: 'PENDING_PAYMENT',
    PAID: 'PAID',
    PROCESSING: 'PROCESSING',
    SHIPPED: 'SHIPPED',
    DELIVERED: 'DELIVERED',
    COMPLETED: 'COMPLETED',
    CANCELLED: 'CANCELLED'
};
exports.ShipmentStatus = {
    PENDING: 'PENDING',
    PICKED_UP: 'PICKED_UP',
    IN_TRANSIT: 'IN_TRANSIT',
    DELIVERED: 'DELIVERED',
    RETURNED: 'RETURNED'
};
//# sourceMappingURL=enums.js.map