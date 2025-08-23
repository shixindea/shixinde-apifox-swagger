export interface paths {
    "/api/org/class/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 获取报班班级列表 */
        get: {
            parameters: {
                query: {
                    /**
                     * @description 必传，默认传这个值，不要改
                     * @example 1
                     */
                    basic: string;
                    /**
                     * @description 搜索机构
                     * @example
                     */
                    orgClassName?: string;
                    /**
                     * @description 0： 未满班，否则不传
                     * @example 0
                     */
                    isFull?: string;
                    /**
                     * @description 0： 已开班，1：未开班，否则不传
                     * @example 0
                     */
                    futureClass?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        /** @example {
                         *       "code": 1,
                         *       "msg": "success",
                         *       "data": [
                         *         {
                         *           "orgClassId": "68661f43a113f921d46c39fb",
                         *           "orgClassName": "崔茉莉管理班级",
                         *           "capacity": 5,
                         *           "inClassCount": 9,
                         *           "subOrgName": "B校区",
                         *           "teacherName": "崔茉莉",
                         *           "course": {
                         *             "id": "6852945befbe5e7caa25a246",
                         *             "name": "暑假半天托育"
                         *           }
                         *         }
                         *       ]
                         *     } */
                        "application/json": {
                            code: number;
                            msg: string;
                            data: {
                                /** @description 班级id */
                                orgClassId?: string;
                                /** @description 班级名称 */
                                orgClassName?: string;
                                /** @description 满班人数 */
                                capacity?: number;
                                /** @description 在班人数 */
                                inClassCount?: number;
                                /** @description 所属机构 */
                                subOrgName?: string;
                                /** @description 班主任 */
                                teacherName?: string;
                                /** @description 课程信息 */
                                course?: {
                                    /** @description 课程id */
                                    id: string;
                                    /** @description 课程名称 */
                                    name: string;
                                };
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/potential/user/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 获取潜客列表 */
        get: {
            parameters: {
                query?: {
                    /**
                     * @description 分页
                     * @example  0
                     */
                    "  page"?: string;
                    /**
                     * @description 分页大小
                     * @example  0
                     */
                    "  pageSize"?: string;
                    /**
                     * @description 潜客昵称
                     * @example
                     */
                    "  nickname"?: string;
                    /**
                     * @description 潜客手机号
                     * @example 15910291234
                     */
                    "  cellphone"?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        /** @example {
                         *       "code": 1,
                         *       "msg": "success",
                         *       "data": {
                         *         "currentPage": 1,
                         *         "totalPages": 1,
                         *         "count": 1,
                         *         "pageSize": 10,
                         *         "hasNext": false,
                         *         "list": [
                         *           {
                         *             "id": "685289e0efbe5e7caa25a240",
                         *             "nickname": "周杰伦",
                         *             "cellphone": "13822223339"
                         *           }
                         *         ]
                         *       }
                         *     } */
                        "application/json": {
                            code: number;
                            msg: string;
                            data: {
                                currentPage: number;
                                totalPages: number;
                                count: number;
                                pageSize: number;
                                hasNext: boolean;
                                list: {
                                    /** @description 潜客id */
                                    id?: string;
                                    /** @description 潜客名 */
                                    nickname?: string;
                                    /** @description 潜客手机号 */
                                    cellphone?: string;
                                }[];
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/omo/course/order/pre/info/{orgClassId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 获取班级关联的课程的基本信息 */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description 班级id */
                    orgClassId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        /** @example {
                         *       "code": 1,
                         *       "msg": "success",
                         *       "data": {
                         *         "courseId": "6852945befbe5e7caa25a246",
                         *         "courseName": "暑假半天托育",
                         *         "courseSellType": "by_lesson",
                         *         "sellPlanList": [
                         *           {
                         *             "createDate": "2025-06-18 18:26:35",
                         *             "updateDate": null,
                         *             "status": 1,
                         *             "planId": "6852945befbe5e7caa25a244",
                         *             "name": "暑假",
                         *             "lessonCount": 100,
                         *             "price": 1000000,
                         *             "lessonPrice": 10000
                         *           }
                         *         ],
                         *         "orgClass": {
                         *           "orgClassId": "68661f43a113f921d46c39fb",
                         *           "orgClassName": "崔茉莉管理班级",
                         *           "capacity": 5,
                         *           "inClassCount": 9,
                         *           "subOrgName": "B校区",
                         *           "teacherName": "崔茉莉",
                         *           "course": {
                         *             "id": "6852945befbe5e7caa25a246",
                         *             "name": "暑假半天托育"
                         *           }
                         *         }
                         *       }
                         *     } */
                        "application/json": {
                            code: number;
                            msg: string;
                            data: {
                                courseId: string;
                                /** @description 课程id */
                                courseName: string;
                                /** @description 售卖方式 */
                                courseSellType: string;
                                /** @description 售卖计划 */
                                sellPlanList: {
                                    createDate?: string;
                                    updateDate?: null;
                                    status?: number;
                                    planId?: string;
                                    /** @description 售卖计划名称 */
                                    name?: string;
                                    /** @description 总课时数 */
                                    lessonCount?: number;
                                    /** @description 总价格(分) */
                                    price?: number;
                                    /** @description 课时单价 */
                                    lessonPrice?: number;
                                }[];
                                /** @description 班级信息 */
                                orgClass: {
                                    /** @description 班级id */
                                    orgClassId: string;
                                    /** @description 班级名称 */
                                    orgClassName: string;
                                    /** @description 满班人数 */
                                    capacity: number;
                                    /** @description 在班人数 */
                                    inClassCount: number;
                                    /** @description 所属校区 */
                                    subOrgName: string;
                                    /** @description 班主任 */
                                    teacherName: string;
                                    /** @description 关联的omo课程信息 */
                                    course: {
                                        id: string;
                                        name: string;
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/omo/course/order/new": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** 创建购买订单 */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /** @example {
                     *       "userId": "", // 用户id
                     *       "orgClassId": "", // 选择要进入的班级
                     *       "subOrderDTO": { // 订单信息
                     *         "courseId": "", // 课程id
                     *         "sellPlanId": "", // 售卖计划
                     *         "lessonCount": 0, // 购买的课时数
                     *         "discounts": [ // 打折信息，可以为空数组
                     *           {
                     *             "discountType": "deduction", // 打折类型，默认是扣减
                     *             "amount": 0 // 扣减金额(分)
                     *           }
                     *         ]
                     *       },
                     *       "ownerId": "", // 业绩归属人
                     *       "comment": "comment_993d6276a0df" // 备注
                     *     } */
                    "application/json": {
                        /** @description 用户id */
                        userId: string;
                        /** @description 选择要进入的班级 */
                        orgClassId: string;
                        /** @description 订单信息 */
                        subOrderDTO: {
                            /** @description 课程id */
                            courseId: string;
                            /** @description 售卖计划 */
                            sellPlanId: string;
                            /** @description 购买的课时数 */
                            lessonCount: number;
                            /** @description 打折信息，可以为空数组 */
                            discounts: {
                                /** @description 打折类型，默认是扣减 */
                                discountType?: string;
                                /** @description 扣减金额(分) */
                                amount?: number;
                            }[];
                        };
                        /** @description 业绩归属人 */
                        ownerId: string;
                        /** @description 备注 */
                        comment: string;
                    };
                };
            };
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        /** @example {
                         *       "code": 1,
                         *       "msg": "success",
                         *       "data": {
                         *         "orderId": "687e10f091e4463f843ec0a3",
                         *         "payKey": "orderId=687e10f091e4463f843ec0a3&ts=1753092336599&tk=1679f4860c4ed1658a076ceb913e20c0"
                         *       }
                         *     } */
                        "application/json": {
                            code: number;
                            msg: string;
                            data: {
                                /** @description 订单id */
                                orderId: string;
                                /** @description 分享转发出去的消息 */
                                payKey: string;
                            };
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/omo/course/order/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 获取订单列表 */
        get: {
            parameters: {
                query?: {
                    /** @example 0  */
                    "  page"?: string;
                    /** @example 0  */
                    "  pageSize"?: string;
                    /**
                     * @description 搜索用户关键字
                     * @example userSearch_de9fac9ae4ff
                     */
                    "  userSearch"?: string;
                    /** @description 待支付: pending; 已支付: paid; 已取消: cancelled; */
                    "  payStatus"?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        /** @example {
                         *       "code": 1,
                         *       "msg": "success",
                         *       "data": {
                         *         "currentPage": 1,
                         *         "totalPages": 3,
                         *         "count": 28,
                         *         "pageSize": 10,
                         *         "hasNext": true,
                         *         "list": [
                         *           {
                         *             "orderNumber": "MC20250721182958843187968",
                         *             "payStatus": "pending",
                         *             "finalAmount": 99990,
                         *             "paidAmount": null,
                         *             "courses": [
                         *               {
                         *                 "id": "6852945befbe5e7caa25a246",
                         *                 "name": "暑假半天托育"
                         *               }
                         *             ],
                         *             "user": {
                         *               "name": "周杰伦",
                         *               "cellphone": "13822223339"
                         *             }
                         *           }
                         *         ]
                         *       }
                         *     } */
                        "application/json": {
                            code: number;
                            msg: string;
                            data: {
                                currentPage: number;
                                totalPages: number;
                                count: number;
                                pageSize: number;
                                hasNext: boolean;
                                list: {
                                    /** @description 订单编号 */
                                    orderNumber?: string;
                                    /** @description 支付状态 */
                                    payStatus?: string;
                                    /** @description 订单金额 */
                                    finalAmount?: number;
                                    /** @description 实付金额 */
                                    paidAmount?: null;
                                    /** @description 课程信息 */
                                    courses?: {
                                        id?: string;
                                        name?: string;
                                    }[];
                                    /** @description 用户信息 */
                                    user?: {
                                        name: string;
                                        cellphone: string;
                                    };
                                }[];
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/omo/course/order/{omoCourseOrderId}/details": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 获取订单详情 */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    omoCourseOrderId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        /** @example {
                         *       "code": 1,
                         *       "msg": "success",
                         *       "data": {
                         *         "createDate": "2025-07-21 18:29:58",
                         *         "id": "687e16a691e44642e976fe2a",
                         *         "orderNumber": "MC20250721182958843187968",
                         *         "organizationId": "658aadeb84b5c0275b00e25c",
                         *         "potentialUserId": "685289e0efbe5e7caa25a240",
                         *         "payOnline": true,
                         *         "omoPayWay": "wxpay_api",
                         *         "payDate": null,
                         *         "subOrders": [
                         *           {
                         *             "orderId": "687e16a691e44642e976fe2b",
                         *             "courseId": "6852945befbe5e7caa25a246",
                         *             "course": null,
                         *             "sellPlanId": "6852945befbe5e7caa25a244",
                         *             "lessonCount": 10,
                         *             "lessonPrice": 10000,
                         *             "planAmount": 100000,
                         *             "discounts": [
                         *               {
                         *                 "discountType": "deduction",
                         *                 "amount": 10
                         *               }
                         *             ],
                         *             "discountAmount": 10,
                         *             "orgClassId": "68661f43a113f921d46c39fb"
                         *           }
                         *         ],
                         *         "finalAmount": 99990,
                         *         "paidAmount": null,
                         *         "creatorId": "6862561a1f1f5245898fb212",
                         *         "ownerId": "6862561a1f1f5245898fb212",
                         *         "attachments": null,
                         *         "orderChannel": "mini_program",
                         *         "orderStatus": null,
                         *         "payStatus": "pending",
                         *         "comment": "comment_0a3e36ad29fa",
                         *         "user": {
                         *           "name": "周杰伦",
                         *           "cellphone": "13822223339"
                         *         },
                         *         "owner": null,
                         *         "organizationClassSimple": {
                         *           "orgClassId": "68661f43a113f921d46c39fb",
                         *           "orgClassName": "崔茉莉管理班级",
                         *           "capacity": 5,
                         *           "inClassCount": 9,
                         *           "subOrgName": "B校区",
                         *           "teacherName": "崔茉莉",
                         *           "course": {
                         *             "id": "6852945befbe5e7caa25a246",
                         *             "name": "暑假半天托育"
                         *           }
                         *         }
                         *       }
                         *     } */
                        "application/json": {
                            code: number;
                            msg: string;
                            data: {
                                /** @description 经办日期 */
                                createDate: string;
                                /** @description 订单id */
                                id: string;
                                /** @description 订单号 */
                                orderNumber: string;
                                organizationId: string;
                                potentialUserId: string;
                                /** @description 是否是线上支付 */
                                payOnline: boolean;
                                /** @description 支付方式 */
                                omoPayWay: string;
                                /** @description 支付日期 */
                                payDate: null;
                                /** @description 子订单信息 */
                                subOrders: {
                                    orderId?: string;
                                    courseId?: string;
                                    course?: null;
                                    sellPlanId?: string;
                                    /** @description 购买的总课时数 */
                                    lessonCount?: number;
                                    /** @description 课时单价 */
                                    lessonPrice?: number;
                                    /** @description 原始价格 */
                                    planAmount?: number;
                                    /** @description 折扣信息 */
                                    discounts?: {
                                        /** @description 折扣类型 */
                                        discountType?: string;
                                        /** @description 抵扣金额(分) */
                                        amount?: number;
                                    }[];
                                    /** @description 最终抵扣金额 */
                                    discountAmount?: number;
                                    orgClassId?: string;
                                }[];
                                /** @description 最终价格 */
                                finalAmount: number;
                                /** @description 实付金额 */
                                paidAmount: null;
                                creatorId: string;
                                ownerId: string;
                                /** @description 上传的支付凭证 */
                                attachments: null;
                                orderChannel: string;
                                orderStatus: null;
                                /** @description 支付状态 */
                                payStatus: string;
                                /** @description 备注 */
                                comment: string;
                                /** @description 学员信息 */
                                user: {
                                    /** @description 学员名称 */
                                    name: string;
                                    /** @description 学员手机号 */
                                    cellphone: string;
                                };
                                /** @description 业绩归属人信息 */
                                owner: null;
                                organizationClassSimple: {
                                    orgClassId: string;
                                    /** @description 班级名称 */
                                    orgClassName: string;
                                    capacity: number;
                                    inClassCount: number;
                                    /** @description 校区 */
                                    subOrgName: string;
                                    /** @description 班主任 */
                                    teacherName: string;
                                    /** @description 课程信息 */
                                    course: {
                                        id: string;
                                        name: string;
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/omo/course/order/pre/create/{omoCourseOrderId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** 获取微信小程序支付参数 */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    omoCourseOrderId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /** @example {
                     *       "transferKey": "transferKey_b8860fb39c24" // 分享返回的key
                     *     } */
                    "application/json": {
                        /** @description 分享返回的key */
                        transferKey: string;
                    };
                };
            };
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        /** @example {
                         *       "code": 1,
                         *       "msg": "success",
                         *       "data": {
                         *         "appId": "wxfde4e8f0ae407c3c",
                         *         "nonceStr": "oInJdLJ4fxBzoqwv",
                         *         "signType": "MD5",
                         *         "timeStamp": "1753095669",
                         *         "orderId": "687e1df491e44645e58a7c16",
                         *         "codeUrl": null,
                         *         "price": 99990,
                         *         "partnerId": null,
                         *         "paySign": "0B278A81B7A09B5EAA7196F7819B9480",
                         *         "package": "prepay_id=wx211901089523009078927b570001820000"
                         *       }
                         *     } */
                        "application/json": {
                            code: number;
                            msg: string;
                            data: {
                                appId: string;
                                nonceStr: string;
                                signType: string;
                                timeStamp: string;
                                orderId: string;
                                codeUrl: null;
                                price: number;
                                partnerId: null;
                                paySign: string;
                                package: string;
                            };
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/omo/course/order/transfer/{omoCourseOrderId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 获取转赠订单参数 */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    omoCourseOrderId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        /** @example {
                         *       "orderId": "",
                         *       "payKey": "payKey_bcbb8bcfe38b"
                         *     } */
                        "application/json": {
                            /** @description 订单id */
                            orderId: string;
                            /** @description 转赠参数 */
                            payKey: string;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/omo/course/order/transfer/accept": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** 接收转赠的订单 */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /** @example {
                     *       "transferKey": "" // 其他接口获取的转赠key
                     *     } */
                    "application/json": {
                        /** @description 其他接口获取的转赠key */
                        transferKey: string;
                    };
                };
            };
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/teacher/pages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 获取业绩归属人列表 */
        get: {
            parameters: {
                query?: {
                    /** @example 1 */
                    page?: string;
                    /** @example 10 */
                    pageSize?: string;
                    /** @description 搜索老师的关键字 */
                    search?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        /** @example {
                         *       "code": 1,
                         *       "msg": "success",
                         *       "data": {
                         *         "currentPage": 1,
                         *         "totalPages": 1,
                         *         "count": 1,
                         *         "pageSize": 10,
                         *         "hasNext": false,
                         *         "list": [
                         *           {
                         *             "teacherId": "669f0c64daecfd5cf524cb57",
                         *             "teacherName": "安程"
                         *           }
                         *         ]
                         *       }
                         *     } */
                        "application/json": {
                            code: number;
                            msg: string;
                            data: {
                                currentPage: number;
                                totalPages: number;
                                count: number;
                                pageSize: number;
                                hasNext: boolean;
                                list: {
                                    /** @description 归属人id */
                                    teacherId?: string;
                                    /** @description 归属人名称 */
                                    teacherName?: string;
                                }[];
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/potential/user/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** 更新潜客基本信息 */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /** @example {
                     *       "userId": "", // 潜客id
                     *       "nickname": "nickname_82b6fcbc748a", // 潜客名称
                     *       "cellphone": "cellphone_92a0a9433fb0" // 潜客手机号
                     *     } */
                    "application/json": {
                        /** @description 潜客id */
                        userId: string;
                        /** @description 潜客名称 */
                        nickname: string;
                        /** @description 潜客手机号 */
                        cellphone: string;
                    };
                };
            };
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/omo/classes/future/{orgClassId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 获取指定班级未来的课表 */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description 班级id */
                    orgClassId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        /** @example {
                         *       "code": 1,
                         *       "msg": "success",
                         *       "data": [
                         *         {
                         *           "classesId": "68a58d22030a3b625b31b430",
                         *           "startTime": "2025-08-25 12:00:00",
                         *           "capacity": 0,
                         *           "userCount": 0
                         *         }
                         *       ]
                         *     } */
                        "application/json": {
                            code: number;
                            msg: string;
                            data: {
                                /** @description 班级id */
                                classesId?: string;
                                /** @description 开始时间 */
                                startTime?: string;
                                /** @description 满班人数 */
                                capacity?: number;
                                /** @description 在班人数 */
                                userCount?: number;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/omo/course/order/{courseOrderId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** 取消订单 */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    courseOrderId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: never;
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
