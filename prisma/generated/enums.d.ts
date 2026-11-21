export declare const Role: {
    readonly MEMBER: "MEMBER";
    readonly ADMIN: "ADMIN";
    readonly SUPERADMIN: "SUPERADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const PaymentMethod: {
    readonly BANK_TRANSFER: "BANK_TRANSFER";
    readonly VIRTUAL_ACCOUNT: "VIRTUAL_ACCOUNT";
    readonly EWALLET: "EWALLET";
    readonly QRIS: "QRIS";
    readonly CREDIT_CARD: "CREDIT_CARD";
    readonly COD: "COD";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly PAID: "PAID";
    readonly FAILED: "FAILED";
    readonly EXPIRED: "EXPIRED";
    readonly CANCELLED: "CANCELLED";
    readonly REFUNDED: "REFUNDED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const OrderStatus: {
    readonly PENDING_PAYMENT: "PENDING_PAYMENT";
    readonly PAID: "PAID";
    readonly PROCESSING: "PROCESSING";
    readonly SHIPPED: "SHIPPED";
    readonly DELIVERED: "DELIVERED";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const ShipmentStatus: {
    readonly PENDING: "PENDING";
    readonly PICKED_UP: "PICKED_UP";
    readonly IN_TRANSIT: "IN_TRANSIT";
    readonly DELIVERED: "DELIVERED";
    readonly RETURNED: "RETURNED";
};
export type ShipmentStatus = (typeof ShipmentStatus)[keyof typeof ShipmentStatus];
