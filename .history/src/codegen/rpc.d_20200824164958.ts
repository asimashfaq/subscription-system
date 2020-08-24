import * as $protobuf from "protobufjs";
/** Namespace rpc. */
export namespace rpc {

    /** Represents a SubscriptionPlanService */
    class SubscriptionPlanService extends $protobuf.rpc.Service {

        /**
         * Constructs a new SubscriptionPlanService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new SubscriptionPlanService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SubscriptionPlanService;

        /**
         * Calls FindAll.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and SubscriptionPlanResponse
         */
        public findAll(request: rpc.IEmpty, callback: rpc.SubscriptionPlanService.FindAllCallback): void;

        /**
         * Calls FindAll.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public findAll(request: rpc.IEmpty): Promise<subscription_plan.SubscriptionPlanResponse>;

        /**
         * Calls FindOne.
         * @param request SubscriptionPlanFilter message or plain object
         * @param callback Node-style callback called with the error, if any, and SubscriptionPlan
         */
        public findOne(request: subscription_plan.ISubscriptionPlanFilter, callback: rpc.SubscriptionPlanService.FindOneCallback): void;

        /**
         * Calls FindOne.
         * @param request SubscriptionPlanFilter message or plain object
         * @returns Promise
         */
        public findOne(request: subscription_plan.ISubscriptionPlanFilter): Promise<subscription_plan.SubscriptionPlan>;

        /**
         * Calls Create.
         * @param request SubscriptionPlanInput message or plain object
         * @param callback Node-style callback called with the error, if any, and SubscriptionPlan
         */
        public create(request: subscription_plan.ISubscriptionPlanInput, callback: rpc.SubscriptionPlanService.CreateCallback): void;

        /**
         * Calls Create.
         * @param request SubscriptionPlanInput message or plain object
         * @returns Promise
         */
        public create(request: subscription_plan.ISubscriptionPlanInput): Promise<subscription_plan.SubscriptionPlan>;

        /**
         * Calls Update.
         * @param request UpdateSubscriptionPlanRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and UpdateSubscriptionPlanResponse
         */
        public update(request: subscription_plan.IUpdateSubscriptionPlanRequest, callback: rpc.SubscriptionPlanService.UpdateCallback): void;

        /**
         * Calls Update.
         * @param request UpdateSubscriptionPlanRequest message or plain object
         * @returns Promise
         */
        public update(request: subscription_plan.IUpdateSubscriptionPlanRequest): Promise<subscription_plan.UpdateSubscriptionPlanResponse>;

        /**
         * Calls Delete.
         * @param request SubscriptionPlanFilter message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteSubscriptionPlanResponse
         */
        public delete(request: subscription_plan.ISubscriptionPlanFilter, callback: rpc.SubscriptionPlanService.DeleteCallback): void;

        /**
         * Calls Delete.
         * @param request SubscriptionPlanFilter message or plain object
         * @returns Promise
         */
        public delete(request: subscription_plan.ISubscriptionPlanFilter): Promise<subscription_plan.DeleteSubscriptionPlanResponse>;
    }

    namespace SubscriptionPlanService {

        /**
         * Callback as used by {@link rpc.SubscriptionPlanService#findAll}.
         * @param error Error, if any
         * @param [response] SubscriptionPlanResponse
         */
        type FindAllCallback = (error: (Error|null), response?: subscription_plan.SubscriptionPlanResponse) => void;

        /**
         * Callback as used by {@link rpc.SubscriptionPlanService#findOne}.
         * @param error Error, if any
         * @param [response] SubscriptionPlan
         */
        type FindOneCallback = (error: (Error|null), response?: subscription_plan.SubscriptionPlan) => void;

        /**
         * Callback as used by {@link rpc.SubscriptionPlanService#create}.
         * @param error Error, if any
         * @param [response] SubscriptionPlan
         */
        type CreateCallback = (error: (Error|null), response?: subscription_plan.SubscriptionPlan) => void;

        /**
         * Callback as used by {@link rpc.SubscriptionPlanService#update}.
         * @param error Error, if any
         * @param [response] UpdateSubscriptionPlanResponse
         */
        type UpdateCallback = (error: (Error|null), response?: subscription_plan.UpdateSubscriptionPlanResponse) => void;

        /**
         * Callback as used by {@link rpc.SubscriptionPlanService#delete_}.
         * @param error Error, if any
         * @param [response] DeleteSubscriptionPlanResponse
         */
        type DeleteCallback = (error: (Error|null), response?: subscription_plan.DeleteSubscriptionPlanResponse) => void;
    }

    /** Represents a UserService */
    class UserService extends $protobuf.rpc.Service {

        /**
         * Constructs a new UserService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new UserService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): UserService;

        /**
         * Calls FindAll.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and UserResponse
         */
        public findAll(request: rpc.IEmpty, callback: rpc.UserService.FindAllCallback): void;

        /**
         * Calls FindAll.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public findAll(request: rpc.IEmpty): Promise<user.UserResponse>;

        /**
         * Calls FindOne.
         * @param request UserFilter message or plain object
         * @param callback Node-style callback called with the error, if any, and User
         */
        public findOne(request: user.IUserFilter, callback: rpc.UserService.FindOneCallback): void;

        /**
         * Calls FindOne.
         * @param request UserFilter message or plain object
         * @returns Promise
         */
        public findOne(request: user.IUserFilter): Promise<user.User>;

        /**
         * Calls Create.
         * @param request UserInput message or plain object
         * @param callback Node-style callback called with the error, if any, and User
         */
        public create(request: user.IUserInput, callback: rpc.UserService.CreateCallback): void;

        /**
         * Calls Create.
         * @param request UserInput message or plain object
         * @returns Promise
         */
        public create(request: user.IUserInput): Promise<user.User>;

        /**
         * Calls Update.
         * @param request UpdateUserRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and UpdateUserResponse
         */
        public update(request: user.IUpdateUserRequest, callback: rpc.UserService.UpdateCallback): void;

        /**
         * Calls Update.
         * @param request UpdateUserRequest message or plain object
         * @returns Promise
         */
        public update(request: user.IUpdateUserRequest): Promise<user.UpdateUserResponse>;

        /**
         * Calls Delete.
         * @param request UserFilter message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteUserResponse
         */
        public delete(request: user.IUserFilter, callback: rpc.UserService.DeleteCallback): void;

        /**
         * Calls Delete.
         * @param request UserFilter message or plain object
         * @returns Promise
         */
        public delete(request: user.IUserFilter): Promise<user.DeleteUserResponse>;
    }

    namespace UserService {

        /**
         * Callback as used by {@link rpc.UserService#findAll}.
         * @param error Error, if any
         * @param [response] UserResponse
         */
        type FindAllCallback = (error: (Error|null), response?: user.UserResponse) => void;

        /**
         * Callback as used by {@link rpc.UserService#findOne}.
         * @param error Error, if any
         * @param [response] User
         */
        type FindOneCallback = (error: (Error|null), response?: user.User) => void;

        /**
         * Callback as used by {@link rpc.UserService#create}.
         * @param error Error, if any
         * @param [response] User
         */
        type CreateCallback = (error: (Error|null), response?: user.User) => void;

        /**
         * Callback as used by {@link rpc.UserService#update}.
         * @param error Error, if any
         * @param [response] UpdateUserResponse
         */
        type UpdateCallback = (error: (Error|null), response?: user.UpdateUserResponse) => void;

        /**
         * Callback as used by {@link rpc.UserService#delete_}.
         * @param error Error, if any
         * @param [response] DeleteUserResponse
         */
        type DeleteCallback = (error: (Error|null), response?: user.DeleteUserResponse) => void;
    }

    /** Properties of an Empty. */
    interface IEmpty {
    }

    /** Represents an Empty. */
    class Empty implements IEmpty {

        /**
         * Constructs a new Empty.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IEmpty);

        /**
         * Creates a new Empty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Empty instance
         */
        public static create(properties?: rpc.IEmpty): rpc.Empty;

        /**
         * Encodes the specified Empty message. Does not implicitly {@link rpc.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link rpc.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.Empty;

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.Empty;

        /**
         * Verifies an Empty message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Empty
         */
        public static fromObject(object: { [k: string]: any }): rpc.Empty;

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @param message Empty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Empty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace subscription_plan. */
export namespace subscription_plan {

    /** Properties of a SubscriptionPlanInput. */
    interface ISubscriptionPlanInput {

        /** SubscriptionPlanInput name */
        name?: (string|null);

        /** SubscriptionPlanInput code */
        code?: (string|null);

        /** SubscriptionPlanInput description */
        description?: (string|null);

        /** SubscriptionPlanInput price */
        price?: (number|null);

        /** SubscriptionPlanInput extra_fee */
        extra_fee?: (number|null);

        /** SubscriptionPlanInput invoice_period */
        invoice_period?: (number|null);

        /** SubscriptionPlanInput invoice_duration */
        invoice_duration?: (subscription_plan.SubscriptionPlanInput.SubscriptionDuration|null);

        /** SubscriptionPlanInput trail_period */
        trail_period?: (number|null);

        /** SubscriptionPlanInput trail_duration */
        trail_duration?: (subscription_plan.SubscriptionPlanInput.SubscriptionDuration|null);
    }

    /** Represents a SubscriptionPlanInput. */
    class SubscriptionPlanInput implements ISubscriptionPlanInput {

        /**
         * Constructs a new SubscriptionPlanInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: subscription_plan.ISubscriptionPlanInput);

        /** SubscriptionPlanInput name. */
        public name: string;

        /** SubscriptionPlanInput code. */
        public code: string;

        /** SubscriptionPlanInput description. */
        public description: string;

        /** SubscriptionPlanInput price. */
        public price: number;

        /** SubscriptionPlanInput extra_fee. */
        public extra_fee: number;

        /** SubscriptionPlanInput invoice_period. */
        public invoice_period: number;

        /** SubscriptionPlanInput invoice_duration. */
        public invoice_duration: subscription_plan.SubscriptionPlanInput.SubscriptionDuration;

        /** SubscriptionPlanInput trail_period. */
        public trail_period: number;

        /** SubscriptionPlanInput trail_duration. */
        public trail_duration: subscription_plan.SubscriptionPlanInput.SubscriptionDuration;

        /**
         * Creates a new SubscriptionPlanInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubscriptionPlanInput instance
         */
        public static create(properties?: subscription_plan.ISubscriptionPlanInput): subscription_plan.SubscriptionPlanInput;

        /**
         * Encodes the specified SubscriptionPlanInput message. Does not implicitly {@link subscription_plan.SubscriptionPlanInput.verify|verify} messages.
         * @param message SubscriptionPlanInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: subscription_plan.ISubscriptionPlanInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubscriptionPlanInput message, length delimited. Does not implicitly {@link subscription_plan.SubscriptionPlanInput.verify|verify} messages.
         * @param message SubscriptionPlanInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: subscription_plan.ISubscriptionPlanInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubscriptionPlanInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubscriptionPlanInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): subscription_plan.SubscriptionPlanInput;

        /**
         * Decodes a SubscriptionPlanInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubscriptionPlanInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): subscription_plan.SubscriptionPlanInput;

        /**
         * Verifies a SubscriptionPlanInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubscriptionPlanInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubscriptionPlanInput
         */
        public static fromObject(object: { [k: string]: any }): subscription_plan.SubscriptionPlanInput;

        /**
         * Creates a plain object from a SubscriptionPlanInput message. Also converts values to other types if specified.
         * @param message SubscriptionPlanInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: subscription_plan.SubscriptionPlanInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubscriptionPlanInput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace SubscriptionPlanInput {

        /** SubscriptionDuration enum. */
        enum SubscriptionDuration {
            DAY = 0,
            WEEK = 1,
            MONTH = 2,
            YEAR = 3
        }
    }

    /** Properties of a SubscriptionPlan. */
    interface ISubscriptionPlan {

        /** SubscriptionPlan id */
        id?: (string|null);

        /** SubscriptionPlan name */
        name?: (string|null);

        /** SubscriptionPlan code */
        code?: (string|null);

        /** SubscriptionPlan slug */
        slug?: (string|null);

        /** SubscriptionPlan description */
        description?: (string|null);

        /** SubscriptionPlan price */
        price?: (number|null);

        /** SubscriptionPlan extra_fee */
        extra_fee?: (number|null);

        /** SubscriptionPlan invoice_period */
        invoice_period?: (number|null);

        /** SubscriptionPlan invoice_duration */
        invoice_duration?: (string|null);

        /** SubscriptionPlan trail_period */
        trail_period?: (number|null);

        /** SubscriptionPlan trail_duration */
        trail_duration?: (string|null);
    }

    /** Represents a SubscriptionPlan. */
    class SubscriptionPlan implements ISubscriptionPlan {

        /**
         * Constructs a new SubscriptionPlan.
         * @param [properties] Properties to set
         */
        constructor(properties?: subscription_plan.ISubscriptionPlan);

        /** SubscriptionPlan id. */
        public id: string;

        /** SubscriptionPlan name. */
        public name: string;

        /** SubscriptionPlan code. */
        public code: string;

        /** SubscriptionPlan slug. */
        public slug: string;

        /** SubscriptionPlan description. */
        public description: string;

        /** SubscriptionPlan price. */
        public price: number;

        /** SubscriptionPlan extra_fee. */
        public extra_fee: number;

        /** SubscriptionPlan invoice_period. */
        public invoice_period: number;

        /** SubscriptionPlan invoice_duration. */
        public invoice_duration: string;

        /** SubscriptionPlan trail_period. */
        public trail_period: number;

        /** SubscriptionPlan trail_duration. */
        public trail_duration: string;

        /**
         * Creates a new SubscriptionPlan instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubscriptionPlan instance
         */
        public static create(properties?: subscription_plan.ISubscriptionPlan): subscription_plan.SubscriptionPlan;

        /**
         * Encodes the specified SubscriptionPlan message. Does not implicitly {@link subscription_plan.SubscriptionPlan.verify|verify} messages.
         * @param message SubscriptionPlan message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: subscription_plan.ISubscriptionPlan, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubscriptionPlan message, length delimited. Does not implicitly {@link subscription_plan.SubscriptionPlan.verify|verify} messages.
         * @param message SubscriptionPlan message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: subscription_plan.ISubscriptionPlan, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubscriptionPlan message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubscriptionPlan
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): subscription_plan.SubscriptionPlan;

        /**
         * Decodes a SubscriptionPlan message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubscriptionPlan
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): subscription_plan.SubscriptionPlan;

        /**
         * Verifies a SubscriptionPlan message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubscriptionPlan message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubscriptionPlan
         */
        public static fromObject(object: { [k: string]: any }): subscription_plan.SubscriptionPlan;

        /**
         * Creates a plain object from a SubscriptionPlan message. Also converts values to other types if specified.
         * @param message SubscriptionPlan
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: subscription_plan.SubscriptionPlan, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubscriptionPlan to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteSubscriptionPlanResponse. */
    interface IDeleteSubscriptionPlanResponse {

        /** DeleteSubscriptionPlanResponse modified */
        modified?: (number|null);

        /** DeleteSubscriptionPlanResponse edges */
        edges?: (subscription_plan.ISubscriptionPlan[]|null);
    }

    /** Represents a DeleteSubscriptionPlanResponse. */
    class DeleteSubscriptionPlanResponse implements IDeleteSubscriptionPlanResponse {

        /**
         * Constructs a new DeleteSubscriptionPlanResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: subscription_plan.IDeleteSubscriptionPlanResponse);

        /** DeleteSubscriptionPlanResponse modified. */
        public modified: number;

        /** DeleteSubscriptionPlanResponse edges. */
        public edges: subscription_plan.ISubscriptionPlan[];

        /**
         * Creates a new DeleteSubscriptionPlanResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteSubscriptionPlanResponse instance
         */
        public static create(properties?: subscription_plan.IDeleteSubscriptionPlanResponse): subscription_plan.DeleteSubscriptionPlanResponse;

        /**
         * Encodes the specified DeleteSubscriptionPlanResponse message. Does not implicitly {@link subscription_plan.DeleteSubscriptionPlanResponse.verify|verify} messages.
         * @param message DeleteSubscriptionPlanResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: subscription_plan.IDeleteSubscriptionPlanResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteSubscriptionPlanResponse message, length delimited. Does not implicitly {@link subscription_plan.DeleteSubscriptionPlanResponse.verify|verify} messages.
         * @param message DeleteSubscriptionPlanResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: subscription_plan.IDeleteSubscriptionPlanResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteSubscriptionPlanResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteSubscriptionPlanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): subscription_plan.DeleteSubscriptionPlanResponse;

        /**
         * Decodes a DeleteSubscriptionPlanResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteSubscriptionPlanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): subscription_plan.DeleteSubscriptionPlanResponse;

        /**
         * Verifies a DeleteSubscriptionPlanResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteSubscriptionPlanResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteSubscriptionPlanResponse
         */
        public static fromObject(object: { [k: string]: any }): subscription_plan.DeleteSubscriptionPlanResponse;

        /**
         * Creates a plain object from a DeleteSubscriptionPlanResponse message. Also converts values to other types if specified.
         * @param message DeleteSubscriptionPlanResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: subscription_plan.DeleteSubscriptionPlanResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteSubscriptionPlanResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateSubscriptionPlanRequest. */
    interface IUpdateSubscriptionPlanRequest {

        /** UpdateSubscriptionPlanRequest payload */
        payload?: (subscription_plan.ISubscriptionPlanInput|null);

        /** UpdateSubscriptionPlanRequest where */
        where?: (subscription_plan.ISubscriptionPlanFilter|null);
    }

    /** Represents an UpdateSubscriptionPlanRequest. */
    class UpdateSubscriptionPlanRequest implements IUpdateSubscriptionPlanRequest {

        /**
         * Constructs a new UpdateSubscriptionPlanRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: subscription_plan.IUpdateSubscriptionPlanRequest);

        /** UpdateSubscriptionPlanRequest payload. */
        public payload?: (subscription_plan.ISubscriptionPlanInput|null);

        /** UpdateSubscriptionPlanRequest where. */
        public where?: (subscription_plan.ISubscriptionPlanFilter|null);

        /**
         * Creates a new UpdateSubscriptionPlanRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateSubscriptionPlanRequest instance
         */
        public static create(properties?: subscription_plan.IUpdateSubscriptionPlanRequest): subscription_plan.UpdateSubscriptionPlanRequest;

        /**
         * Encodes the specified UpdateSubscriptionPlanRequest message. Does not implicitly {@link subscription_plan.UpdateSubscriptionPlanRequest.verify|verify} messages.
         * @param message UpdateSubscriptionPlanRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: subscription_plan.IUpdateSubscriptionPlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateSubscriptionPlanRequest message, length delimited. Does not implicitly {@link subscription_plan.UpdateSubscriptionPlanRequest.verify|verify} messages.
         * @param message UpdateSubscriptionPlanRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: subscription_plan.IUpdateSubscriptionPlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateSubscriptionPlanRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateSubscriptionPlanRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): subscription_plan.UpdateSubscriptionPlanRequest;

        /**
         * Decodes an UpdateSubscriptionPlanRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateSubscriptionPlanRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): subscription_plan.UpdateSubscriptionPlanRequest;

        /**
         * Verifies an UpdateSubscriptionPlanRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateSubscriptionPlanRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateSubscriptionPlanRequest
         */
        public static fromObject(object: { [k: string]: any }): subscription_plan.UpdateSubscriptionPlanRequest;

        /**
         * Creates a plain object from an UpdateSubscriptionPlanRequest message. Also converts values to other types if specified.
         * @param message UpdateSubscriptionPlanRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: subscription_plan.UpdateSubscriptionPlanRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateSubscriptionPlanRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateSubscriptionPlanResponse. */
    interface IUpdateSubscriptionPlanResponse {

        /** UpdateSubscriptionPlanResponse modified */
        modified?: (number|null);

        /** UpdateSubscriptionPlanResponse edges */
        edges?: (subscription_plan.ISubscriptionPlan[]|null);
    }

    /** Represents an UpdateSubscriptionPlanResponse. */
    class UpdateSubscriptionPlanResponse implements IUpdateSubscriptionPlanResponse {

        /**
         * Constructs a new UpdateSubscriptionPlanResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: subscription_plan.IUpdateSubscriptionPlanResponse);

        /** UpdateSubscriptionPlanResponse modified. */
        public modified: number;

        /** UpdateSubscriptionPlanResponse edges. */
        public edges: subscription_plan.ISubscriptionPlan[];

        /**
         * Creates a new UpdateSubscriptionPlanResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateSubscriptionPlanResponse instance
         */
        public static create(properties?: subscription_plan.IUpdateSubscriptionPlanResponse): subscription_plan.UpdateSubscriptionPlanResponse;

        /**
         * Encodes the specified UpdateSubscriptionPlanResponse message. Does not implicitly {@link subscription_plan.UpdateSubscriptionPlanResponse.verify|verify} messages.
         * @param message UpdateSubscriptionPlanResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: subscription_plan.IUpdateSubscriptionPlanResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateSubscriptionPlanResponse message, length delimited. Does not implicitly {@link subscription_plan.UpdateSubscriptionPlanResponse.verify|verify} messages.
         * @param message UpdateSubscriptionPlanResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: subscription_plan.IUpdateSubscriptionPlanResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateSubscriptionPlanResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateSubscriptionPlanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): subscription_plan.UpdateSubscriptionPlanResponse;

        /**
         * Decodes an UpdateSubscriptionPlanResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateSubscriptionPlanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): subscription_plan.UpdateSubscriptionPlanResponse;

        /**
         * Verifies an UpdateSubscriptionPlanResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateSubscriptionPlanResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateSubscriptionPlanResponse
         */
        public static fromObject(object: { [k: string]: any }): subscription_plan.UpdateSubscriptionPlanResponse;

        /**
         * Creates a plain object from an UpdateSubscriptionPlanResponse message. Also converts values to other types if specified.
         * @param message UpdateSubscriptionPlanResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: subscription_plan.UpdateSubscriptionPlanResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateSubscriptionPlanResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SubscriptionPlanResponse. */
    interface ISubscriptionPlanResponse {

        /** SubscriptionPlanResponse page_info */
        page_info?: (number|null);

        /** SubscriptionPlanResponse edges */
        edges?: (subscription_plan.ISubscriptionPlan[]|null);
    }

    /** Represents a SubscriptionPlanResponse. */
    class SubscriptionPlanResponse implements ISubscriptionPlanResponse {

        /**
         * Constructs a new SubscriptionPlanResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: subscription_plan.ISubscriptionPlanResponse);

        /** SubscriptionPlanResponse page_info. */
        public page_info: number;

        /** SubscriptionPlanResponse edges. */
        public edges: subscription_plan.ISubscriptionPlan[];

        /**
         * Creates a new SubscriptionPlanResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubscriptionPlanResponse instance
         */
        public static create(properties?: subscription_plan.ISubscriptionPlanResponse): subscription_plan.SubscriptionPlanResponse;

        /**
         * Encodes the specified SubscriptionPlanResponse message. Does not implicitly {@link subscription_plan.SubscriptionPlanResponse.verify|verify} messages.
         * @param message SubscriptionPlanResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: subscription_plan.ISubscriptionPlanResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubscriptionPlanResponse message, length delimited. Does not implicitly {@link subscription_plan.SubscriptionPlanResponse.verify|verify} messages.
         * @param message SubscriptionPlanResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: subscription_plan.ISubscriptionPlanResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubscriptionPlanResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubscriptionPlanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): subscription_plan.SubscriptionPlanResponse;

        /**
         * Decodes a SubscriptionPlanResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubscriptionPlanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): subscription_plan.SubscriptionPlanResponse;

        /**
         * Verifies a SubscriptionPlanResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubscriptionPlanResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubscriptionPlanResponse
         */
        public static fromObject(object: { [k: string]: any }): subscription_plan.SubscriptionPlanResponse;

        /**
         * Creates a plain object from a SubscriptionPlanResponse message. Also converts values to other types if specified.
         * @param message SubscriptionPlanResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: subscription_plan.SubscriptionPlanResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubscriptionPlanResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Pagination. */
    interface IPagination {

        /** Pagination total */
        total?: (number|null);

        /** Pagination has_more */
        has_more?: (boolean|null);

        /** Pagination limit */
        limit?: (number|null);

        /** Pagination skip */
        skip?: (number|null);
    }

    /** Represents a Pagination. */
    class Pagination implements IPagination {

        /**
         * Constructs a new Pagination.
         * @param [properties] Properties to set
         */
        constructor(properties?: subscription_plan.IPagination);

        /** Pagination total. */
        public total: number;

        /** Pagination has_more. */
        public has_more: boolean;

        /** Pagination limit. */
        public limit: number;

        /** Pagination skip. */
        public skip: number;

        /**
         * Creates a new Pagination instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pagination instance
         */
        public static create(properties?: subscription_plan.IPagination): subscription_plan.Pagination;

        /**
         * Encodes the specified Pagination message. Does not implicitly {@link subscription_plan.Pagination.verify|verify} messages.
         * @param message Pagination message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: subscription_plan.IPagination, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pagination message, length delimited. Does not implicitly {@link subscription_plan.Pagination.verify|verify} messages.
         * @param message Pagination message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: subscription_plan.IPagination, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pagination message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pagination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): subscription_plan.Pagination;

        /**
         * Decodes a Pagination message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pagination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): subscription_plan.Pagination;

        /**
         * Verifies a Pagination message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pagination message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pagination
         */
        public static fromObject(object: { [k: string]: any }): subscription_plan.Pagination;

        /**
         * Creates a plain object from a Pagination message. Also converts values to other types if specified.
         * @param message Pagination
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: subscription_plan.Pagination, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pagination to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SubscriptionPlanFilter. */
    interface ISubscriptionPlanFilter {

        /** SubscriptionPlanFilter id */
        id?: (string|null);
    }

    /** Represents a SubscriptionPlanFilter. */
    class SubscriptionPlanFilter implements ISubscriptionPlanFilter {

        /**
         * Constructs a new SubscriptionPlanFilter.
         * @param [properties] Properties to set
         */
        constructor(properties?: subscription_plan.ISubscriptionPlanFilter);

        /** SubscriptionPlanFilter id. */
        public id: string;

        /**
         * Creates a new SubscriptionPlanFilter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubscriptionPlanFilter instance
         */
        public static create(properties?: subscription_plan.ISubscriptionPlanFilter): subscription_plan.SubscriptionPlanFilter;

        /**
         * Encodes the specified SubscriptionPlanFilter message. Does not implicitly {@link subscription_plan.SubscriptionPlanFilter.verify|verify} messages.
         * @param message SubscriptionPlanFilter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: subscription_plan.ISubscriptionPlanFilter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubscriptionPlanFilter message, length delimited. Does not implicitly {@link subscription_plan.SubscriptionPlanFilter.verify|verify} messages.
         * @param message SubscriptionPlanFilter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: subscription_plan.ISubscriptionPlanFilter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubscriptionPlanFilter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubscriptionPlanFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): subscription_plan.SubscriptionPlanFilter;

        /**
         * Decodes a SubscriptionPlanFilter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubscriptionPlanFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): subscription_plan.SubscriptionPlanFilter;

        /**
         * Verifies a SubscriptionPlanFilter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubscriptionPlanFilter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubscriptionPlanFilter
         */
        public static fromObject(object: { [k: string]: any }): subscription_plan.SubscriptionPlanFilter;

        /**
         * Creates a plain object from a SubscriptionPlanFilter message. Also converts values to other types if specified.
         * @param message SubscriptionPlanFilter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: subscription_plan.SubscriptionPlanFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubscriptionPlanFilter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace user. */
export namespace user {

    /** Properties of a UserInput. */
    interface IUserInput {

        /** UserInput name */
        name?: (string|null);

        /** UserInput email */
        email?: (string|null);

        /** UserInput raw_password */
        raw_password?: (string|null);

        /** UserInput role */
        role?: (user.UserInput.UserRole|null);

        /** UserInput phone_number */
        phone_number?: (string|null);
    }

    /** Represents a UserInput. */
    class UserInput implements IUserInput {

        /**
         * Constructs a new UserInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUserInput);

        /** UserInput name. */
        public name: string;

        /** UserInput email. */
        public email: string;

        /** UserInput raw_password. */
        public raw_password: string;

        /** UserInput role. */
        public role: user.UserInput.UserRole;

        /** UserInput phone_number. */
        public phone_number: string;

        /**
         * Creates a new UserInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInput instance
         */
        public static create(properties?: user.IUserInput): user.UserInput;

        /**
         * Encodes the specified UserInput message. Does not implicitly {@link user.UserInput.verify|verify} messages.
         * @param message UserInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IUserInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInput message, length delimited. Does not implicitly {@link user.UserInput.verify|verify} messages.
         * @param message UserInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IUserInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.UserInput;

        /**
         * Decodes a UserInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.UserInput;

        /**
         * Verifies a UserInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInput
         */
        public static fromObject(object: { [k: string]: any }): user.UserInput;

        /**
         * Creates a plain object from a UserInput message. Also converts values to other types if specified.
         * @param message UserInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.UserInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace UserInput {

        /** UserRole enum. */
        enum UserRole {
            ADMIN = 0,
            SUBSCRIBER = 1
        }
    }

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: (string|null);

        /** User name */
        name?: (string|null);

        /** User email */
        email?: (string|null);

        /** User raw_password */
        raw_password?: (string|null);

        /** User role */
        role?: (user.UserInput.UserRole|null);

        /** User phone_number */
        phone_number?: (string|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUser);

        /** User id. */
        public id: string;

        /** User name. */
        public name: string;

        /** User email. */
        public email: string;

        /** User raw_password. */
        public raw_password: string;

        /** User role. */
        public role: user.UserInput.UserRole;

        /** User phone_number. */
        public phone_number: string;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: user.IUser): user.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link user.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link user.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): user.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteUserResponse. */
    interface IDeleteUserResponse {

        /** DeleteUserResponse modified */
        modified?: (number|null);

        /** DeleteUserResponse edges */
        edges?: (user.IUser[]|null);
    }

    /** Represents a DeleteUserResponse. */
    class DeleteUserResponse implements IDeleteUserResponse {

        /**
         * Constructs a new DeleteUserResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IDeleteUserResponse);

        /** DeleteUserResponse modified. */
        public modified: number;

        /** DeleteUserResponse edges. */
        public edges: user.IUser[];

        /**
         * Creates a new DeleteUserResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteUserResponse instance
         */
        public static create(properties?: user.IDeleteUserResponse): user.DeleteUserResponse;

        /**
         * Encodes the specified DeleteUserResponse message. Does not implicitly {@link user.DeleteUserResponse.verify|verify} messages.
         * @param message DeleteUserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IDeleteUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteUserResponse message, length delimited. Does not implicitly {@link user.DeleteUserResponse.verify|verify} messages.
         * @param message DeleteUserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IDeleteUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteUserResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.DeleteUserResponse;

        /**
         * Decodes a DeleteUserResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.DeleteUserResponse;

        /**
         * Verifies a DeleteUserResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteUserResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteUserResponse
         */
        public static fromObject(object: { [k: string]: any }): user.DeleteUserResponse;

        /**
         * Creates a plain object from a DeleteUserResponse message. Also converts values to other types if specified.
         * @param message DeleteUserResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.DeleteUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteUserResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateUserRequest. */
    interface IUpdateUserRequest {

        /** UpdateUserRequest payload */
        payload?: (user.IUserInput|null);

        /** UpdateUserRequest where */
        where?: (user.IUserFilter|null);
    }

    /** Represents an UpdateUserRequest. */
    class UpdateUserRequest implements IUpdateUserRequest {

        /**
         * Constructs a new UpdateUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUpdateUserRequest);

        /** UpdateUserRequest payload. */
        public payload?: (user.IUserInput|null);

        /** UpdateUserRequest where. */
        public where?: (user.IUserFilter|null);

        /**
         * Creates a new UpdateUserRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateUserRequest instance
         */
        public static create(properties?: user.IUpdateUserRequest): user.UpdateUserRequest;

        /**
         * Encodes the specified UpdateUserRequest message. Does not implicitly {@link user.UpdateUserRequest.verify|verify} messages.
         * @param message UpdateUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IUpdateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateUserRequest message, length delimited. Does not implicitly {@link user.UpdateUserRequest.verify|verify} messages.
         * @param message UpdateUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IUpdateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.UpdateUserRequest;

        /**
         * Decodes an UpdateUserRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.UpdateUserRequest;

        /**
         * Verifies an UpdateUserRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateUserRequest
         */
        public static fromObject(object: { [k: string]: any }): user.UpdateUserRequest;

        /**
         * Creates a plain object from an UpdateUserRequest message. Also converts values to other types if specified.
         * @param message UpdateUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.UpdateUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateUserResponse. */
    interface IUpdateUserResponse {

        /** UpdateUserResponse modified */
        modified?: (number|null);

        /** UpdateUserResponse edges */
        edges?: (user.IUser[]|null);
    }

    /** Represents an UpdateUserResponse. */
    class UpdateUserResponse implements IUpdateUserResponse {

        /**
         * Constructs a new UpdateUserResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUpdateUserResponse);

        /** UpdateUserResponse modified. */
        public modified: number;

        /** UpdateUserResponse edges. */
        public edges: user.IUser[];

        /**
         * Creates a new UpdateUserResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateUserResponse instance
         */
        public static create(properties?: user.IUpdateUserResponse): user.UpdateUserResponse;

        /**
         * Encodes the specified UpdateUserResponse message. Does not implicitly {@link user.UpdateUserResponse.verify|verify} messages.
         * @param message UpdateUserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IUpdateUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateUserResponse message, length delimited. Does not implicitly {@link user.UpdateUserResponse.verify|verify} messages.
         * @param message UpdateUserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IUpdateUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateUserResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.UpdateUserResponse;

        /**
         * Decodes an UpdateUserResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.UpdateUserResponse;

        /**
         * Verifies an UpdateUserResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateUserResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateUserResponse
         */
        public static fromObject(object: { [k: string]: any }): user.UpdateUserResponse;

        /**
         * Creates a plain object from an UpdateUserResponse message. Also converts values to other types if specified.
         * @param message UpdateUserResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.UpdateUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateUserResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserResponse. */
    interface IUserResponse {

        /** UserResponse page_info */
        page_info?: (number|null);

        /** UserResponse edges */
        edges?: (user.IUser[]|null);
    }

    /** Represents a UserResponse. */
    class UserResponse implements IUserResponse {

        /**
         * Constructs a new UserResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUserResponse);

        /** UserResponse page_info. */
        public page_info: number;

        /** UserResponse edges. */
        public edges: user.IUser[];

        /**
         * Creates a new UserResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserResponse instance
         */
        public static create(properties?: user.IUserResponse): user.UserResponse;

        /**
         * Encodes the specified UserResponse message. Does not implicitly {@link user.UserResponse.verify|verify} messages.
         * @param message UserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserResponse message, length delimited. Does not implicitly {@link user.UserResponse.verify|verify} messages.
         * @param message UserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.UserResponse;

        /**
         * Decodes a UserResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.UserResponse;

        /**
         * Verifies a UserResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserResponse
         */
        public static fromObject(object: { [k: string]: any }): user.UserResponse;

        /**
         * Creates a plain object from a UserResponse message. Also converts values to other types if specified.
         * @param message UserResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.UserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Pagination. */
    interface IPagination {

        /** Pagination total */
        total?: (number|null);

        /** Pagination has_more */
        has_more?: (boolean|null);

        /** Pagination limit */
        limit?: (number|null);

        /** Pagination skip */
        skip?: (number|null);
    }

    /** Represents a Pagination. */
    class Pagination implements IPagination {

        /**
         * Constructs a new Pagination.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IPagination);

        /** Pagination total. */
        public total: number;

        /** Pagination has_more. */
        public has_more: boolean;

        /** Pagination limit. */
        public limit: number;

        /** Pagination skip. */
        public skip: number;

        /**
         * Creates a new Pagination instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pagination instance
         */
        public static create(properties?: user.IPagination): user.Pagination;

        /**
         * Encodes the specified Pagination message. Does not implicitly {@link user.Pagination.verify|verify} messages.
         * @param message Pagination message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IPagination, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pagination message, length delimited. Does not implicitly {@link user.Pagination.verify|verify} messages.
         * @param message Pagination message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IPagination, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pagination message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pagination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.Pagination;

        /**
         * Decodes a Pagination message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pagination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.Pagination;

        /**
         * Verifies a Pagination message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pagination message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pagination
         */
        public static fromObject(object: { [k: string]: any }): user.Pagination;

        /**
         * Creates a plain object from a Pagination message. Also converts values to other types if specified.
         * @param message Pagination
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.Pagination, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pagination to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserFilter. */
    interface IUserFilter {

        /** UserFilter id */
        id?: (string|null);
    }

    /** Represents a UserFilter. */
    class UserFilter implements IUserFilter {

        /**
         * Constructs a new UserFilter.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUserFilter);

        /** UserFilter id. */
        public id: string;

        /**
         * Creates a new UserFilter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserFilter instance
         */
        public static create(properties?: user.IUserFilter): user.UserFilter;

        /**
         * Encodes the specified UserFilter message. Does not implicitly {@link user.UserFilter.verify|verify} messages.
         * @param message UserFilter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IUserFilter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserFilter message, length delimited. Does not implicitly {@link user.UserFilter.verify|verify} messages.
         * @param message UserFilter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IUserFilter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserFilter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.UserFilter;

        /**
         * Decodes a UserFilter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.UserFilter;

        /**
         * Verifies a UserFilter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserFilter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserFilter
         */
        public static fromObject(object: { [k: string]: any }): user.UserFilter;

        /**
         * Creates a plain object from a UserFilter message. Also converts values to other types if specified.
         * @param message UserFilter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.UserFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserFilter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
