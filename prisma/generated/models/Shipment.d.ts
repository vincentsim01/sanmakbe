import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ShipmentModel = runtime.Types.Result.DefaultSelection<Prisma.$ShipmentPayload>;
export type AggregateShipment = {
    _count: ShipmentCountAggregateOutputType | null;
    _avg: ShipmentAvgAggregateOutputType | null;
    _sum: ShipmentSumAggregateOutputType | null;
    _min: ShipmentMinAggregateOutputType | null;
    _max: ShipmentMaxAggregateOutputType | null;
};
export type ShipmentAvgAggregateOutputType = {
    cost: runtime.Decimal | null;
};
export type ShipmentSumAggregateOutputType = {
    cost: runtime.Decimal | null;
};
export type ShipmentMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    courier: string | null;
    service: string | null;
    cost: runtime.Decimal | null;
    trackingNumber: string | null;
    status: $Enums.ShipmentStatus | null;
    recipientName: string | null;
    phone: string | null;
    address: string | null;
    city: string | null;
    province: string | null;
    postalCode: string | null;
    shippedAt: Date | null;
    deliveredAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ShipmentMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    courier: string | null;
    service: string | null;
    cost: runtime.Decimal | null;
    trackingNumber: string | null;
    status: $Enums.ShipmentStatus | null;
    recipientName: string | null;
    phone: string | null;
    address: string | null;
    city: string | null;
    province: string | null;
    postalCode: string | null;
    shippedAt: Date | null;
    deliveredAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ShipmentCountAggregateOutputType = {
    id: number;
    orderId: number;
    courier: number;
    service: number;
    cost: number;
    trackingNumber: number;
    status: number;
    recipientName: number;
    phone: number;
    address: number;
    city: number;
    province: number;
    postalCode: number;
    shippedAt: number;
    deliveredAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ShipmentAvgAggregateInputType = {
    cost?: true;
};
export type ShipmentSumAggregateInputType = {
    cost?: true;
};
export type ShipmentMinAggregateInputType = {
    id?: true;
    orderId?: true;
    courier?: true;
    service?: true;
    cost?: true;
    trackingNumber?: true;
    status?: true;
    recipientName?: true;
    phone?: true;
    address?: true;
    city?: true;
    province?: true;
    postalCode?: true;
    shippedAt?: true;
    deliveredAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ShipmentMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    courier?: true;
    service?: true;
    cost?: true;
    trackingNumber?: true;
    status?: true;
    recipientName?: true;
    phone?: true;
    address?: true;
    city?: true;
    province?: true;
    postalCode?: true;
    shippedAt?: true;
    deliveredAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ShipmentCountAggregateInputType = {
    id?: true;
    orderId?: true;
    courier?: true;
    service?: true;
    cost?: true;
    trackingNumber?: true;
    status?: true;
    recipientName?: true;
    phone?: true;
    address?: true;
    city?: true;
    province?: true;
    postalCode?: true;
    shippedAt?: true;
    deliveredAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ShipmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShipmentWhereInput;
    orderBy?: Prisma.ShipmentOrderByWithRelationInput | Prisma.ShipmentOrderByWithRelationInput[];
    cursor?: Prisma.ShipmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ShipmentCountAggregateInputType;
    _avg?: ShipmentAvgAggregateInputType;
    _sum?: ShipmentSumAggregateInputType;
    _min?: ShipmentMinAggregateInputType;
    _max?: ShipmentMaxAggregateInputType;
};
export type GetShipmentAggregateType<T extends ShipmentAggregateArgs> = {
    [P in keyof T & keyof AggregateShipment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShipment[P]> : Prisma.GetScalarType<T[P], AggregateShipment[P]>;
};
export type ShipmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShipmentWhereInput;
    orderBy?: Prisma.ShipmentOrderByWithAggregationInput | Prisma.ShipmentOrderByWithAggregationInput[];
    by: Prisma.ShipmentScalarFieldEnum[] | Prisma.ShipmentScalarFieldEnum;
    having?: Prisma.ShipmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShipmentCountAggregateInputType | true;
    _avg?: ShipmentAvgAggregateInputType;
    _sum?: ShipmentSumAggregateInputType;
    _min?: ShipmentMinAggregateInputType;
    _max?: ShipmentMaxAggregateInputType;
};
export type ShipmentGroupByOutputType = {
    id: string;
    orderId: string;
    courier: string;
    service: string;
    cost: runtime.Decimal;
    trackingNumber: string | null;
    status: $Enums.ShipmentStatus;
    recipientName: string;
    phone: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
    shippedAt: Date | null;
    deliveredAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ShipmentCountAggregateOutputType | null;
    _avg: ShipmentAvgAggregateOutputType | null;
    _sum: ShipmentSumAggregateOutputType | null;
    _min: ShipmentMinAggregateOutputType | null;
    _max: ShipmentMaxAggregateOutputType | null;
};
export type GetShipmentGroupByPayload<T extends ShipmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShipmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShipmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShipmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShipmentGroupByOutputType[P]>;
}>>;
export type ShipmentWhereInput = {
    AND?: Prisma.ShipmentWhereInput | Prisma.ShipmentWhereInput[];
    OR?: Prisma.ShipmentWhereInput[];
    NOT?: Prisma.ShipmentWhereInput | Prisma.ShipmentWhereInput[];
    id?: Prisma.StringFilter<"Shipment"> | string;
    orderId?: Prisma.StringFilter<"Shipment"> | string;
    courier?: Prisma.StringFilter<"Shipment"> | string;
    service?: Prisma.StringFilter<"Shipment"> | string;
    cost?: Prisma.DecimalFilter<"Shipment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    trackingNumber?: Prisma.StringNullableFilter<"Shipment"> | string | null;
    status?: Prisma.EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus;
    recipientName?: Prisma.StringFilter<"Shipment"> | string;
    phone?: Prisma.StringFilter<"Shipment"> | string;
    address?: Prisma.StringFilter<"Shipment"> | string;
    city?: Prisma.StringFilter<"Shipment"> | string;
    province?: Prisma.StringFilter<"Shipment"> | string;
    postalCode?: Prisma.StringFilter<"Shipment"> | string;
    shippedAt?: Prisma.DateTimeNullableFilter<"Shipment"> | Date | string | null;
    deliveredAt?: Prisma.DateTimeNullableFilter<"Shipment"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Shipment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Shipment"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
};
export type ShipmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    courier?: Prisma.SortOrder;
    service?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
    trackingNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    recipientName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    province?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrder;
    shippedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    order?: Prisma.OrderOrderByWithRelationInput;
};
export type ShipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orderId?: string;
    AND?: Prisma.ShipmentWhereInput | Prisma.ShipmentWhereInput[];
    OR?: Prisma.ShipmentWhereInput[];
    NOT?: Prisma.ShipmentWhereInput | Prisma.ShipmentWhereInput[];
    courier?: Prisma.StringFilter<"Shipment"> | string;
    service?: Prisma.StringFilter<"Shipment"> | string;
    cost?: Prisma.DecimalFilter<"Shipment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    trackingNumber?: Prisma.StringNullableFilter<"Shipment"> | string | null;
    status?: Prisma.EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus;
    recipientName?: Prisma.StringFilter<"Shipment"> | string;
    phone?: Prisma.StringFilter<"Shipment"> | string;
    address?: Prisma.StringFilter<"Shipment"> | string;
    city?: Prisma.StringFilter<"Shipment"> | string;
    province?: Prisma.StringFilter<"Shipment"> | string;
    postalCode?: Prisma.StringFilter<"Shipment"> | string;
    shippedAt?: Prisma.DateTimeNullableFilter<"Shipment"> | Date | string | null;
    deliveredAt?: Prisma.DateTimeNullableFilter<"Shipment"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Shipment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Shipment"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
}, "id" | "orderId">;
export type ShipmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    courier?: Prisma.SortOrder;
    service?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
    trackingNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    recipientName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    province?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrder;
    shippedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ShipmentCountOrderByAggregateInput;
    _avg?: Prisma.ShipmentAvgOrderByAggregateInput;
    _max?: Prisma.ShipmentMaxOrderByAggregateInput;
    _min?: Prisma.ShipmentMinOrderByAggregateInput;
    _sum?: Prisma.ShipmentSumOrderByAggregateInput;
};
export type ShipmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShipmentScalarWhereWithAggregatesInput | Prisma.ShipmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShipmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShipmentScalarWhereWithAggregatesInput | Prisma.ShipmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Shipment"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"Shipment"> | string;
    courier?: Prisma.StringWithAggregatesFilter<"Shipment"> | string;
    service?: Prisma.StringWithAggregatesFilter<"Shipment"> | string;
    cost?: Prisma.DecimalWithAggregatesFilter<"Shipment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    trackingNumber?: Prisma.StringNullableWithAggregatesFilter<"Shipment"> | string | null;
    status?: Prisma.EnumShipmentStatusWithAggregatesFilter<"Shipment"> | $Enums.ShipmentStatus;
    recipientName?: Prisma.StringWithAggregatesFilter<"Shipment"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"Shipment"> | string;
    address?: Prisma.StringWithAggregatesFilter<"Shipment"> | string;
    city?: Prisma.StringWithAggregatesFilter<"Shipment"> | string;
    province?: Prisma.StringWithAggregatesFilter<"Shipment"> | string;
    postalCode?: Prisma.StringWithAggregatesFilter<"Shipment"> | string;
    shippedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null;
    deliveredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Shipment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Shipment"> | Date | string;
};
export type ShipmentCreateInput = {
    id?: string;
    courier: string;
    service: string;
    cost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    trackingNumber?: string | null;
    status?: $Enums.ShipmentStatus;
    recipientName: string;
    phone: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
    shippedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutShipmentInput;
};
export type ShipmentUncheckedCreateInput = {
    id?: string;
    orderId: string;
    courier: string;
    service: string;
    cost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    trackingNumber?: string | null;
    status?: $Enums.ShipmentStatus;
    recipientName: string;
    phone: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
    shippedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShipmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    courier?: Prisma.StringFieldUpdateOperationsInput | string;
    service?: Prisma.StringFieldUpdateOperationsInput | string;
    cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    trackingNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    province?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    shippedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutShipmentNestedInput;
};
export type ShipmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    courier?: Prisma.StringFieldUpdateOperationsInput | string;
    service?: Prisma.StringFieldUpdateOperationsInput | string;
    cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    trackingNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    province?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    shippedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentCreateManyInput = {
    id?: string;
    orderId: string;
    courier: string;
    service: string;
    cost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    trackingNumber?: string | null;
    status?: $Enums.ShipmentStatus;
    recipientName: string;
    phone: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
    shippedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShipmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    courier?: Prisma.StringFieldUpdateOperationsInput | string;
    service?: Prisma.StringFieldUpdateOperationsInput | string;
    cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    trackingNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    province?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    shippedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    courier?: Prisma.StringFieldUpdateOperationsInput | string;
    service?: Prisma.StringFieldUpdateOperationsInput | string;
    cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    trackingNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    province?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    shippedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentNullableScalarRelationFilter = {
    is?: Prisma.ShipmentWhereInput | null;
    isNot?: Prisma.ShipmentWhereInput | null;
};
export type ShipmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    courier?: Prisma.SortOrder;
    service?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
    trackingNumber?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    recipientName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    province?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrder;
    shippedAt?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShipmentAvgOrderByAggregateInput = {
    cost?: Prisma.SortOrder;
};
export type ShipmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    courier?: Prisma.SortOrder;
    service?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
    trackingNumber?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    recipientName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    province?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrder;
    shippedAt?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShipmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    courier?: Prisma.SortOrder;
    service?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
    trackingNumber?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    recipientName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    province?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrder;
    shippedAt?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShipmentSumOrderByAggregateInput = {
    cost?: Prisma.SortOrder;
};
export type ShipmentCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.ShipmentCreateWithoutOrderInput, Prisma.ShipmentUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutOrderInput;
    connect?: Prisma.ShipmentWhereUniqueInput;
};
export type ShipmentUncheckedCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.ShipmentCreateWithoutOrderInput, Prisma.ShipmentUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutOrderInput;
    connect?: Prisma.ShipmentWhereUniqueInput;
};
export type ShipmentUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ShipmentCreateWithoutOrderInput, Prisma.ShipmentUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.ShipmentUpsertWithoutOrderInput;
    disconnect?: Prisma.ShipmentWhereInput | boolean;
    delete?: Prisma.ShipmentWhereInput | boolean;
    connect?: Prisma.ShipmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShipmentUpdateToOneWithWhereWithoutOrderInput, Prisma.ShipmentUpdateWithoutOrderInput>, Prisma.ShipmentUncheckedUpdateWithoutOrderInput>;
};
export type ShipmentUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ShipmentCreateWithoutOrderInput, Prisma.ShipmentUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.ShipmentUpsertWithoutOrderInput;
    disconnect?: Prisma.ShipmentWhereInput | boolean;
    delete?: Prisma.ShipmentWhereInput | boolean;
    connect?: Prisma.ShipmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShipmentUpdateToOneWithWhereWithoutOrderInput, Prisma.ShipmentUpdateWithoutOrderInput>, Prisma.ShipmentUncheckedUpdateWithoutOrderInput>;
};
export type EnumShipmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ShipmentStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type ShipmentCreateWithoutOrderInput = {
    id?: string;
    courier: string;
    service: string;
    cost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    trackingNumber?: string | null;
    status?: $Enums.ShipmentStatus;
    recipientName: string;
    phone: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
    shippedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShipmentUncheckedCreateWithoutOrderInput = {
    id?: string;
    courier: string;
    service: string;
    cost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    trackingNumber?: string | null;
    status?: $Enums.ShipmentStatus;
    recipientName: string;
    phone: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
    shippedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShipmentCreateOrConnectWithoutOrderInput = {
    where: Prisma.ShipmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShipmentCreateWithoutOrderInput, Prisma.ShipmentUncheckedCreateWithoutOrderInput>;
};
export type ShipmentUpsertWithoutOrderInput = {
    update: Prisma.XOR<Prisma.ShipmentUpdateWithoutOrderInput, Prisma.ShipmentUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.ShipmentCreateWithoutOrderInput, Prisma.ShipmentUncheckedCreateWithoutOrderInput>;
    where?: Prisma.ShipmentWhereInput;
};
export type ShipmentUpdateToOneWithWhereWithoutOrderInput = {
    where?: Prisma.ShipmentWhereInput;
    data: Prisma.XOR<Prisma.ShipmentUpdateWithoutOrderInput, Prisma.ShipmentUncheckedUpdateWithoutOrderInput>;
};
export type ShipmentUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    courier?: Prisma.StringFieldUpdateOperationsInput | string;
    service?: Prisma.StringFieldUpdateOperationsInput | string;
    cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    trackingNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    province?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    shippedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    courier?: Prisma.StringFieldUpdateOperationsInput | string;
    service?: Prisma.StringFieldUpdateOperationsInput | string;
    cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    trackingNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    province?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    shippedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    courier?: boolean;
    service?: boolean;
    cost?: boolean;
    trackingNumber?: boolean;
    status?: boolean;
    recipientName?: boolean;
    phone?: boolean;
    address?: boolean;
    city?: boolean;
    province?: boolean;
    postalCode?: boolean;
    shippedAt?: boolean;
    deliveredAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipment"]>;
export type ShipmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    courier?: boolean;
    service?: boolean;
    cost?: boolean;
    trackingNumber?: boolean;
    status?: boolean;
    recipientName?: boolean;
    phone?: boolean;
    address?: boolean;
    city?: boolean;
    province?: boolean;
    postalCode?: boolean;
    shippedAt?: boolean;
    deliveredAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipment"]>;
export type ShipmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    courier?: boolean;
    service?: boolean;
    cost?: boolean;
    trackingNumber?: boolean;
    status?: boolean;
    recipientName?: boolean;
    phone?: boolean;
    address?: boolean;
    city?: boolean;
    province?: boolean;
    postalCode?: boolean;
    shippedAt?: boolean;
    deliveredAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipment"]>;
export type ShipmentSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    courier?: boolean;
    service?: boolean;
    cost?: boolean;
    trackingNumber?: boolean;
    status?: boolean;
    recipientName?: boolean;
    phone?: boolean;
    address?: boolean;
    city?: boolean;
    province?: boolean;
    postalCode?: boolean;
    shippedAt?: boolean;
    deliveredAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ShipmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "courier" | "service" | "cost" | "trackingNumber" | "status" | "recipientName" | "phone" | "address" | "city" | "province" | "postalCode" | "shippedAt" | "deliveredAt" | "createdAt" | "updatedAt", ExtArgs["result"]["shipment"]>;
export type ShipmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
};
export type ShipmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
};
export type ShipmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
};
export type $ShipmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Shipment";
    objects: {
        order: Prisma.$OrderPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        courier: string;
        service: string;
        cost: runtime.Decimal;
        trackingNumber: string | null;
        status: $Enums.ShipmentStatus;
        recipientName: string;
        phone: string;
        address: string;
        city: string;
        province: string;
        postalCode: string;
        shippedAt: Date | null;
        deliveredAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["shipment"]>;
    composites: {};
};
export type ShipmentGetPayload<S extends boolean | null | undefined | ShipmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShipmentPayload, S>;
export type ShipmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShipmentCountAggregateInputType | true;
};
export interface ShipmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Shipment'];
        meta: {
            name: 'Shipment';
        };
    };
    findUnique<T extends ShipmentFindUniqueArgs>(args: Prisma.SelectSubset<T, ShipmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ShipmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ShipmentFindFirstArgs>(args?: Prisma.SelectSubset<T, ShipmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ShipmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ShipmentFindManyArgs>(args?: Prisma.SelectSubset<T, ShipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ShipmentCreateArgs>(args: Prisma.SelectSubset<T, ShipmentCreateArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ShipmentCreateManyArgs>(args?: Prisma.SelectSubset<T, ShipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ShipmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ShipmentDeleteArgs>(args: Prisma.SelectSubset<T, ShipmentDeleteArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ShipmentUpdateArgs>(args: Prisma.SelectSubset<T, ShipmentUpdateArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ShipmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ShipmentUpdateManyArgs>(args: Prisma.SelectSubset<T, ShipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ShipmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ShipmentUpsertArgs>(args: Prisma.SelectSubset<T, ShipmentUpsertArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ShipmentCountArgs>(args?: Prisma.Subset<T, ShipmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShipmentCountAggregateOutputType> : number>;
    aggregate<T extends ShipmentAggregateArgs>(args: Prisma.Subset<T, ShipmentAggregateArgs>): Prisma.PrismaPromise<GetShipmentAggregateType<T>>;
    groupBy<T extends ShipmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShipmentGroupByArgs['orderBy'];
    } : {
        orderBy?: ShipmentGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ShipmentFieldRefs;
}
export interface Prisma__ShipmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ShipmentFieldRefs {
    readonly id: Prisma.FieldRef<"Shipment", 'String'>;
    readonly orderId: Prisma.FieldRef<"Shipment", 'String'>;
    readonly courier: Prisma.FieldRef<"Shipment", 'String'>;
    readonly service: Prisma.FieldRef<"Shipment", 'String'>;
    readonly cost: Prisma.FieldRef<"Shipment", 'Decimal'>;
    readonly trackingNumber: Prisma.FieldRef<"Shipment", 'String'>;
    readonly status: Prisma.FieldRef<"Shipment", 'ShipmentStatus'>;
    readonly recipientName: Prisma.FieldRef<"Shipment", 'String'>;
    readonly phone: Prisma.FieldRef<"Shipment", 'String'>;
    readonly address: Prisma.FieldRef<"Shipment", 'String'>;
    readonly city: Prisma.FieldRef<"Shipment", 'String'>;
    readonly province: Prisma.FieldRef<"Shipment", 'String'>;
    readonly postalCode: Prisma.FieldRef<"Shipment", 'String'>;
    readonly shippedAt: Prisma.FieldRef<"Shipment", 'DateTime'>;
    readonly deliveredAt: Prisma.FieldRef<"Shipment", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Shipment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Shipment", 'DateTime'>;
}
export type ShipmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where: Prisma.ShipmentWhereUniqueInput;
};
export type ShipmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where: Prisma.ShipmentWhereUniqueInput;
};
export type ShipmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where?: Prisma.ShipmentWhereInput;
    orderBy?: Prisma.ShipmentOrderByWithRelationInput | Prisma.ShipmentOrderByWithRelationInput[];
    cursor?: Prisma.ShipmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShipmentScalarFieldEnum | Prisma.ShipmentScalarFieldEnum[];
};
export type ShipmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where?: Prisma.ShipmentWhereInput;
    orderBy?: Prisma.ShipmentOrderByWithRelationInput | Prisma.ShipmentOrderByWithRelationInput[];
    cursor?: Prisma.ShipmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShipmentScalarFieldEnum | Prisma.ShipmentScalarFieldEnum[];
};
export type ShipmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where?: Prisma.ShipmentWhereInput;
    orderBy?: Prisma.ShipmentOrderByWithRelationInput | Prisma.ShipmentOrderByWithRelationInput[];
    cursor?: Prisma.ShipmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShipmentScalarFieldEnum | Prisma.ShipmentScalarFieldEnum[];
};
export type ShipmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShipmentCreateInput, Prisma.ShipmentUncheckedCreateInput>;
};
export type ShipmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ShipmentCreateManyInput | Prisma.ShipmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ShipmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    data: Prisma.ShipmentCreateManyInput | Prisma.ShipmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ShipmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ShipmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShipmentUpdateInput, Prisma.ShipmentUncheckedUpdateInput>;
    where: Prisma.ShipmentWhereUniqueInput;
};
export type ShipmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ShipmentUpdateManyMutationInput, Prisma.ShipmentUncheckedUpdateManyInput>;
    where?: Prisma.ShipmentWhereInput;
    limit?: number;
};
export type ShipmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShipmentUpdateManyMutationInput, Prisma.ShipmentUncheckedUpdateManyInput>;
    where?: Prisma.ShipmentWhereInput;
    limit?: number;
    include?: Prisma.ShipmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ShipmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where: Prisma.ShipmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShipmentCreateInput, Prisma.ShipmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ShipmentUpdateInput, Prisma.ShipmentUncheckedUpdateInput>;
};
export type ShipmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where: Prisma.ShipmentWhereUniqueInput;
};
export type ShipmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShipmentWhereInput;
    limit?: number;
};
export type ShipmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
};
