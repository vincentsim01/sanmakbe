import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderPayload>;
export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type OrderAvgAggregateOutputType = {
    userId: number | null;
    subtotal: runtime.Decimal | null;
    shippingCost: runtime.Decimal | null;
    discount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
};
export type OrderSumAggregateOutputType = {
    userId: number | null;
    subtotal: runtime.Decimal | null;
    shippingCost: runtime.Decimal | null;
    discount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
};
export type OrderMinAggregateOutputType = {
    id: string | null;
    orderNumber: string | null;
    userId: number | null;
    status: $Enums.OrderStatus | null;
    subtotal: runtime.Decimal | null;
    shippingCost: runtime.Decimal | null;
    discount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
    currency: string | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderMaxAggregateOutputType = {
    id: string | null;
    orderNumber: string | null;
    userId: number | null;
    status: $Enums.OrderStatus | null;
    subtotal: runtime.Decimal | null;
    shippingCost: runtime.Decimal | null;
    discount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
    currency: string | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderCountAggregateOutputType = {
    id: number;
    orderNumber: number;
    userId: number;
    status: number;
    subtotal: number;
    shippingCost: number;
    discount: number;
    totalAmount: number;
    currency: number;
    notes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OrderAvgAggregateInputType = {
    userId?: true;
    subtotal?: true;
    shippingCost?: true;
    discount?: true;
    totalAmount?: true;
};
export type OrderSumAggregateInputType = {
    userId?: true;
    subtotal?: true;
    shippingCost?: true;
    discount?: true;
    totalAmount?: true;
};
export type OrderMinAggregateInputType = {
    id?: true;
    orderNumber?: true;
    userId?: true;
    status?: true;
    subtotal?: true;
    shippingCost?: true;
    discount?: true;
    totalAmount?: true;
    currency?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderMaxAggregateInputType = {
    id?: true;
    orderNumber?: true;
    userId?: true;
    status?: true;
    subtotal?: true;
    shippingCost?: true;
    discount?: true;
    totalAmount?: true;
    currency?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderCountAggregateInputType = {
    id?: true;
    orderNumber?: true;
    userId?: true;
    status?: true;
    subtotal?: true;
    shippingCost?: true;
    discount?: true;
    totalAmount?: true;
    currency?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderCountAggregateInputType;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder[P]> : Prisma.GetScalarType<T[P], AggregateOrder[P]>;
};
export type OrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithAggregationInput | Prisma.OrderOrderByWithAggregationInput[];
    by: Prisma.OrderScalarFieldEnum[] | Prisma.OrderScalarFieldEnum;
    having?: Prisma.OrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCountAggregateInputType | true;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type OrderGroupByOutputType = {
    id: string;
    orderNumber: string;
    userId: number;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal;
    shippingCost: runtime.Decimal;
    discount: runtime.Decimal;
    totalAmount: runtime.Decimal;
    currency: string;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]>;
}>>;
export type OrderWhereInput = {
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    id?: Prisma.StringFilter<"Order"> | string;
    orderNumber?: Prisma.StringFilter<"Order"> | string;
    userId?: Prisma.IntFilter<"Order"> | number;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Order"> | string;
    notes?: Prisma.StringNullableFilter<"Order"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    items?: Prisma.OrderItemListRelationFilter;
    shipment?: Prisma.XOR<Prisma.ShipmentNullableScalarRelationFilter, Prisma.ShipmentWhereInput> | null;
    payments?: Prisma.PaymentListRelationFilter;
};
export type OrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    shippingCost?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    items?: Prisma.OrderItemOrderByRelationAggregateInput;
    shipment?: Prisma.ShipmentOrderByWithRelationInput;
    payments?: Prisma.PaymentOrderByRelationAggregateInput;
};
export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orderNumber?: string;
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    userId?: Prisma.IntFilter<"Order"> | number;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Order"> | string;
    notes?: Prisma.StringNullableFilter<"Order"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    items?: Prisma.OrderItemListRelationFilter;
    shipment?: Prisma.XOR<Prisma.ShipmentNullableScalarRelationFilter, Prisma.ShipmentWhereInput> | null;
    payments?: Prisma.PaymentListRelationFilter;
}, "id" | "orderNumber">;
export type OrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    shippingCost?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OrderCountOrderByAggregateInput;
    _avg?: Prisma.OrderAvgOrderByAggregateInput;
    _max?: Prisma.OrderMaxOrderByAggregateInput;
    _min?: Prisma.OrderMinOrderByAggregateInput;
    _sum?: Prisma.OrderSumOrderByAggregateInput;
};
export type OrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    orderNumber?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    userId?: Prisma.IntWithAggregatesFilter<"Order"> | number;
    status?: Prisma.EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalWithAggregatesFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost?: Prisma.DecimalWithAggregatesFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalWithAggregatesFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalWithAggregatesFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Order"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
};
export type OrderCreateInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    shipment?: Prisma.ShipmentCreateNestedOneWithoutOrderInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateInput = {
    id?: string;
    orderNumber: string;
    userId: number;
    status?: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    shipment?: Prisma.ShipmentUncheckedCreateNestedOneWithoutOrderInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    shipment?: Prisma.ShipmentUpdateOneWithoutOrderNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    shipment?: Prisma.ShipmentUncheckedUpdateOneWithoutOrderNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateManyInput = {
    id?: string;
    orderNumber: string;
    userId: number;
    status?: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderListRelationFilter = {
    every?: Prisma.OrderWhereInput;
    some?: Prisma.OrderWhereInput;
    none?: Prisma.OrderWhereInput;
};
export type OrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    shippingCost?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderAvgOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    shippingCost?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
};
export type OrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    shippingCost?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    shippingCost?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderSumOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    shippingCost?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
};
export type OrderScalarRelationFilter = {
    is?: Prisma.OrderWhereInput;
    isNot?: Prisma.OrderWhereInput;
};
export type OrderCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutUserInput | Prisma.OrderUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutUserInput | Prisma.OrderUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutUserInput | Prisma.OrderUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutUserInput | Prisma.OrderUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutUserInput | Prisma.OrderUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutUserInput | Prisma.OrderUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus;
};
export type OrderCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutItemsInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.OrderUpsertWithoutItemsInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutItemsInput, Prisma.OrderUpdateWithoutItemsInput>, Prisma.OrderUncheckedUpdateWithoutItemsInput>;
};
export type OrderCreateNestedOneWithoutShipmentInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutShipmentInput, Prisma.OrderUncheckedCreateWithoutShipmentInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutShipmentInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutShipmentNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutShipmentInput, Prisma.OrderUncheckedCreateWithoutShipmentInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutShipmentInput;
    upsert?: Prisma.OrderUpsertWithoutShipmentInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutShipmentInput, Prisma.OrderUpdateWithoutShipmentInput>, Prisma.OrderUncheckedUpdateWithoutShipmentInput>;
};
export type OrderCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPaymentsInput, Prisma.OrderUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPaymentsInput, Prisma.OrderUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.OrderUpsertWithoutPaymentsInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutPaymentsInput, Prisma.OrderUpdateWithoutPaymentsInput>, Prisma.OrderUncheckedUpdateWithoutPaymentsInput>;
};
export type OrderCreateWithoutUserInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    shipment?: Prisma.ShipmentCreateNestedOneWithoutOrderInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutUserInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    shipment?: Prisma.ShipmentUncheckedCreateNestedOneWithoutOrderInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutUserInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput>;
};
export type OrderCreateManyUserInputEnvelope = {
    data: Prisma.OrderCreateManyUserInput | Prisma.OrderCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutUserInput, Prisma.OrderUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput>;
};
export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutUserInput, Prisma.OrderUncheckedUpdateWithoutUserInput>;
};
export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutUserInput>;
};
export type OrderScalarWhereInput = {
    AND?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    OR?: Prisma.OrderScalarWhereInput[];
    NOT?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    id?: Prisma.StringFilter<"Order"> | string;
    orderNumber?: Prisma.StringFilter<"Order"> | string;
    userId?: Prisma.IntFilter<"Order"> | number;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Order"> | string;
    notes?: Prisma.StringNullableFilter<"Order"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
};
export type OrderCreateWithoutItemsInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    shipment?: Prisma.ShipmentCreateNestedOneWithoutOrderInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string;
    orderNumber: string;
    userId: number;
    status?: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shipment?: Prisma.ShipmentUncheckedCreateNestedOneWithoutOrderInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutItemsInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
};
export type OrderUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutItemsInput, Prisma.OrderUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutItemsInput, Prisma.OrderUncheckedUpdateWithoutItemsInput>;
};
export type OrderUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    shipment?: Prisma.ShipmentUpdateOneWithoutOrderNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipment?: Prisma.ShipmentUncheckedUpdateOneWithoutOrderNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateWithoutShipmentInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutShipmentInput = {
    id?: string;
    orderNumber: string;
    userId: number;
    status?: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutShipmentInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutShipmentInput, Prisma.OrderUncheckedCreateWithoutShipmentInput>;
};
export type OrderUpsertWithoutShipmentInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutShipmentInput, Prisma.OrderUncheckedUpdateWithoutShipmentInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutShipmentInput, Prisma.OrderUncheckedCreateWithoutShipmentInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutShipmentInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutShipmentInput, Prisma.OrderUncheckedUpdateWithoutShipmentInput>;
};
export type OrderUpdateWithoutShipmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutShipmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateWithoutPaymentsInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    shipment?: Prisma.ShipmentCreateNestedOneWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    orderNumber: string;
    userId: number;
    status?: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    shipment?: Prisma.ShipmentUncheckedCreateNestedOneWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutPaymentsInput, Prisma.OrderUncheckedCreateWithoutPaymentsInput>;
};
export type OrderUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutPaymentsInput, Prisma.OrderUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutPaymentsInput, Prisma.OrderUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutPaymentsInput, Prisma.OrderUncheckedUpdateWithoutPaymentsInput>;
};
export type OrderUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    shipment?: Prisma.ShipmentUpdateOneWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    shipment?: Prisma.ShipmentUncheckedUpdateOneWithoutOrderNestedInput;
};
export type OrderCreateManyUserInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    shipment?: Prisma.ShipmentUpdateOneWithoutOrderNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    shipment?: Prisma.ShipmentUncheckedUpdateOneWithoutOrderNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    shippingCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderCountOutputType = {
    items: number;
    payments: number;
};
export type OrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs;
    payments?: boolean | OrderCountOutputTypeCountPaymentsArgs;
};
export type OrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCountOutputTypeSelect<ExtArgs> | null;
};
export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type OrderCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
};
export type OrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderNumber?: boolean;
    userId?: boolean;
    status?: boolean;
    subtotal?: boolean;
    shippingCost?: boolean;
    discount?: boolean;
    totalAmount?: boolean;
    currency?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.Order$itemsArgs<ExtArgs>;
    shipment?: boolean | Prisma.Order$shipmentArgs<ExtArgs>;
    payments?: boolean | Prisma.Order$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderNumber?: boolean;
    userId?: boolean;
    status?: boolean;
    subtotal?: boolean;
    shippingCost?: boolean;
    discount?: boolean;
    totalAmount?: boolean;
    currency?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderNumber?: boolean;
    userId?: boolean;
    status?: boolean;
    subtotal?: boolean;
    shippingCost?: boolean;
    discount?: boolean;
    totalAmount?: boolean;
    currency?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectScalar = {
    id?: boolean;
    orderNumber?: boolean;
    userId?: boolean;
    status?: boolean;
    subtotal?: boolean;
    shippingCost?: boolean;
    discount?: boolean;
    totalAmount?: boolean;
    currency?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderNumber" | "userId" | "status" | "subtotal" | "shippingCost" | "discount" | "totalAmount" | "currency" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>;
export type OrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.Order$itemsArgs<ExtArgs>;
    shipment?: boolean | Prisma.Order$shipmentArgs<ExtArgs>;
    payments?: boolean | Prisma.Order$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type OrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $OrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Order";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        items: Prisma.$OrderItemPayload<ExtArgs>[];
        shipment: Prisma.$ShipmentPayload<ExtArgs> | null;
        payments: Prisma.$PaymentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderNumber: string;
        userId: number;
        status: $Enums.OrderStatus;
        subtotal: runtime.Decimal;
        shippingCost: runtime.Decimal;
        discount: runtime.Decimal;
        totalAmount: runtime.Decimal;
        currency: string;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["order"]>;
    composites: {};
};
export type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderPayload, S>;
export type OrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderCountAggregateInputType | true;
};
export interface OrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Order'];
        meta: {
            name: 'Order';
        };
    };
    findUnique<T extends OrderFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderFindManyArgs>(args?: Prisma.SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderCreateArgs>(args: Prisma.SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderDeleteArgs>(args: Prisma.SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderUpdateArgs>(args: Prisma.SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderUpsertArgs>(args: Prisma.SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderCountArgs>(args?: Prisma.Subset<T, OrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderCountAggregateOutputType> : number>;
    aggregate<T extends OrderAggregateArgs>(args: Prisma.Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>;
    groupBy<T extends OrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderFieldRefs;
}
export interface Prisma__OrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.Order$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    shipment<T extends Prisma.Order$shipmentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$shipmentArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    payments<T extends Prisma.Order$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderFieldRefs {
    readonly id: Prisma.FieldRef<"Order", 'String'>;
    readonly orderNumber: Prisma.FieldRef<"Order", 'String'>;
    readonly userId: Prisma.FieldRef<"Order", 'Int'>;
    readonly status: Prisma.FieldRef<"Order", 'OrderStatus'>;
    readonly subtotal: Prisma.FieldRef<"Order", 'Decimal'>;
    readonly shippingCost: Prisma.FieldRef<"Order", 'Decimal'>;
    readonly discount: Prisma.FieldRef<"Order", 'Decimal'>;
    readonly totalAmount: Prisma.FieldRef<"Order", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"Order", 'String'>;
    readonly notes: Prisma.FieldRef<"Order", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Order", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Order", 'DateTime'>;
}
export type OrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
};
export type OrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type OrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
    include?: Prisma.OrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
};
export type OrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type Order$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
export type Order$shipmentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where?: Prisma.ShipmentWhereInput;
};
export type Order$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
export type OrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
};
