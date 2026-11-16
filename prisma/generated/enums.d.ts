export declare const Role: {
    readonly MEMBER: "MEMBER";
    readonly ADMIN: "ADMIN";
    readonly SUPERADMIN: "SUPERADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
