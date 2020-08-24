/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.rpc = (function() {

    /**
     * Namespace rpc.
     * @exports rpc
     * @namespace
     */
    var rpc = {};

    rpc.SubscriptionPlanService = (function() {

        /**
         * Constructs a new SubscriptionPlanService service.
         * @memberof rpc
         * @classdesc Represents a SubscriptionPlanService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function SubscriptionPlanService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (SubscriptionPlanService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = SubscriptionPlanService;

        /**
         * Creates new SubscriptionPlanService service using the specified rpc implementation.
         * @function create
         * @memberof rpc.SubscriptionPlanService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {SubscriptionPlanService} RPC service. Useful where requests and/or responses are streamed.
         */
        SubscriptionPlanService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link rpc.SubscriptionPlanService#findAll}.
         * @memberof rpc.SubscriptionPlanService
         * @typedef FindAllCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {subscription_plan.SubscriptionPlanResponse} [response] SubscriptionPlanResponse
         */

        /**
         * Calls FindAll.
         * @function findAll
         * @memberof rpc.SubscriptionPlanService
         * @instance
         * @param {rpc.IEmpty} request Empty message or plain object
         * @param {rpc.SubscriptionPlanService.FindAllCallback} callback Node-style callback called with the error, if any, and SubscriptionPlanResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(SubscriptionPlanService.prototype.findAll = function findAll(request, callback) {
            return this.rpcCall(findAll, $root.rpc.Empty, $root.subscription_plan.SubscriptionPlanResponse, request, callback);
        }, "name", { value: "FindAll" });

        /**
         * Calls FindAll.
         * @function findAll
         * @memberof rpc.SubscriptionPlanService
         * @instance
         * @param {rpc.IEmpty} request Empty message or plain object
         * @returns {Promise<subscription_plan.SubscriptionPlanResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rpc.SubscriptionPlanService#findOne}.
         * @memberof rpc.SubscriptionPlanService
         * @typedef FindOneCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {subscription_plan.SubscriptionPlan} [response] SubscriptionPlan
         */

        /**
         * Calls FindOne.
         * @function findOne
         * @memberof rpc.SubscriptionPlanService
         * @instance
         * @param {subscription_plan.ISubscriptionPlanFilter} request SubscriptionPlanFilter message or plain object
         * @param {rpc.SubscriptionPlanService.FindOneCallback} callback Node-style callback called with the error, if any, and SubscriptionPlan
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(SubscriptionPlanService.prototype.findOne = function findOne(request, callback) {
            return this.rpcCall(findOne, $root.subscription_plan.SubscriptionPlanFilter, $root.subscription_plan.SubscriptionPlan, request, callback);
        }, "name", { value: "FindOne" });

        /**
         * Calls FindOne.
         * @function findOne
         * @memberof rpc.SubscriptionPlanService
         * @instance
         * @param {subscription_plan.ISubscriptionPlanFilter} request SubscriptionPlanFilter message or plain object
         * @returns {Promise<subscription_plan.SubscriptionPlan>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rpc.SubscriptionPlanService#create}.
         * @memberof rpc.SubscriptionPlanService
         * @typedef CreateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {subscription_plan.SubscriptionPlan} [response] SubscriptionPlan
         */

        /**
         * Calls Create.
         * @function create
         * @memberof rpc.SubscriptionPlanService
         * @instance
         * @param {subscription_plan.ISubscriptionPlanInput} request SubscriptionPlanInput message or plain object
         * @param {rpc.SubscriptionPlanService.CreateCallback} callback Node-style callback called with the error, if any, and SubscriptionPlan
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(SubscriptionPlanService.prototype.create = function create(request, callback) {
            return this.rpcCall(create, $root.subscription_plan.SubscriptionPlanInput, $root.subscription_plan.SubscriptionPlan, request, callback);
        }, "name", { value: "Create" });

        /**
         * Calls Create.
         * @function create
         * @memberof rpc.SubscriptionPlanService
         * @instance
         * @param {subscription_plan.ISubscriptionPlanInput} request SubscriptionPlanInput message or plain object
         * @returns {Promise<subscription_plan.SubscriptionPlan>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rpc.SubscriptionPlanService#update}.
         * @memberof rpc.SubscriptionPlanService
         * @typedef UpdateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {subscription_plan.UpdateSubscriptionPlanResponse} [response] UpdateSubscriptionPlanResponse
         */

        /**
         * Calls Update.
         * @function update
         * @memberof rpc.SubscriptionPlanService
         * @instance
         * @param {subscription_plan.IUpdateSubscriptionPlanRequest} request UpdateSubscriptionPlanRequest message or plain object
         * @param {rpc.SubscriptionPlanService.UpdateCallback} callback Node-style callback called with the error, if any, and UpdateSubscriptionPlanResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(SubscriptionPlanService.prototype.update = function update(request, callback) {
            return this.rpcCall(update, $root.subscription_plan.UpdateSubscriptionPlanRequest, $root.subscription_plan.UpdateSubscriptionPlanResponse, request, callback);
        }, "name", { value: "Update" });

        /**
         * Calls Update.
         * @function update
         * @memberof rpc.SubscriptionPlanService
         * @instance
         * @param {subscription_plan.IUpdateSubscriptionPlanRequest} request UpdateSubscriptionPlanRequest message or plain object
         * @returns {Promise<subscription_plan.UpdateSubscriptionPlanResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rpc.SubscriptionPlanService#delete_}.
         * @memberof rpc.SubscriptionPlanService
         * @typedef DeleteCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {subscription_plan.DeleteSubscriptionPlanResponse} [response] DeleteSubscriptionPlanResponse
         */

        /**
         * Calls Delete.
         * @function delete
         * @memberof rpc.SubscriptionPlanService
         * @instance
         * @param {subscription_plan.ISubscriptionPlanFilter} request SubscriptionPlanFilter message or plain object
         * @param {rpc.SubscriptionPlanService.DeleteCallback} callback Node-style callback called with the error, if any, and DeleteSubscriptionPlanResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(SubscriptionPlanService.prototype["delete"] = function delete_(request, callback) {
            return this.rpcCall(delete_, $root.subscription_plan.SubscriptionPlanFilter, $root.subscription_plan.DeleteSubscriptionPlanResponse, request, callback);
        }, "name", { value: "Delete" });

        /**
         * Calls Delete.
         * @function delete
         * @memberof rpc.SubscriptionPlanService
         * @instance
         * @param {subscription_plan.ISubscriptionPlanFilter} request SubscriptionPlanFilter message or plain object
         * @returns {Promise<subscription_plan.DeleteSubscriptionPlanResponse>} Promise
         * @variation 2
         */

        return SubscriptionPlanService;
    })();

    rpc.UserService = (function() {

        /**
         * Constructs a new UserService service.
         * @memberof rpc
         * @classdesc Represents a UserService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function UserService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (UserService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = UserService;

        /**
         * Creates new UserService service using the specified rpc implementation.
         * @function create
         * @memberof rpc.UserService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {UserService} RPC service. Useful where requests and/or responses are streamed.
         */
        UserService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link rpc.UserService#findAll}.
         * @memberof rpc.UserService
         * @typedef FindAllCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.UserResponse} [response] UserResponse
         */

        /**
         * Calls FindAll.
         * @function findAll
         * @memberof rpc.UserService
         * @instance
         * @param {rpc.IEmpty} request Empty message or plain object
         * @param {rpc.UserService.FindAllCallback} callback Node-style callback called with the error, if any, and UserResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.findAll = function findAll(request, callback) {
            return this.rpcCall(findAll, $root.rpc.Empty, $root.user.UserResponse, request, callback);
        }, "name", { value: "FindAll" });

        /**
         * Calls FindAll.
         * @function findAll
         * @memberof rpc.UserService
         * @instance
         * @param {rpc.IEmpty} request Empty message or plain object
         * @returns {Promise<user.UserResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rpc.UserService#findOne}.
         * @memberof rpc.UserService
         * @typedef FindOneCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.User} [response] User
         */

        /**
         * Calls FindOne.
         * @function findOne
         * @memberof rpc.UserService
         * @instance
         * @param {user.IUserFilter} request UserFilter message or plain object
         * @param {rpc.UserService.FindOneCallback} callback Node-style callback called with the error, if any, and User
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.findOne = function findOne(request, callback) {
            return this.rpcCall(findOne, $root.user.UserFilter, $root.user.User, request, callback);
        }, "name", { value: "FindOne" });

        /**
         * Calls FindOne.
         * @function findOne
         * @memberof rpc.UserService
         * @instance
         * @param {user.IUserFilter} request UserFilter message or plain object
         * @returns {Promise<user.User>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rpc.UserService#create}.
         * @memberof rpc.UserService
         * @typedef CreateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.User} [response] User
         */

        /**
         * Calls Create.
         * @function create
         * @memberof rpc.UserService
         * @instance
         * @param {user.IUserInput} request UserInput message or plain object
         * @param {rpc.UserService.CreateCallback} callback Node-style callback called with the error, if any, and User
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.create = function create(request, callback) {
            return this.rpcCall(create, $root.user.UserInput, $root.user.User, request, callback);
        }, "name", { value: "Create" });

        /**
         * Calls Create.
         * @function create
         * @memberof rpc.UserService
         * @instance
         * @param {user.IUserInput} request UserInput message or plain object
         * @returns {Promise<user.User>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rpc.UserService#update}.
         * @memberof rpc.UserService
         * @typedef UpdateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.UpdateUserResponse} [response] UpdateUserResponse
         */

        /**
         * Calls Update.
         * @function update
         * @memberof rpc.UserService
         * @instance
         * @param {user.IUpdateUserRequest} request UpdateUserRequest message or plain object
         * @param {rpc.UserService.UpdateCallback} callback Node-style callback called with the error, if any, and UpdateUserResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.update = function update(request, callback) {
            return this.rpcCall(update, $root.user.UpdateUserRequest, $root.user.UpdateUserResponse, request, callback);
        }, "name", { value: "Update" });

        /**
         * Calls Update.
         * @function update
         * @memberof rpc.UserService
         * @instance
         * @param {user.IUpdateUserRequest} request UpdateUserRequest message or plain object
         * @returns {Promise<user.UpdateUserResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rpc.UserService#delete_}.
         * @memberof rpc.UserService
         * @typedef DeleteCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {user.DeleteUserResponse} [response] DeleteUserResponse
         */

        /**
         * Calls Delete.
         * @function delete
         * @memberof rpc.UserService
         * @instance
         * @param {user.IUserFilter} request UserFilter message or plain object
         * @param {rpc.UserService.DeleteCallback} callback Node-style callback called with the error, if any, and DeleteUserResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype["delete"] = function delete_(request, callback) {
            return this.rpcCall(delete_, $root.user.UserFilter, $root.user.DeleteUserResponse, request, callback);
        }, "name", { value: "Delete" });

        /**
         * Calls Delete.
         * @function delete
         * @memberof rpc.UserService
         * @instance
         * @param {user.IUserFilter} request UserFilter message or plain object
         * @returns {Promise<user.DeleteUserResponse>} Promise
         * @variation 2
         */

        return UserService;
    })();

    rpc.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof rpc
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof rpc
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {rpc.IEmpty=} [properties] Properties to set
         */
        function Empty(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Empty instance using the specified properties.
         * @function create
         * @memberof rpc.Empty
         * @static
         * @param {rpc.IEmpty=} [properties] Properties to set
         * @returns {rpc.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link rpc.Empty.verify|verify} messages.
         * @function encode
         * @memberof rpc.Empty
         * @static
         * @param {rpc.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link rpc.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.Empty
         * @static
         * @param {rpc.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.Empty();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Empty message.
         * @function verify
         * @memberof rpc.Empty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.Empty)
                return object;
            return new $root.rpc.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.Empty
         * @static
         * @param {rpc.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof rpc.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Empty;
    })();

    return rpc;
})();

$root.subscription_plan = (function() {

    /**
     * Namespace subscription_plan.
     * @exports subscription_plan
     * @namespace
     */
    var subscription_plan = {};

    subscription_plan.SubscriptionPlanInput = (function() {

        /**
         * Properties of a SubscriptionPlanInput.
         * @memberof subscription_plan
         * @interface ISubscriptionPlanInput
         * @property {string|null} [name] SubscriptionPlanInput name
         * @property {string|null} [code] SubscriptionPlanInput code
         * @property {string|null} [description] SubscriptionPlanInput description
         * @property {number|null} [price] SubscriptionPlanInput price
         * @property {number|null} [extra_fee] SubscriptionPlanInput extra_fee
         * @property {number|null} [invoice_period] SubscriptionPlanInput invoice_period
         * @property {subscription_plan.SubscriptionPlanInput.SubscriptionDuration|null} [invoice_duration] SubscriptionPlanInput invoice_duration
         * @property {number|null} [trail_period] SubscriptionPlanInput trail_period
         * @property {subscription_plan.SubscriptionPlanInput.SubscriptionDuration|null} [trail_duration] SubscriptionPlanInput trail_duration
         */

        /**
         * Constructs a new SubscriptionPlanInput.
         * @memberof subscription_plan
         * @classdesc Represents a SubscriptionPlanInput.
         * @implements ISubscriptionPlanInput
         * @constructor
         * @param {subscription_plan.ISubscriptionPlanInput=} [properties] Properties to set
         */
        function SubscriptionPlanInput(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubscriptionPlanInput name.
         * @member {string} name
         * @memberof subscription_plan.SubscriptionPlanInput
         * @instance
         */
        SubscriptionPlanInput.prototype.name = "";

        /**
         * SubscriptionPlanInput code.
         * @member {string} code
         * @memberof subscription_plan.SubscriptionPlanInput
         * @instance
         */
        SubscriptionPlanInput.prototype.code = "";

        /**
         * SubscriptionPlanInput description.
         * @member {string} description
         * @memberof subscription_plan.SubscriptionPlanInput
         * @instance
         */
        SubscriptionPlanInput.prototype.description = "";

        /**
         * SubscriptionPlanInput price.
         * @member {number} price
         * @memberof subscription_plan.SubscriptionPlanInput
         * @instance
         */
        SubscriptionPlanInput.prototype.price = 0;

        /**
         * SubscriptionPlanInput extra_fee.
         * @member {number} extra_fee
         * @memberof subscription_plan.SubscriptionPlanInput
         * @instance
         */
        SubscriptionPlanInput.prototype.extra_fee = 0;

        /**
         * SubscriptionPlanInput invoice_period.
         * @member {number} invoice_period
         * @memberof subscription_plan.SubscriptionPlanInput
         * @instance
         */
        SubscriptionPlanInput.prototype.invoice_period = 0;

        /**
         * SubscriptionPlanInput invoice_duration.
         * @member {subscription_plan.SubscriptionPlanInput.SubscriptionDuration} invoice_duration
         * @memberof subscription_plan.SubscriptionPlanInput
         * @instance
         */
        SubscriptionPlanInput.prototype.invoice_duration = 0;

        /**
         * SubscriptionPlanInput trail_period.
         * @member {number} trail_period
         * @memberof subscription_plan.SubscriptionPlanInput
         * @instance
         */
        SubscriptionPlanInput.prototype.trail_period = 0;

        /**
         * SubscriptionPlanInput trail_duration.
         * @member {subscription_plan.SubscriptionPlanInput.SubscriptionDuration} trail_duration
         * @memberof subscription_plan.SubscriptionPlanInput
         * @instance
         */
        SubscriptionPlanInput.prototype.trail_duration = 0;

        /**
         * Creates a new SubscriptionPlanInput instance using the specified properties.
         * @function create
         * @memberof subscription_plan.SubscriptionPlanInput
         * @static
         * @param {subscription_plan.ISubscriptionPlanInput=} [properties] Properties to set
         * @returns {subscription_plan.SubscriptionPlanInput} SubscriptionPlanInput instance
         */
        SubscriptionPlanInput.create = function create(properties) {
            return new SubscriptionPlanInput(properties);
        };

        /**
         * Encodes the specified SubscriptionPlanInput message. Does not implicitly {@link subscription_plan.SubscriptionPlanInput.verify|verify} messages.
         * @function encode
         * @memberof subscription_plan.SubscriptionPlanInput
         * @static
         * @param {subscription_plan.ISubscriptionPlanInput} message SubscriptionPlanInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscriptionPlanInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.price);
            if (message.extra_fee != null && Object.hasOwnProperty.call(message, "extra_fee"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.extra_fee);
            if (message.invoice_period != null && Object.hasOwnProperty.call(message, "invoice_period"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.invoice_period);
            if (message.invoice_duration != null && Object.hasOwnProperty.call(message, "invoice_duration"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.invoice_duration);
            if (message.trail_period != null && Object.hasOwnProperty.call(message, "trail_period"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.trail_period);
            if (message.trail_duration != null && Object.hasOwnProperty.call(message, "trail_duration"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.trail_duration);
            return writer;
        };

        /**
         * Encodes the specified SubscriptionPlanInput message, length delimited. Does not implicitly {@link subscription_plan.SubscriptionPlanInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof subscription_plan.SubscriptionPlanInput
         * @static
         * @param {subscription_plan.ISubscriptionPlanInput} message SubscriptionPlanInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscriptionPlanInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubscriptionPlanInput message from the specified reader or buffer.
         * @function decode
         * @memberof subscription_plan.SubscriptionPlanInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {subscription_plan.SubscriptionPlanInput} SubscriptionPlanInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscriptionPlanInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.subscription_plan.SubscriptionPlanInput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.code = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.price = reader.int32();
                    break;
                case 5:
                    message.extra_fee = reader.int32();
                    break;
                case 6:
                    message.invoice_period = reader.int32();
                    break;
                case 7:
                    message.invoice_duration = reader.int32();
                    break;
                case 8:
                    message.trail_period = reader.int32();
                    break;
                case 9:
                    message.trail_duration = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SubscriptionPlanInput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof subscription_plan.SubscriptionPlanInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {subscription_plan.SubscriptionPlanInput} SubscriptionPlanInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscriptionPlanInput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubscriptionPlanInput message.
         * @function verify
         * @memberof subscription_plan.SubscriptionPlanInput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubscriptionPlanInput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (!$util.isInteger(message.price))
                    return "price: integer expected";
            if (message.extra_fee != null && message.hasOwnProperty("extra_fee"))
                if (!$util.isInteger(message.extra_fee))
                    return "extra_fee: integer expected";
            if (message.invoice_period != null && message.hasOwnProperty("invoice_period"))
                if (!$util.isInteger(message.invoice_period))
                    return "invoice_period: integer expected";
            if (message.invoice_duration != null && message.hasOwnProperty("invoice_duration"))
                switch (message.invoice_duration) {
                default:
                    return "invoice_duration: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.trail_period != null && message.hasOwnProperty("trail_period"))
                if (!$util.isInteger(message.trail_period))
                    return "trail_period: integer expected";
            if (message.trail_duration != null && message.hasOwnProperty("trail_duration"))
                switch (message.trail_duration) {
                default:
                    return "trail_duration: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a SubscriptionPlanInput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof subscription_plan.SubscriptionPlanInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {subscription_plan.SubscriptionPlanInput} SubscriptionPlanInput
         */
        SubscriptionPlanInput.fromObject = function fromObject(object) {
            if (object instanceof $root.subscription_plan.SubscriptionPlanInput)
                return object;
            var message = new $root.subscription_plan.SubscriptionPlanInput();
            if (object.name != null)
                message.name = String(object.name);
            if (object.code != null)
                message.code = String(object.code);
            if (object.description != null)
                message.description = String(object.description);
            if (object.price != null)
                message.price = object.price | 0;
            if (object.extra_fee != null)
                message.extra_fee = object.extra_fee | 0;
            if (object.invoice_period != null)
                message.invoice_period = object.invoice_period | 0;
            switch (object.invoice_duration) {
            case "DAY":
            case 0:
                message.invoice_duration = 0;
                break;
            case "WEEK":
            case 1:
                message.invoice_duration = 1;
                break;
            case "MONTH":
            case 2:
                message.invoice_duration = 2;
                break;
            case "YEAR":
            case 3:
                message.invoice_duration = 3;
                break;
            }
            if (object.trail_period != null)
                message.trail_period = object.trail_period | 0;
            switch (object.trail_duration) {
            case "DAY":
            case 0:
                message.trail_duration = 0;
                break;
            case "WEEK":
            case 1:
                message.trail_duration = 1;
                break;
            case "MONTH":
            case 2:
                message.trail_duration = 2;
                break;
            case "YEAR":
            case 3:
                message.trail_duration = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a SubscriptionPlanInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof subscription_plan.SubscriptionPlanInput
         * @static
         * @param {subscription_plan.SubscriptionPlanInput} message SubscriptionPlanInput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubscriptionPlanInput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.code = "";
                object.description = "";
                object.price = 0;
                object.extra_fee = 0;
                object.invoice_period = 0;
                object.invoice_duration = options.enums === String ? "DAY" : 0;
                object.trail_period = 0;
                object.trail_duration = options.enums === String ? "DAY" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = message.price;
            if (message.extra_fee != null && message.hasOwnProperty("extra_fee"))
                object.extra_fee = message.extra_fee;
            if (message.invoice_period != null && message.hasOwnProperty("invoice_period"))
                object.invoice_period = message.invoice_period;
            if (message.invoice_duration != null && message.hasOwnProperty("invoice_duration"))
                object.invoice_duration = options.enums === String ? $root.subscription_plan.SubscriptionPlanInput.SubscriptionDuration[message.invoice_duration] : message.invoice_duration;
            if (message.trail_period != null && message.hasOwnProperty("trail_period"))
                object.trail_period = message.trail_period;
            if (message.trail_duration != null && message.hasOwnProperty("trail_duration"))
                object.trail_duration = options.enums === String ? $root.subscription_plan.SubscriptionPlanInput.SubscriptionDuration[message.trail_duration] : message.trail_duration;
            return object;
        };

        /**
         * Converts this SubscriptionPlanInput to JSON.
         * @function toJSON
         * @memberof subscription_plan.SubscriptionPlanInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubscriptionPlanInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * SubscriptionDuration enum.
         * @name subscription_plan.SubscriptionPlanInput.SubscriptionDuration
         * @enum {number}
         * @property {number} DAY=0 DAY value
         * @property {number} WEEK=1 WEEK value
         * @property {number} MONTH=2 MONTH value
         * @property {number} YEAR=3 YEAR value
         */
        SubscriptionPlanInput.SubscriptionDuration = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DAY"] = 0;
            values[valuesById[1] = "WEEK"] = 1;
            values[valuesById[2] = "MONTH"] = 2;
            values[valuesById[3] = "YEAR"] = 3;
            return values;
        })();

        return SubscriptionPlanInput;
    })();

    subscription_plan.SubscriptionPlan = (function() {

        /**
         * Properties of a SubscriptionPlan.
         * @memberof subscription_plan
         * @interface ISubscriptionPlan
         * @property {string|null} [id] SubscriptionPlan id
         * @property {string|null} [name] SubscriptionPlan name
         * @property {string|null} [code] SubscriptionPlan code
         * @property {string|null} [slug] SubscriptionPlan slug
         * @property {string|null} [description] SubscriptionPlan description
         * @property {number|null} [price] SubscriptionPlan price
         * @property {number|null} [extra_fee] SubscriptionPlan extra_fee
         * @property {number|null} [invoice_period] SubscriptionPlan invoice_period
         * @property {string|null} [invoice_duration] SubscriptionPlan invoice_duration
         * @property {number|null} [trail_period] SubscriptionPlan trail_period
         * @property {string|null} [trail_duration] SubscriptionPlan trail_duration
         */

        /**
         * Constructs a new SubscriptionPlan.
         * @memberof subscription_plan
         * @classdesc Represents a SubscriptionPlan.
         * @implements ISubscriptionPlan
         * @constructor
         * @param {subscription_plan.ISubscriptionPlan=} [properties] Properties to set
         */
        function SubscriptionPlan(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubscriptionPlan id.
         * @member {string} id
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.id = "";

        /**
         * SubscriptionPlan name.
         * @member {string} name
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.name = "";

        /**
         * SubscriptionPlan code.
         * @member {string} code
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.code = "";

        /**
         * SubscriptionPlan slug.
         * @member {string} slug
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.slug = "";

        /**
         * SubscriptionPlan description.
         * @member {string} description
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.description = "";

        /**
         * SubscriptionPlan price.
         * @member {number} price
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.price = 0;

        /**
         * SubscriptionPlan extra_fee.
         * @member {number} extra_fee
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.extra_fee = 0;

        /**
         * SubscriptionPlan invoice_period.
         * @member {number} invoice_period
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.invoice_period = 0;

        /**
         * SubscriptionPlan invoice_duration.
         * @member {string} invoice_duration
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.invoice_duration = "";

        /**
         * SubscriptionPlan trail_period.
         * @member {number} trail_period
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.trail_period = 0;

        /**
         * SubscriptionPlan trail_duration.
         * @member {string} trail_duration
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         */
        SubscriptionPlan.prototype.trail_duration = "";

        /**
         * Creates a new SubscriptionPlan instance using the specified properties.
         * @function create
         * @memberof subscription_plan.SubscriptionPlan
         * @static
         * @param {subscription_plan.ISubscriptionPlan=} [properties] Properties to set
         * @returns {subscription_plan.SubscriptionPlan} SubscriptionPlan instance
         */
        SubscriptionPlan.create = function create(properties) {
            return new SubscriptionPlan(properties);
        };

        /**
         * Encodes the specified SubscriptionPlan message. Does not implicitly {@link subscription_plan.SubscriptionPlan.verify|verify} messages.
         * @function encode
         * @memberof subscription_plan.SubscriptionPlan
         * @static
         * @param {subscription_plan.ISubscriptionPlan} message SubscriptionPlan message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscriptionPlan.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.code);
            if (message.slug != null && Object.hasOwnProperty.call(message, "slug"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.slug);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.price);
            if (message.extra_fee != null && Object.hasOwnProperty.call(message, "extra_fee"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.extra_fee);
            if (message.invoice_period != null && Object.hasOwnProperty.call(message, "invoice_period"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.invoice_period);
            if (message.invoice_duration != null && Object.hasOwnProperty.call(message, "invoice_duration"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.invoice_duration);
            if (message.trail_period != null && Object.hasOwnProperty.call(message, "trail_period"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.trail_period);
            if (message.trail_duration != null && Object.hasOwnProperty.call(message, "trail_duration"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.trail_duration);
            return writer;
        };

        /**
         * Encodes the specified SubscriptionPlan message, length delimited. Does not implicitly {@link subscription_plan.SubscriptionPlan.verify|verify} messages.
         * @function encodeDelimited
         * @memberof subscription_plan.SubscriptionPlan
         * @static
         * @param {subscription_plan.ISubscriptionPlan} message SubscriptionPlan message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscriptionPlan.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubscriptionPlan message from the specified reader or buffer.
         * @function decode
         * @memberof subscription_plan.SubscriptionPlan
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {subscription_plan.SubscriptionPlan} SubscriptionPlan
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscriptionPlan.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.subscription_plan.SubscriptionPlan();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.code = reader.string();
                    break;
                case 4:
                    message.slug = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.price = reader.int32();
                    break;
                case 7:
                    message.extra_fee = reader.int32();
                    break;
                case 8:
                    message.invoice_period = reader.int32();
                    break;
                case 9:
                    message.invoice_duration = reader.string();
                    break;
                case 10:
                    message.trail_period = reader.int32();
                    break;
                case 11:
                    message.trail_duration = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SubscriptionPlan message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof subscription_plan.SubscriptionPlan
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {subscription_plan.SubscriptionPlan} SubscriptionPlan
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscriptionPlan.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubscriptionPlan message.
         * @function verify
         * @memberof subscription_plan.SubscriptionPlan
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubscriptionPlan.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.slug != null && message.hasOwnProperty("slug"))
                if (!$util.isString(message.slug))
                    return "slug: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (!$util.isInteger(message.price))
                    return "price: integer expected";
            if (message.extra_fee != null && message.hasOwnProperty("extra_fee"))
                if (!$util.isInteger(message.extra_fee))
                    return "extra_fee: integer expected";
            if (message.invoice_period != null && message.hasOwnProperty("invoice_period"))
                if (!$util.isInteger(message.invoice_period))
                    return "invoice_period: integer expected";
            if (message.invoice_duration != null && message.hasOwnProperty("invoice_duration"))
                if (!$util.isString(message.invoice_duration))
                    return "invoice_duration: string expected";
            if (message.trail_period != null && message.hasOwnProperty("trail_period"))
                if (!$util.isInteger(message.trail_period))
                    return "trail_period: integer expected";
            if (message.trail_duration != null && message.hasOwnProperty("trail_duration"))
                if (!$util.isString(message.trail_duration))
                    return "trail_duration: string expected";
            return null;
        };

        /**
         * Creates a SubscriptionPlan message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof subscription_plan.SubscriptionPlan
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {subscription_plan.SubscriptionPlan} SubscriptionPlan
         */
        SubscriptionPlan.fromObject = function fromObject(object) {
            if (object instanceof $root.subscription_plan.SubscriptionPlan)
                return object;
            var message = new $root.subscription_plan.SubscriptionPlan();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.code != null)
                message.code = String(object.code);
            if (object.slug != null)
                message.slug = String(object.slug);
            if (object.description != null)
                message.description = String(object.description);
            if (object.price != null)
                message.price = object.price | 0;
            if (object.extra_fee != null)
                message.extra_fee = object.extra_fee | 0;
            if (object.invoice_period != null)
                message.invoice_period = object.invoice_period | 0;
            if (object.invoice_duration != null)
                message.invoice_duration = String(object.invoice_duration);
            if (object.trail_period != null)
                message.trail_period = object.trail_period | 0;
            if (object.trail_duration != null)
                message.trail_duration = String(object.trail_duration);
            return message;
        };

        /**
         * Creates a plain object from a SubscriptionPlan message. Also converts values to other types if specified.
         * @function toObject
         * @memberof subscription_plan.SubscriptionPlan
         * @static
         * @param {subscription_plan.SubscriptionPlan} message SubscriptionPlan
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubscriptionPlan.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.code = "";
                object.slug = "";
                object.description = "";
                object.price = 0;
                object.extra_fee = 0;
                object.invoice_period = 0;
                object.invoice_duration = "";
                object.trail_period = 0;
                object.trail_duration = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.slug != null && message.hasOwnProperty("slug"))
                object.slug = message.slug;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = message.price;
            if (message.extra_fee != null && message.hasOwnProperty("extra_fee"))
                object.extra_fee = message.extra_fee;
            if (message.invoice_period != null && message.hasOwnProperty("invoice_period"))
                object.invoice_period = message.invoice_period;
            if (message.invoice_duration != null && message.hasOwnProperty("invoice_duration"))
                object.invoice_duration = message.invoice_duration;
            if (message.trail_period != null && message.hasOwnProperty("trail_period"))
                object.trail_period = message.trail_period;
            if (message.trail_duration != null && message.hasOwnProperty("trail_duration"))
                object.trail_duration = message.trail_duration;
            return object;
        };

        /**
         * Converts this SubscriptionPlan to JSON.
         * @function toJSON
         * @memberof subscription_plan.SubscriptionPlan
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubscriptionPlan.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SubscriptionPlan;
    })();

    subscription_plan.DeleteSubscriptionPlanResponse = (function() {

        /**
         * Properties of a DeleteSubscriptionPlanResponse.
         * @memberof subscription_plan
         * @interface IDeleteSubscriptionPlanResponse
         * @property {number|null} [modified] DeleteSubscriptionPlanResponse modified
         * @property {Array.<subscription_plan.ISubscriptionPlan>|null} [edges] DeleteSubscriptionPlanResponse edges
         */

        /**
         * Constructs a new DeleteSubscriptionPlanResponse.
         * @memberof subscription_plan
         * @classdesc Represents a DeleteSubscriptionPlanResponse.
         * @implements IDeleteSubscriptionPlanResponse
         * @constructor
         * @param {subscription_plan.IDeleteSubscriptionPlanResponse=} [properties] Properties to set
         */
        function DeleteSubscriptionPlanResponse(properties) {
            this.edges = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteSubscriptionPlanResponse modified.
         * @member {number} modified
         * @memberof subscription_plan.DeleteSubscriptionPlanResponse
         * @instance
         */
        DeleteSubscriptionPlanResponse.prototype.modified = 0;

        /**
         * DeleteSubscriptionPlanResponse edges.
         * @member {Array.<subscription_plan.ISubscriptionPlan>} edges
         * @memberof subscription_plan.DeleteSubscriptionPlanResponse
         * @instance
         */
        DeleteSubscriptionPlanResponse.prototype.edges = $util.emptyArray;

        /**
         * Creates a new DeleteSubscriptionPlanResponse instance using the specified properties.
         * @function create
         * @memberof subscription_plan.DeleteSubscriptionPlanResponse
         * @static
         * @param {subscription_plan.IDeleteSubscriptionPlanResponse=} [properties] Properties to set
         * @returns {subscription_plan.DeleteSubscriptionPlanResponse} DeleteSubscriptionPlanResponse instance
         */
        DeleteSubscriptionPlanResponse.create = function create(properties) {
            return new DeleteSubscriptionPlanResponse(properties);
        };

        /**
         * Encodes the specified DeleteSubscriptionPlanResponse message. Does not implicitly {@link subscription_plan.DeleteSubscriptionPlanResponse.verify|verify} messages.
         * @function encode
         * @memberof subscription_plan.DeleteSubscriptionPlanResponse
         * @static
         * @param {subscription_plan.IDeleteSubscriptionPlanResponse} message DeleteSubscriptionPlanResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteSubscriptionPlanResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.modified != null && Object.hasOwnProperty.call(message, "modified"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.modified);
            if (message.edges != null && message.edges.length)
                for (var i = 0; i < message.edges.length; ++i)
                    $root.subscription_plan.SubscriptionPlan.encode(message.edges[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DeleteSubscriptionPlanResponse message, length delimited. Does not implicitly {@link subscription_plan.DeleteSubscriptionPlanResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof subscription_plan.DeleteSubscriptionPlanResponse
         * @static
         * @param {subscription_plan.IDeleteSubscriptionPlanResponse} message DeleteSubscriptionPlanResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteSubscriptionPlanResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteSubscriptionPlanResponse message from the specified reader or buffer.
         * @function decode
         * @memberof subscription_plan.DeleteSubscriptionPlanResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {subscription_plan.DeleteSubscriptionPlanResponse} DeleteSubscriptionPlanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteSubscriptionPlanResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.subscription_plan.DeleteSubscriptionPlanResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.modified = reader.int32();
                    break;
                case 2:
                    if (!(message.edges && message.edges.length))
                        message.edges = [];
                    message.edges.push($root.subscription_plan.SubscriptionPlan.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteSubscriptionPlanResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof subscription_plan.DeleteSubscriptionPlanResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {subscription_plan.DeleteSubscriptionPlanResponse} DeleteSubscriptionPlanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteSubscriptionPlanResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteSubscriptionPlanResponse message.
         * @function verify
         * @memberof subscription_plan.DeleteSubscriptionPlanResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteSubscriptionPlanResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.modified != null && message.hasOwnProperty("modified"))
                if (!$util.isInteger(message.modified))
                    return "modified: integer expected";
            if (message.edges != null && message.hasOwnProperty("edges")) {
                if (!Array.isArray(message.edges))
                    return "edges: array expected";
                for (var i = 0; i < message.edges.length; ++i) {
                    var error = $root.subscription_plan.SubscriptionPlan.verify(message.edges[i]);
                    if (error)
                        return "edges." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DeleteSubscriptionPlanResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof subscription_plan.DeleteSubscriptionPlanResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {subscription_plan.DeleteSubscriptionPlanResponse} DeleteSubscriptionPlanResponse
         */
        DeleteSubscriptionPlanResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.subscription_plan.DeleteSubscriptionPlanResponse)
                return object;
            var message = new $root.subscription_plan.DeleteSubscriptionPlanResponse();
            if (object.modified != null)
                message.modified = object.modified | 0;
            if (object.edges) {
                if (!Array.isArray(object.edges))
                    throw TypeError(".subscription_plan.DeleteSubscriptionPlanResponse.edges: array expected");
                message.edges = [];
                for (var i = 0; i < object.edges.length; ++i) {
                    if (typeof object.edges[i] !== "object")
                        throw TypeError(".subscription_plan.DeleteSubscriptionPlanResponse.edges: object expected");
                    message.edges[i] = $root.subscription_plan.SubscriptionPlan.fromObject(object.edges[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DeleteSubscriptionPlanResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof subscription_plan.DeleteSubscriptionPlanResponse
         * @static
         * @param {subscription_plan.DeleteSubscriptionPlanResponse} message DeleteSubscriptionPlanResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteSubscriptionPlanResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.edges = [];
            if (options.defaults)
                object.modified = 0;
            if (message.modified != null && message.hasOwnProperty("modified"))
                object.modified = message.modified;
            if (message.edges && message.edges.length) {
                object.edges = [];
                for (var j = 0; j < message.edges.length; ++j)
                    object.edges[j] = $root.subscription_plan.SubscriptionPlan.toObject(message.edges[j], options);
            }
            return object;
        };

        /**
         * Converts this DeleteSubscriptionPlanResponse to JSON.
         * @function toJSON
         * @memberof subscription_plan.DeleteSubscriptionPlanResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteSubscriptionPlanResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteSubscriptionPlanResponse;
    })();

    subscription_plan.UpdateSubscriptionPlanRequest = (function() {

        /**
         * Properties of an UpdateSubscriptionPlanRequest.
         * @memberof subscription_plan
         * @interface IUpdateSubscriptionPlanRequest
         * @property {subscription_plan.ISubscriptionPlanInput|null} [payload] UpdateSubscriptionPlanRequest payload
         * @property {subscription_plan.ISubscriptionPlanFilter|null} [where] UpdateSubscriptionPlanRequest where
         */

        /**
         * Constructs a new UpdateSubscriptionPlanRequest.
         * @memberof subscription_plan
         * @classdesc Represents an UpdateSubscriptionPlanRequest.
         * @implements IUpdateSubscriptionPlanRequest
         * @constructor
         * @param {subscription_plan.IUpdateSubscriptionPlanRequest=} [properties] Properties to set
         */
        function UpdateSubscriptionPlanRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateSubscriptionPlanRequest payload.
         * @member {subscription_plan.ISubscriptionPlanInput|null|undefined} payload
         * @memberof subscription_plan.UpdateSubscriptionPlanRequest
         * @instance
         */
        UpdateSubscriptionPlanRequest.prototype.payload = null;

        /**
         * UpdateSubscriptionPlanRequest where.
         * @member {subscription_plan.ISubscriptionPlanFilter|null|undefined} where
         * @memberof subscription_plan.UpdateSubscriptionPlanRequest
         * @instance
         */
        UpdateSubscriptionPlanRequest.prototype.where = null;

        /**
         * Creates a new UpdateSubscriptionPlanRequest instance using the specified properties.
         * @function create
         * @memberof subscription_plan.UpdateSubscriptionPlanRequest
         * @static
         * @param {subscription_plan.IUpdateSubscriptionPlanRequest=} [properties] Properties to set
         * @returns {subscription_plan.UpdateSubscriptionPlanRequest} UpdateSubscriptionPlanRequest instance
         */
        UpdateSubscriptionPlanRequest.create = function create(properties) {
            return new UpdateSubscriptionPlanRequest(properties);
        };

        /**
         * Encodes the specified UpdateSubscriptionPlanRequest message. Does not implicitly {@link subscription_plan.UpdateSubscriptionPlanRequest.verify|verify} messages.
         * @function encode
         * @memberof subscription_plan.UpdateSubscriptionPlanRequest
         * @static
         * @param {subscription_plan.IUpdateSubscriptionPlanRequest} message UpdateSubscriptionPlanRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateSubscriptionPlanRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                $root.subscription_plan.SubscriptionPlanInput.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.where != null && Object.hasOwnProperty.call(message, "where"))
                $root.subscription_plan.SubscriptionPlanFilter.encode(message.where, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateSubscriptionPlanRequest message, length delimited. Does not implicitly {@link subscription_plan.UpdateSubscriptionPlanRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof subscription_plan.UpdateSubscriptionPlanRequest
         * @static
         * @param {subscription_plan.IUpdateSubscriptionPlanRequest} message UpdateSubscriptionPlanRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateSubscriptionPlanRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateSubscriptionPlanRequest message from the specified reader or buffer.
         * @function decode
         * @memberof subscription_plan.UpdateSubscriptionPlanRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {subscription_plan.UpdateSubscriptionPlanRequest} UpdateSubscriptionPlanRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateSubscriptionPlanRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.subscription_plan.UpdateSubscriptionPlanRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.payload = $root.subscription_plan.SubscriptionPlanInput.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.where = $root.subscription_plan.SubscriptionPlanFilter.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateSubscriptionPlanRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof subscription_plan.UpdateSubscriptionPlanRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {subscription_plan.UpdateSubscriptionPlanRequest} UpdateSubscriptionPlanRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateSubscriptionPlanRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateSubscriptionPlanRequest message.
         * @function verify
         * @memberof subscription_plan.UpdateSubscriptionPlanRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateSubscriptionPlanRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.payload != null && message.hasOwnProperty("payload")) {
                var error = $root.subscription_plan.SubscriptionPlanInput.verify(message.payload);
                if (error)
                    return "payload." + error;
            }
            if (message.where != null && message.hasOwnProperty("where")) {
                var error = $root.subscription_plan.SubscriptionPlanFilter.verify(message.where);
                if (error)
                    return "where." + error;
            }
            return null;
        };

        /**
         * Creates an UpdateSubscriptionPlanRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof subscription_plan.UpdateSubscriptionPlanRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {subscription_plan.UpdateSubscriptionPlanRequest} UpdateSubscriptionPlanRequest
         */
        UpdateSubscriptionPlanRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.subscription_plan.UpdateSubscriptionPlanRequest)
                return object;
            var message = new $root.subscription_plan.UpdateSubscriptionPlanRequest();
            if (object.payload != null) {
                if (typeof object.payload !== "object")
                    throw TypeError(".subscription_plan.UpdateSubscriptionPlanRequest.payload: object expected");
                message.payload = $root.subscription_plan.SubscriptionPlanInput.fromObject(object.payload);
            }
            if (object.where != null) {
                if (typeof object.where !== "object")
                    throw TypeError(".subscription_plan.UpdateSubscriptionPlanRequest.where: object expected");
                message.where = $root.subscription_plan.SubscriptionPlanFilter.fromObject(object.where);
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateSubscriptionPlanRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof subscription_plan.UpdateSubscriptionPlanRequest
         * @static
         * @param {subscription_plan.UpdateSubscriptionPlanRequest} message UpdateSubscriptionPlanRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateSubscriptionPlanRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.payload = null;
                object.where = null;
            }
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = $root.subscription_plan.SubscriptionPlanInput.toObject(message.payload, options);
            if (message.where != null && message.hasOwnProperty("where"))
                object.where = $root.subscription_plan.SubscriptionPlanFilter.toObject(message.where, options);
            return object;
        };

        /**
         * Converts this UpdateSubscriptionPlanRequest to JSON.
         * @function toJSON
         * @memberof subscription_plan.UpdateSubscriptionPlanRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateSubscriptionPlanRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateSubscriptionPlanRequest;
    })();

    subscription_plan.UpdateSubscriptionPlanResponse = (function() {

        /**
         * Properties of an UpdateSubscriptionPlanResponse.
         * @memberof subscription_plan
         * @interface IUpdateSubscriptionPlanResponse
         * @property {number|null} [modified] UpdateSubscriptionPlanResponse modified
         * @property {Array.<subscription_plan.ISubscriptionPlan>|null} [edges] UpdateSubscriptionPlanResponse edges
         */

        /**
         * Constructs a new UpdateSubscriptionPlanResponse.
         * @memberof subscription_plan
         * @classdesc Represents an UpdateSubscriptionPlanResponse.
         * @implements IUpdateSubscriptionPlanResponse
         * @constructor
         * @param {subscription_plan.IUpdateSubscriptionPlanResponse=} [properties] Properties to set
         */
        function UpdateSubscriptionPlanResponse(properties) {
            this.edges = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateSubscriptionPlanResponse modified.
         * @member {number} modified
         * @memberof subscription_plan.UpdateSubscriptionPlanResponse
         * @instance
         */
        UpdateSubscriptionPlanResponse.prototype.modified = 0;

        /**
         * UpdateSubscriptionPlanResponse edges.
         * @member {Array.<subscription_plan.ISubscriptionPlan>} edges
         * @memberof subscription_plan.UpdateSubscriptionPlanResponse
         * @instance
         */
        UpdateSubscriptionPlanResponse.prototype.edges = $util.emptyArray;

        /**
         * Creates a new UpdateSubscriptionPlanResponse instance using the specified properties.
         * @function create
         * @memberof subscription_plan.UpdateSubscriptionPlanResponse
         * @static
         * @param {subscription_plan.IUpdateSubscriptionPlanResponse=} [properties] Properties to set
         * @returns {subscription_plan.UpdateSubscriptionPlanResponse} UpdateSubscriptionPlanResponse instance
         */
        UpdateSubscriptionPlanResponse.create = function create(properties) {
            return new UpdateSubscriptionPlanResponse(properties);
        };

        /**
         * Encodes the specified UpdateSubscriptionPlanResponse message. Does not implicitly {@link subscription_plan.UpdateSubscriptionPlanResponse.verify|verify} messages.
         * @function encode
         * @memberof subscription_plan.UpdateSubscriptionPlanResponse
         * @static
         * @param {subscription_plan.IUpdateSubscriptionPlanResponse} message UpdateSubscriptionPlanResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateSubscriptionPlanResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.modified != null && Object.hasOwnProperty.call(message, "modified"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.modified);
            if (message.edges != null && message.edges.length)
                for (var i = 0; i < message.edges.length; ++i)
                    $root.subscription_plan.SubscriptionPlan.encode(message.edges[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateSubscriptionPlanResponse message, length delimited. Does not implicitly {@link subscription_plan.UpdateSubscriptionPlanResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof subscription_plan.UpdateSubscriptionPlanResponse
         * @static
         * @param {subscription_plan.IUpdateSubscriptionPlanResponse} message UpdateSubscriptionPlanResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateSubscriptionPlanResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateSubscriptionPlanResponse message from the specified reader or buffer.
         * @function decode
         * @memberof subscription_plan.UpdateSubscriptionPlanResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {subscription_plan.UpdateSubscriptionPlanResponse} UpdateSubscriptionPlanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateSubscriptionPlanResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.subscription_plan.UpdateSubscriptionPlanResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.modified = reader.int32();
                    break;
                case 2:
                    if (!(message.edges && message.edges.length))
                        message.edges = [];
                    message.edges.push($root.subscription_plan.SubscriptionPlan.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateSubscriptionPlanResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof subscription_plan.UpdateSubscriptionPlanResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {subscription_plan.UpdateSubscriptionPlanResponse} UpdateSubscriptionPlanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateSubscriptionPlanResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateSubscriptionPlanResponse message.
         * @function verify
         * @memberof subscription_plan.UpdateSubscriptionPlanResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateSubscriptionPlanResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.modified != null && message.hasOwnProperty("modified"))
                if (!$util.isInteger(message.modified))
                    return "modified: integer expected";
            if (message.edges != null && message.hasOwnProperty("edges")) {
                if (!Array.isArray(message.edges))
                    return "edges: array expected";
                for (var i = 0; i < message.edges.length; ++i) {
                    var error = $root.subscription_plan.SubscriptionPlan.verify(message.edges[i]);
                    if (error)
                        return "edges." + error;
                }
            }
            return null;
        };

        /**
         * Creates an UpdateSubscriptionPlanResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof subscription_plan.UpdateSubscriptionPlanResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {subscription_plan.UpdateSubscriptionPlanResponse} UpdateSubscriptionPlanResponse
         */
        UpdateSubscriptionPlanResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.subscription_plan.UpdateSubscriptionPlanResponse)
                return object;
            var message = new $root.subscription_plan.UpdateSubscriptionPlanResponse();
            if (object.modified != null)
                message.modified = object.modified | 0;
            if (object.edges) {
                if (!Array.isArray(object.edges))
                    throw TypeError(".subscription_plan.UpdateSubscriptionPlanResponse.edges: array expected");
                message.edges = [];
                for (var i = 0; i < object.edges.length; ++i) {
                    if (typeof object.edges[i] !== "object")
                        throw TypeError(".subscription_plan.UpdateSubscriptionPlanResponse.edges: object expected");
                    message.edges[i] = $root.subscription_plan.SubscriptionPlan.fromObject(object.edges[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateSubscriptionPlanResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof subscription_plan.UpdateSubscriptionPlanResponse
         * @static
         * @param {subscription_plan.UpdateSubscriptionPlanResponse} message UpdateSubscriptionPlanResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateSubscriptionPlanResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.edges = [];
            if (options.defaults)
                object.modified = 0;
            if (message.modified != null && message.hasOwnProperty("modified"))
                object.modified = message.modified;
            if (message.edges && message.edges.length) {
                object.edges = [];
                for (var j = 0; j < message.edges.length; ++j)
                    object.edges[j] = $root.subscription_plan.SubscriptionPlan.toObject(message.edges[j], options);
            }
            return object;
        };

        /**
         * Converts this UpdateSubscriptionPlanResponse to JSON.
         * @function toJSON
         * @memberof subscription_plan.UpdateSubscriptionPlanResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateSubscriptionPlanResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateSubscriptionPlanResponse;
    })();

    subscription_plan.SubscriptionPlanResponse = (function() {

        /**
         * Properties of a SubscriptionPlanResponse.
         * @memberof subscription_plan
         * @interface ISubscriptionPlanResponse
         * @property {number|null} [page_info] SubscriptionPlanResponse page_info
         * @property {Array.<subscription_plan.ISubscriptionPlan>|null} [edges] SubscriptionPlanResponse edges
         */

        /**
         * Constructs a new SubscriptionPlanResponse.
         * @memberof subscription_plan
         * @classdesc Represents a SubscriptionPlanResponse.
         * @implements ISubscriptionPlanResponse
         * @constructor
         * @param {subscription_plan.ISubscriptionPlanResponse=} [properties] Properties to set
         */
        function SubscriptionPlanResponse(properties) {
            this.edges = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubscriptionPlanResponse page_info.
         * @member {number} page_info
         * @memberof subscription_plan.SubscriptionPlanResponse
         * @instance
         */
        SubscriptionPlanResponse.prototype.page_info = 0;

        /**
         * SubscriptionPlanResponse edges.
         * @member {Array.<subscription_plan.ISubscriptionPlan>} edges
         * @memberof subscription_plan.SubscriptionPlanResponse
         * @instance
         */
        SubscriptionPlanResponse.prototype.edges = $util.emptyArray;

        /**
         * Creates a new SubscriptionPlanResponse instance using the specified properties.
         * @function create
         * @memberof subscription_plan.SubscriptionPlanResponse
         * @static
         * @param {subscription_plan.ISubscriptionPlanResponse=} [properties] Properties to set
         * @returns {subscription_plan.SubscriptionPlanResponse} SubscriptionPlanResponse instance
         */
        SubscriptionPlanResponse.create = function create(properties) {
            return new SubscriptionPlanResponse(properties);
        };

        /**
         * Encodes the specified SubscriptionPlanResponse message. Does not implicitly {@link subscription_plan.SubscriptionPlanResponse.verify|verify} messages.
         * @function encode
         * @memberof subscription_plan.SubscriptionPlanResponse
         * @static
         * @param {subscription_plan.ISubscriptionPlanResponse} message SubscriptionPlanResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscriptionPlanResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page_info != null && Object.hasOwnProperty.call(message, "page_info"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.page_info);
            if (message.edges != null && message.edges.length)
                for (var i = 0; i < message.edges.length; ++i)
                    $root.subscription_plan.SubscriptionPlan.encode(message.edges[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SubscriptionPlanResponse message, length delimited. Does not implicitly {@link subscription_plan.SubscriptionPlanResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof subscription_plan.SubscriptionPlanResponse
         * @static
         * @param {subscription_plan.ISubscriptionPlanResponse} message SubscriptionPlanResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscriptionPlanResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubscriptionPlanResponse message from the specified reader or buffer.
         * @function decode
         * @memberof subscription_plan.SubscriptionPlanResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {subscription_plan.SubscriptionPlanResponse} SubscriptionPlanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscriptionPlanResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.subscription_plan.SubscriptionPlanResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.page_info = reader.int32();
                    break;
                case 2:
                    if (!(message.edges && message.edges.length))
                        message.edges = [];
                    message.edges.push($root.subscription_plan.SubscriptionPlan.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SubscriptionPlanResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof subscription_plan.SubscriptionPlanResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {subscription_plan.SubscriptionPlanResponse} SubscriptionPlanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscriptionPlanResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubscriptionPlanResponse message.
         * @function verify
         * @memberof subscription_plan.SubscriptionPlanResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubscriptionPlanResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.page_info != null && message.hasOwnProperty("page_info"))
                if (!$util.isInteger(message.page_info))
                    return "page_info: integer expected";
            if (message.edges != null && message.hasOwnProperty("edges")) {
                if (!Array.isArray(message.edges))
                    return "edges: array expected";
                for (var i = 0; i < message.edges.length; ++i) {
                    var error = $root.subscription_plan.SubscriptionPlan.verify(message.edges[i]);
                    if (error)
                        return "edges." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SubscriptionPlanResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof subscription_plan.SubscriptionPlanResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {subscription_plan.SubscriptionPlanResponse} SubscriptionPlanResponse
         */
        SubscriptionPlanResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.subscription_plan.SubscriptionPlanResponse)
                return object;
            var message = new $root.subscription_plan.SubscriptionPlanResponse();
            if (object.page_info != null)
                message.page_info = object.page_info | 0;
            if (object.edges) {
                if (!Array.isArray(object.edges))
                    throw TypeError(".subscription_plan.SubscriptionPlanResponse.edges: array expected");
                message.edges = [];
                for (var i = 0; i < object.edges.length; ++i) {
                    if (typeof object.edges[i] !== "object")
                        throw TypeError(".subscription_plan.SubscriptionPlanResponse.edges: object expected");
                    message.edges[i] = $root.subscription_plan.SubscriptionPlan.fromObject(object.edges[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SubscriptionPlanResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof subscription_plan.SubscriptionPlanResponse
         * @static
         * @param {subscription_plan.SubscriptionPlanResponse} message SubscriptionPlanResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubscriptionPlanResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.edges = [];
            if (options.defaults)
                object.page_info = 0;
            if (message.page_info != null && message.hasOwnProperty("page_info"))
                object.page_info = message.page_info;
            if (message.edges && message.edges.length) {
                object.edges = [];
                for (var j = 0; j < message.edges.length; ++j)
                    object.edges[j] = $root.subscription_plan.SubscriptionPlan.toObject(message.edges[j], options);
            }
            return object;
        };

        /**
         * Converts this SubscriptionPlanResponse to JSON.
         * @function toJSON
         * @memberof subscription_plan.SubscriptionPlanResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubscriptionPlanResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SubscriptionPlanResponse;
    })();

    subscription_plan.Pagination = (function() {

        /**
         * Properties of a Pagination.
         * @memberof subscription_plan
         * @interface IPagination
         * @property {number|null} [total] Pagination total
         * @property {boolean|null} [has_more] Pagination has_more
         * @property {number|null} [limit] Pagination limit
         * @property {number|null} [skip] Pagination skip
         */

        /**
         * Constructs a new Pagination.
         * @memberof subscription_plan
         * @classdesc Represents a Pagination.
         * @implements IPagination
         * @constructor
         * @param {subscription_plan.IPagination=} [properties] Properties to set
         */
        function Pagination(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pagination total.
         * @member {number} total
         * @memberof subscription_plan.Pagination
         * @instance
         */
        Pagination.prototype.total = 0;

        /**
         * Pagination has_more.
         * @member {boolean} has_more
         * @memberof subscription_plan.Pagination
         * @instance
         */
        Pagination.prototype.has_more = false;

        /**
         * Pagination limit.
         * @member {number} limit
         * @memberof subscription_plan.Pagination
         * @instance
         */
        Pagination.prototype.limit = 0;

        /**
         * Pagination skip.
         * @member {number} skip
         * @memberof subscription_plan.Pagination
         * @instance
         */
        Pagination.prototype.skip = 0;

        /**
         * Creates a new Pagination instance using the specified properties.
         * @function create
         * @memberof subscription_plan.Pagination
         * @static
         * @param {subscription_plan.IPagination=} [properties] Properties to set
         * @returns {subscription_plan.Pagination} Pagination instance
         */
        Pagination.create = function create(properties) {
            return new Pagination(properties);
        };

        /**
         * Encodes the specified Pagination message. Does not implicitly {@link subscription_plan.Pagination.verify|verify} messages.
         * @function encode
         * @memberof subscription_plan.Pagination
         * @static
         * @param {subscription_plan.IPagination} message Pagination message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pagination.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.total);
            if (message.has_more != null && Object.hasOwnProperty.call(message, "has_more"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.has_more);
            if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.limit);
            if (message.skip != null && Object.hasOwnProperty.call(message, "skip"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.skip);
            return writer;
        };

        /**
         * Encodes the specified Pagination message, length delimited. Does not implicitly {@link subscription_plan.Pagination.verify|verify} messages.
         * @function encodeDelimited
         * @memberof subscription_plan.Pagination
         * @static
         * @param {subscription_plan.IPagination} message Pagination message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pagination.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pagination message from the specified reader or buffer.
         * @function decode
         * @memberof subscription_plan.Pagination
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {subscription_plan.Pagination} Pagination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pagination.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.subscription_plan.Pagination();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.total = reader.int32();
                    break;
                case 2:
                    message.has_more = reader.bool();
                    break;
                case 3:
                    message.limit = reader.int32();
                    break;
                case 4:
                    message.skip = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pagination message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof subscription_plan.Pagination
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {subscription_plan.Pagination} Pagination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pagination.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pagination message.
         * @function verify
         * @memberof subscription_plan.Pagination
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pagination.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total))
                    return "total: integer expected";
            if (message.has_more != null && message.hasOwnProperty("has_more"))
                if (typeof message.has_more !== "boolean")
                    return "has_more: boolean expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            if (message.skip != null && message.hasOwnProperty("skip"))
                if (!$util.isInteger(message.skip))
                    return "skip: integer expected";
            return null;
        };

        /**
         * Creates a Pagination message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof subscription_plan.Pagination
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {subscription_plan.Pagination} Pagination
         */
        Pagination.fromObject = function fromObject(object) {
            if (object instanceof $root.subscription_plan.Pagination)
                return object;
            var message = new $root.subscription_plan.Pagination();
            if (object.total != null)
                message.total = object.total | 0;
            if (object.has_more != null)
                message.has_more = Boolean(object.has_more);
            if (object.limit != null)
                message.limit = object.limit | 0;
            if (object.skip != null)
                message.skip = object.skip | 0;
            return message;
        };

        /**
         * Creates a plain object from a Pagination message. Also converts values to other types if specified.
         * @function toObject
         * @memberof subscription_plan.Pagination
         * @static
         * @param {subscription_plan.Pagination} message Pagination
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pagination.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.total = 0;
                object.has_more = false;
                object.limit = 0;
                object.skip = 0;
            }
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            if (message.has_more != null && message.hasOwnProperty("has_more"))
                object.has_more = message.has_more;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            if (message.skip != null && message.hasOwnProperty("skip"))
                object.skip = message.skip;
            return object;
        };

        /**
         * Converts this Pagination to JSON.
         * @function toJSON
         * @memberof subscription_plan.Pagination
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pagination.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Pagination;
    })();

    subscription_plan.SubscriptionPlanFilter = (function() {

        /**
         * Properties of a SubscriptionPlanFilter.
         * @memberof subscription_plan
         * @interface ISubscriptionPlanFilter
         * @property {string|null} [id] SubscriptionPlanFilter id
         */

        /**
         * Constructs a new SubscriptionPlanFilter.
         * @memberof subscription_plan
         * @classdesc Represents a SubscriptionPlanFilter.
         * @implements ISubscriptionPlanFilter
         * @constructor
         * @param {subscription_plan.ISubscriptionPlanFilter=} [properties] Properties to set
         */
        function SubscriptionPlanFilter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubscriptionPlanFilter id.
         * @member {string} id
         * @memberof subscription_plan.SubscriptionPlanFilter
         * @instance
         */
        SubscriptionPlanFilter.prototype.id = "";

        /**
         * Creates a new SubscriptionPlanFilter instance using the specified properties.
         * @function create
         * @memberof subscription_plan.SubscriptionPlanFilter
         * @static
         * @param {subscription_plan.ISubscriptionPlanFilter=} [properties] Properties to set
         * @returns {subscription_plan.SubscriptionPlanFilter} SubscriptionPlanFilter instance
         */
        SubscriptionPlanFilter.create = function create(properties) {
            return new SubscriptionPlanFilter(properties);
        };

        /**
         * Encodes the specified SubscriptionPlanFilter message. Does not implicitly {@link subscription_plan.SubscriptionPlanFilter.verify|verify} messages.
         * @function encode
         * @memberof subscription_plan.SubscriptionPlanFilter
         * @static
         * @param {subscription_plan.ISubscriptionPlanFilter} message SubscriptionPlanFilter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscriptionPlanFilter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified SubscriptionPlanFilter message, length delimited. Does not implicitly {@link subscription_plan.SubscriptionPlanFilter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof subscription_plan.SubscriptionPlanFilter
         * @static
         * @param {subscription_plan.ISubscriptionPlanFilter} message SubscriptionPlanFilter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscriptionPlanFilter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubscriptionPlanFilter message from the specified reader or buffer.
         * @function decode
         * @memberof subscription_plan.SubscriptionPlanFilter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {subscription_plan.SubscriptionPlanFilter} SubscriptionPlanFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscriptionPlanFilter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.subscription_plan.SubscriptionPlanFilter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SubscriptionPlanFilter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof subscription_plan.SubscriptionPlanFilter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {subscription_plan.SubscriptionPlanFilter} SubscriptionPlanFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscriptionPlanFilter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubscriptionPlanFilter message.
         * @function verify
         * @memberof subscription_plan.SubscriptionPlanFilter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubscriptionPlanFilter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a SubscriptionPlanFilter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof subscription_plan.SubscriptionPlanFilter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {subscription_plan.SubscriptionPlanFilter} SubscriptionPlanFilter
         */
        SubscriptionPlanFilter.fromObject = function fromObject(object) {
            if (object instanceof $root.subscription_plan.SubscriptionPlanFilter)
                return object;
            var message = new $root.subscription_plan.SubscriptionPlanFilter();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a SubscriptionPlanFilter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof subscription_plan.SubscriptionPlanFilter
         * @static
         * @param {subscription_plan.SubscriptionPlanFilter} message SubscriptionPlanFilter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubscriptionPlanFilter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this SubscriptionPlanFilter to JSON.
         * @function toJSON
         * @memberof subscription_plan.SubscriptionPlanFilter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubscriptionPlanFilter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SubscriptionPlanFilter;
    })();

    return subscription_plan;
})();

$root.user = (function() {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    var user = {};

    user.UserInput = (function() {

        /**
         * Properties of a UserInput.
         * @memberof user
         * @interface IUserInput
         * @property {string|null} [name] UserInput name
         * @property {string|null} [email] UserInput email
         * @property {string|null} [raw_password] UserInput raw_password
         * @property {user.UserInput.UserRole|null} [role] UserInput role
         * @property {string|null} [phone_number] UserInput phone_number
         */

        /**
         * Constructs a new UserInput.
         * @memberof user
         * @classdesc Represents a UserInput.
         * @implements IUserInput
         * @constructor
         * @param {user.IUserInput=} [properties] Properties to set
         */
        function UserInput(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInput name.
         * @member {string} name
         * @memberof user.UserInput
         * @instance
         */
        UserInput.prototype.name = "";

        /**
         * UserInput email.
         * @member {string} email
         * @memberof user.UserInput
         * @instance
         */
        UserInput.prototype.email = "";

        /**
         * UserInput raw_password.
         * @member {string} raw_password
         * @memberof user.UserInput
         * @instance
         */
        UserInput.prototype.raw_password = "";

        /**
         * UserInput role.
         * @member {user.UserInput.UserRole} role
         * @memberof user.UserInput
         * @instance
         */
        UserInput.prototype.role = 0;

        /**
         * UserInput phone_number.
         * @member {string} phone_number
         * @memberof user.UserInput
         * @instance
         */
        UserInput.prototype.phone_number = "";

        /**
         * Creates a new UserInput instance using the specified properties.
         * @function create
         * @memberof user.UserInput
         * @static
         * @param {user.IUserInput=} [properties] Properties to set
         * @returns {user.UserInput} UserInput instance
         */
        UserInput.create = function create(properties) {
            return new UserInput(properties);
        };

        /**
         * Encodes the specified UserInput message. Does not implicitly {@link user.UserInput.verify|verify} messages.
         * @function encode
         * @memberof user.UserInput
         * @static
         * @param {user.IUserInput} message UserInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.email);
            if (message.raw_password != null && Object.hasOwnProperty.call(message, "raw_password"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.raw_password);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.role);
            if (message.phone_number != null && Object.hasOwnProperty.call(message, "phone_number"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.phone_number);
            return writer;
        };

        /**
         * Encodes the specified UserInput message, length delimited. Does not implicitly {@link user.UserInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.UserInput
         * @static
         * @param {user.IUserInput} message UserInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInput message from the specified reader or buffer.
         * @function decode
         * @memberof user.UserInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.UserInput} UserInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.UserInput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.email = reader.string();
                    break;
                case 3:
                    message.raw_password = reader.string();
                    break;
                case 4:
                    message.role = reader.int32();
                    break;
                case 5:
                    message.phone_number = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.UserInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.UserInput} UserInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInput message.
         * @function verify
         * @memberof user.UserInput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.raw_password != null && message.hasOwnProperty("raw_password"))
                if (!$util.isString(message.raw_password))
                    return "raw_password: string expected";
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.phone_number != null && message.hasOwnProperty("phone_number"))
                if (!$util.isString(message.phone_number))
                    return "phone_number: string expected";
            return null;
        };

        /**
         * Creates a UserInput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UserInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UserInput} UserInput
         */
        UserInput.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UserInput)
                return object;
            var message = new $root.user.UserInput();
            if (object.name != null)
                message.name = String(object.name);
            if (object.email != null)
                message.email = String(object.email);
            if (object.raw_password != null)
                message.raw_password = String(object.raw_password);
            switch (object.role) {
            case "ADMIN":
            case 0:
                message.role = 0;
                break;
            case "SUBSCRIBER":
            case 1:
                message.role = 1;
                break;
            }
            if (object.phone_number != null)
                message.phone_number = String(object.phone_number);
            return message;
        };

        /**
         * Creates a plain object from a UserInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UserInput
         * @static
         * @param {user.UserInput} message UserInput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.email = "";
                object.raw_password = "";
                object.role = options.enums === String ? "ADMIN" : 0;
                object.phone_number = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.raw_password != null && message.hasOwnProperty("raw_password"))
                object.raw_password = message.raw_password;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.user.UserInput.UserRole[message.role] : message.role;
            if (message.phone_number != null && message.hasOwnProperty("phone_number"))
                object.phone_number = message.phone_number;
            return object;
        };

        /**
         * Converts this UserInput to JSON.
         * @function toJSON
         * @memberof user.UserInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * UserRole enum.
         * @name user.UserInput.UserRole
         * @enum {number}
         * @property {number} ADMIN=0 ADMIN value
         * @property {number} SUBSCRIBER=1 SUBSCRIBER value
         */
        UserInput.UserRole = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ADMIN"] = 0;
            values[valuesById[1] = "SUBSCRIBER"] = 1;
            return values;
        })();

        return UserInput;
    })();

    user.User = (function() {

        /**
         * Properties of a User.
         * @memberof user
         * @interface IUser
         * @property {string|null} [id] User id
         * @property {string|null} [name] User name
         * @property {string|null} [email] User email
         * @property {string|null} [raw_password] User raw_password
         * @property {user.UserInput.UserRole|null} [role] User role
         * @property {string|null} [phone_number] User phone_number
         */

        /**
         * Constructs a new User.
         * @memberof user
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {user.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {string} id
         * @memberof user.User
         * @instance
         */
        User.prototype.id = "";

        /**
         * User name.
         * @member {string} name
         * @memberof user.User
         * @instance
         */
        User.prototype.name = "";

        /**
         * User email.
         * @member {string} email
         * @memberof user.User
         * @instance
         */
        User.prototype.email = "";

        /**
         * User raw_password.
         * @member {string} raw_password
         * @memberof user.User
         * @instance
         */
        User.prototype.raw_password = "";

        /**
         * User role.
         * @member {user.UserInput.UserRole} role
         * @memberof user.User
         * @instance
         */
        User.prototype.role = 0;

        /**
         * User phone_number.
         * @member {string} phone_number
         * @memberof user.User
         * @instance
         */
        User.prototype.phone_number = "";

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof user.User
         * @static
         * @param {user.IUser=} [properties] Properties to set
         * @returns {user.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link user.User.verify|verify} messages.
         * @function encode
         * @memberof user.User
         * @static
         * @param {user.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            if (message.raw_password != null && Object.hasOwnProperty.call(message, "raw_password"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.raw_password);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.role);
            if (message.phone_number != null && Object.hasOwnProperty.call(message, "phone_number"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.phone_number);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link user.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.User
         * @static
         * @param {user.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof user.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.email = reader.string();
                    break;
                case 4:
                    message.raw_password = reader.string();
                    break;
                case 5:
                    message.role = reader.int32();
                    break;
                case 6:
                    message.phone_number = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof user.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.raw_password != null && message.hasOwnProperty("raw_password"))
                if (!$util.isString(message.raw_password))
                    return "raw_password: string expected";
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.phone_number != null && message.hasOwnProperty("phone_number"))
                if (!$util.isString(message.phone_number))
                    return "phone_number: string expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.user.User)
                return object;
            var message = new $root.user.User();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.email != null)
                message.email = String(object.email);
            if (object.raw_password != null)
                message.raw_password = String(object.raw_password);
            switch (object.role) {
            case "ADMIN":
            case 0:
                message.role = 0;
                break;
            case "SUBSCRIBER":
            case 1:
                message.role = 1;
                break;
            }
            if (object.phone_number != null)
                message.phone_number = String(object.phone_number);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.User
         * @static
         * @param {user.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.email = "";
                object.raw_password = "";
                object.role = options.enums === String ? "ADMIN" : 0;
                object.phone_number = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.raw_password != null && message.hasOwnProperty("raw_password"))
                object.raw_password = message.raw_password;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.user.UserInput.UserRole[message.role] : message.role;
            if (message.phone_number != null && message.hasOwnProperty("phone_number"))
                object.phone_number = message.phone_number;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof user.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    user.DeleteUserResponse = (function() {

        /**
         * Properties of a DeleteUserResponse.
         * @memberof user
         * @interface IDeleteUserResponse
         * @property {number|null} [modified] DeleteUserResponse modified
         * @property {Array.<user.IUser>|null} [edges] DeleteUserResponse edges
         */

        /**
         * Constructs a new DeleteUserResponse.
         * @memberof user
         * @classdesc Represents a DeleteUserResponse.
         * @implements IDeleteUserResponse
         * @constructor
         * @param {user.IDeleteUserResponse=} [properties] Properties to set
         */
        function DeleteUserResponse(properties) {
            this.edges = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteUserResponse modified.
         * @member {number} modified
         * @memberof user.DeleteUserResponse
         * @instance
         */
        DeleteUserResponse.prototype.modified = 0;

        /**
         * DeleteUserResponse edges.
         * @member {Array.<user.IUser>} edges
         * @memberof user.DeleteUserResponse
         * @instance
         */
        DeleteUserResponse.prototype.edges = $util.emptyArray;

        /**
         * Creates a new DeleteUserResponse instance using the specified properties.
         * @function create
         * @memberof user.DeleteUserResponse
         * @static
         * @param {user.IDeleteUserResponse=} [properties] Properties to set
         * @returns {user.DeleteUserResponse} DeleteUserResponse instance
         */
        DeleteUserResponse.create = function create(properties) {
            return new DeleteUserResponse(properties);
        };

        /**
         * Encodes the specified DeleteUserResponse message. Does not implicitly {@link user.DeleteUserResponse.verify|verify} messages.
         * @function encode
         * @memberof user.DeleteUserResponse
         * @static
         * @param {user.IDeleteUserResponse} message DeleteUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteUserResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.modified != null && Object.hasOwnProperty.call(message, "modified"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.modified);
            if (message.edges != null && message.edges.length)
                for (var i = 0; i < message.edges.length; ++i)
                    $root.user.User.encode(message.edges[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DeleteUserResponse message, length delimited. Does not implicitly {@link user.DeleteUserResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.DeleteUserResponse
         * @static
         * @param {user.IDeleteUserResponse} message DeleteUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteUserResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.DeleteUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.DeleteUserResponse} DeleteUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteUserResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.DeleteUserResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.modified = reader.int32();
                    break;
                case 2:
                    if (!(message.edges && message.edges.length))
                        message.edges = [];
                    message.edges.push($root.user.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteUserResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.DeleteUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.DeleteUserResponse} DeleteUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteUserResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteUserResponse message.
         * @function verify
         * @memberof user.DeleteUserResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteUserResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.modified != null && message.hasOwnProperty("modified"))
                if (!$util.isInteger(message.modified))
                    return "modified: integer expected";
            if (message.edges != null && message.hasOwnProperty("edges")) {
                if (!Array.isArray(message.edges))
                    return "edges: array expected";
                for (var i = 0; i < message.edges.length; ++i) {
                    var error = $root.user.User.verify(message.edges[i]);
                    if (error)
                        return "edges." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DeleteUserResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.DeleteUserResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.DeleteUserResponse} DeleteUserResponse
         */
        DeleteUserResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.DeleteUserResponse)
                return object;
            var message = new $root.user.DeleteUserResponse();
            if (object.modified != null)
                message.modified = object.modified | 0;
            if (object.edges) {
                if (!Array.isArray(object.edges))
                    throw TypeError(".user.DeleteUserResponse.edges: array expected");
                message.edges = [];
                for (var i = 0; i < object.edges.length; ++i) {
                    if (typeof object.edges[i] !== "object")
                        throw TypeError(".user.DeleteUserResponse.edges: object expected");
                    message.edges[i] = $root.user.User.fromObject(object.edges[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DeleteUserResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.DeleteUserResponse
         * @static
         * @param {user.DeleteUserResponse} message DeleteUserResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteUserResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.edges = [];
            if (options.defaults)
                object.modified = 0;
            if (message.modified != null && message.hasOwnProperty("modified"))
                object.modified = message.modified;
            if (message.edges && message.edges.length) {
                object.edges = [];
                for (var j = 0; j < message.edges.length; ++j)
                    object.edges[j] = $root.user.User.toObject(message.edges[j], options);
            }
            return object;
        };

        /**
         * Converts this DeleteUserResponse to JSON.
         * @function toJSON
         * @memberof user.DeleteUserResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteUserResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteUserResponse;
    })();

    user.UpdateUserRequest = (function() {

        /**
         * Properties of an UpdateUserRequest.
         * @memberof user
         * @interface IUpdateUserRequest
         * @property {user.IUserInput|null} [payload] UpdateUserRequest payload
         * @property {user.IUserFilter|null} [where] UpdateUserRequest where
         */

        /**
         * Constructs a new UpdateUserRequest.
         * @memberof user
         * @classdesc Represents an UpdateUserRequest.
         * @implements IUpdateUserRequest
         * @constructor
         * @param {user.IUpdateUserRequest=} [properties] Properties to set
         */
        function UpdateUserRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateUserRequest payload.
         * @member {user.IUserInput|null|undefined} payload
         * @memberof user.UpdateUserRequest
         * @instance
         */
        UpdateUserRequest.prototype.payload = null;

        /**
         * UpdateUserRequest where.
         * @member {user.IUserFilter|null|undefined} where
         * @memberof user.UpdateUserRequest
         * @instance
         */
        UpdateUserRequest.prototype.where = null;

        /**
         * Creates a new UpdateUserRequest instance using the specified properties.
         * @function create
         * @memberof user.UpdateUserRequest
         * @static
         * @param {user.IUpdateUserRequest=} [properties] Properties to set
         * @returns {user.UpdateUserRequest} UpdateUserRequest instance
         */
        UpdateUserRequest.create = function create(properties) {
            return new UpdateUserRequest(properties);
        };

        /**
         * Encodes the specified UpdateUserRequest message. Does not implicitly {@link user.UpdateUserRequest.verify|verify} messages.
         * @function encode
         * @memberof user.UpdateUserRequest
         * @static
         * @param {user.IUpdateUserRequest} message UpdateUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                $root.user.UserInput.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.where != null && Object.hasOwnProperty.call(message, "where"))
                $root.user.UserFilter.encode(message.where, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateUserRequest message, length delimited. Does not implicitly {@link user.UpdateUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.UpdateUserRequest
         * @static
         * @param {user.IUpdateUserRequest} message UpdateUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.UpdateUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.UpdateUserRequest} UpdateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.UpdateUserRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.payload = $root.user.UserInput.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.where = $root.user.UserFilter.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.UpdateUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.UpdateUserRequest} UpdateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateUserRequest message.
         * @function verify
         * @memberof user.UpdateUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.payload != null && message.hasOwnProperty("payload")) {
                var error = $root.user.UserInput.verify(message.payload);
                if (error)
                    return "payload." + error;
            }
            if (message.where != null && message.hasOwnProperty("where")) {
                var error = $root.user.UserFilter.verify(message.where);
                if (error)
                    return "where." + error;
            }
            return null;
        };

        /**
         * Creates an UpdateUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UpdateUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UpdateUserRequest} UpdateUserRequest
         */
        UpdateUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UpdateUserRequest)
                return object;
            var message = new $root.user.UpdateUserRequest();
            if (object.payload != null) {
                if (typeof object.payload !== "object")
                    throw TypeError(".user.UpdateUserRequest.payload: object expected");
                message.payload = $root.user.UserInput.fromObject(object.payload);
            }
            if (object.where != null) {
                if (typeof object.where !== "object")
                    throw TypeError(".user.UpdateUserRequest.where: object expected");
                message.where = $root.user.UserFilter.fromObject(object.where);
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UpdateUserRequest
         * @static
         * @param {user.UpdateUserRequest} message UpdateUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.payload = null;
                object.where = null;
            }
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = $root.user.UserInput.toObject(message.payload, options);
            if (message.where != null && message.hasOwnProperty("where"))
                object.where = $root.user.UserFilter.toObject(message.where, options);
            return object;
        };

        /**
         * Converts this UpdateUserRequest to JSON.
         * @function toJSON
         * @memberof user.UpdateUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateUserRequest;
    })();

    user.UpdateUserResponse = (function() {

        /**
         * Properties of an UpdateUserResponse.
         * @memberof user
         * @interface IUpdateUserResponse
         * @property {number|null} [modified] UpdateUserResponse modified
         * @property {Array.<user.IUser>|null} [edges] UpdateUserResponse edges
         */

        /**
         * Constructs a new UpdateUserResponse.
         * @memberof user
         * @classdesc Represents an UpdateUserResponse.
         * @implements IUpdateUserResponse
         * @constructor
         * @param {user.IUpdateUserResponse=} [properties] Properties to set
         */
        function UpdateUserResponse(properties) {
            this.edges = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateUserResponse modified.
         * @member {number} modified
         * @memberof user.UpdateUserResponse
         * @instance
         */
        UpdateUserResponse.prototype.modified = 0;

        /**
         * UpdateUserResponse edges.
         * @member {Array.<user.IUser>} edges
         * @memberof user.UpdateUserResponse
         * @instance
         */
        UpdateUserResponse.prototype.edges = $util.emptyArray;

        /**
         * Creates a new UpdateUserResponse instance using the specified properties.
         * @function create
         * @memberof user.UpdateUserResponse
         * @static
         * @param {user.IUpdateUserResponse=} [properties] Properties to set
         * @returns {user.UpdateUserResponse} UpdateUserResponse instance
         */
        UpdateUserResponse.create = function create(properties) {
            return new UpdateUserResponse(properties);
        };

        /**
         * Encodes the specified UpdateUserResponse message. Does not implicitly {@link user.UpdateUserResponse.verify|verify} messages.
         * @function encode
         * @memberof user.UpdateUserResponse
         * @static
         * @param {user.IUpdateUserResponse} message UpdateUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateUserResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.modified != null && Object.hasOwnProperty.call(message, "modified"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.modified);
            if (message.edges != null && message.edges.length)
                for (var i = 0; i < message.edges.length; ++i)
                    $root.user.User.encode(message.edges[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateUserResponse message, length delimited. Does not implicitly {@link user.UpdateUserResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.UpdateUserResponse
         * @static
         * @param {user.IUpdateUserResponse} message UpdateUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateUserResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.UpdateUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.UpdateUserResponse} UpdateUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateUserResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.UpdateUserResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.modified = reader.int32();
                    break;
                case 2:
                    if (!(message.edges && message.edges.length))
                        message.edges = [];
                    message.edges.push($root.user.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateUserResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.UpdateUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.UpdateUserResponse} UpdateUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateUserResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateUserResponse message.
         * @function verify
         * @memberof user.UpdateUserResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateUserResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.modified != null && message.hasOwnProperty("modified"))
                if (!$util.isInteger(message.modified))
                    return "modified: integer expected";
            if (message.edges != null && message.hasOwnProperty("edges")) {
                if (!Array.isArray(message.edges))
                    return "edges: array expected";
                for (var i = 0; i < message.edges.length; ++i) {
                    var error = $root.user.User.verify(message.edges[i]);
                    if (error)
                        return "edges." + error;
                }
            }
            return null;
        };

        /**
         * Creates an UpdateUserResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UpdateUserResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UpdateUserResponse} UpdateUserResponse
         */
        UpdateUserResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UpdateUserResponse)
                return object;
            var message = new $root.user.UpdateUserResponse();
            if (object.modified != null)
                message.modified = object.modified | 0;
            if (object.edges) {
                if (!Array.isArray(object.edges))
                    throw TypeError(".user.UpdateUserResponse.edges: array expected");
                message.edges = [];
                for (var i = 0; i < object.edges.length; ++i) {
                    if (typeof object.edges[i] !== "object")
                        throw TypeError(".user.UpdateUserResponse.edges: object expected");
                    message.edges[i] = $root.user.User.fromObject(object.edges[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateUserResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UpdateUserResponse
         * @static
         * @param {user.UpdateUserResponse} message UpdateUserResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateUserResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.edges = [];
            if (options.defaults)
                object.modified = 0;
            if (message.modified != null && message.hasOwnProperty("modified"))
                object.modified = message.modified;
            if (message.edges && message.edges.length) {
                object.edges = [];
                for (var j = 0; j < message.edges.length; ++j)
                    object.edges[j] = $root.user.User.toObject(message.edges[j], options);
            }
            return object;
        };

        /**
         * Converts this UpdateUserResponse to JSON.
         * @function toJSON
         * @memberof user.UpdateUserResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateUserResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateUserResponse;
    })();

    user.UserResponse = (function() {

        /**
         * Properties of a UserResponse.
         * @memberof user
         * @interface IUserResponse
         * @property {number|null} [page_info] UserResponse page_info
         * @property {Array.<user.IUser>|null} [edges] UserResponse edges
         */

        /**
         * Constructs a new UserResponse.
         * @memberof user
         * @classdesc Represents a UserResponse.
         * @implements IUserResponse
         * @constructor
         * @param {user.IUserResponse=} [properties] Properties to set
         */
        function UserResponse(properties) {
            this.edges = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserResponse page_info.
         * @member {number} page_info
         * @memberof user.UserResponse
         * @instance
         */
        UserResponse.prototype.page_info = 0;

        /**
         * UserResponse edges.
         * @member {Array.<user.IUser>} edges
         * @memberof user.UserResponse
         * @instance
         */
        UserResponse.prototype.edges = $util.emptyArray;

        /**
         * Creates a new UserResponse instance using the specified properties.
         * @function create
         * @memberof user.UserResponse
         * @static
         * @param {user.IUserResponse=} [properties] Properties to set
         * @returns {user.UserResponse} UserResponse instance
         */
        UserResponse.create = function create(properties) {
            return new UserResponse(properties);
        };

        /**
         * Encodes the specified UserResponse message. Does not implicitly {@link user.UserResponse.verify|verify} messages.
         * @function encode
         * @memberof user.UserResponse
         * @static
         * @param {user.IUserResponse} message UserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page_info != null && Object.hasOwnProperty.call(message, "page_info"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.page_info);
            if (message.edges != null && message.edges.length)
                for (var i = 0; i < message.edges.length; ++i)
                    $root.user.User.encode(message.edges[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserResponse message, length delimited. Does not implicitly {@link user.UserResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.UserResponse
         * @static
         * @param {user.IUserResponse} message UserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.UserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.UserResponse} UserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.UserResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.page_info = reader.int32();
                    break;
                case 2:
                    if (!(message.edges && message.edges.length))
                        message.edges = [];
                    message.edges.push($root.user.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.UserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.UserResponse} UserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserResponse message.
         * @function verify
         * @memberof user.UserResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.page_info != null && message.hasOwnProperty("page_info"))
                if (!$util.isInteger(message.page_info))
                    return "page_info: integer expected";
            if (message.edges != null && message.hasOwnProperty("edges")) {
                if (!Array.isArray(message.edges))
                    return "edges: array expected";
                for (var i = 0; i < message.edges.length; ++i) {
                    var error = $root.user.User.verify(message.edges[i]);
                    if (error)
                        return "edges." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UserResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UserResponse} UserResponse
         */
        UserResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UserResponse)
                return object;
            var message = new $root.user.UserResponse();
            if (object.page_info != null)
                message.page_info = object.page_info | 0;
            if (object.edges) {
                if (!Array.isArray(object.edges))
                    throw TypeError(".user.UserResponse.edges: array expected");
                message.edges = [];
                for (var i = 0; i < object.edges.length; ++i) {
                    if (typeof object.edges[i] !== "object")
                        throw TypeError(".user.UserResponse.edges: object expected");
                    message.edges[i] = $root.user.User.fromObject(object.edges[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UserResponse
         * @static
         * @param {user.UserResponse} message UserResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.edges = [];
            if (options.defaults)
                object.page_info = 0;
            if (message.page_info != null && message.hasOwnProperty("page_info"))
                object.page_info = message.page_info;
            if (message.edges && message.edges.length) {
                object.edges = [];
                for (var j = 0; j < message.edges.length; ++j)
                    object.edges[j] = $root.user.User.toObject(message.edges[j], options);
            }
            return object;
        };

        /**
         * Converts this UserResponse to JSON.
         * @function toJSON
         * @memberof user.UserResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserResponse;
    })();

    user.Pagination = (function() {

        /**
         * Properties of a Pagination.
         * @memberof user
         * @interface IPagination
         * @property {number|null} [total] Pagination total
         * @property {boolean|null} [has_more] Pagination has_more
         * @property {number|null} [limit] Pagination limit
         * @property {number|null} [skip] Pagination skip
         */

        /**
         * Constructs a new Pagination.
         * @memberof user
         * @classdesc Represents a Pagination.
         * @implements IPagination
         * @constructor
         * @param {user.IPagination=} [properties] Properties to set
         */
        function Pagination(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pagination total.
         * @member {number} total
         * @memberof user.Pagination
         * @instance
         */
        Pagination.prototype.total = 0;

        /**
         * Pagination has_more.
         * @member {boolean} has_more
         * @memberof user.Pagination
         * @instance
         */
        Pagination.prototype.has_more = false;

        /**
         * Pagination limit.
         * @member {number} limit
         * @memberof user.Pagination
         * @instance
         */
        Pagination.prototype.limit = 0;

        /**
         * Pagination skip.
         * @member {number} skip
         * @memberof user.Pagination
         * @instance
         */
        Pagination.prototype.skip = 0;

        /**
         * Creates a new Pagination instance using the specified properties.
         * @function create
         * @memberof user.Pagination
         * @static
         * @param {user.IPagination=} [properties] Properties to set
         * @returns {user.Pagination} Pagination instance
         */
        Pagination.create = function create(properties) {
            return new Pagination(properties);
        };

        /**
         * Encodes the specified Pagination message. Does not implicitly {@link user.Pagination.verify|verify} messages.
         * @function encode
         * @memberof user.Pagination
         * @static
         * @param {user.IPagination} message Pagination message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pagination.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.total);
            if (message.has_more != null && Object.hasOwnProperty.call(message, "has_more"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.has_more);
            if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.limit);
            if (message.skip != null && Object.hasOwnProperty.call(message, "skip"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.skip);
            return writer;
        };

        /**
         * Encodes the specified Pagination message, length delimited. Does not implicitly {@link user.Pagination.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.Pagination
         * @static
         * @param {user.IPagination} message Pagination message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pagination.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pagination message from the specified reader or buffer.
         * @function decode
         * @memberof user.Pagination
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.Pagination} Pagination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pagination.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.Pagination();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.total = reader.int32();
                    break;
                case 2:
                    message.has_more = reader.bool();
                    break;
                case 3:
                    message.limit = reader.int32();
                    break;
                case 4:
                    message.skip = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pagination message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.Pagination
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.Pagination} Pagination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pagination.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pagination message.
         * @function verify
         * @memberof user.Pagination
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pagination.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total))
                    return "total: integer expected";
            if (message.has_more != null && message.hasOwnProperty("has_more"))
                if (typeof message.has_more !== "boolean")
                    return "has_more: boolean expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            if (message.skip != null && message.hasOwnProperty("skip"))
                if (!$util.isInteger(message.skip))
                    return "skip: integer expected";
            return null;
        };

        /**
         * Creates a Pagination message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.Pagination
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.Pagination} Pagination
         */
        Pagination.fromObject = function fromObject(object) {
            if (object instanceof $root.user.Pagination)
                return object;
            var message = new $root.user.Pagination();
            if (object.total != null)
                message.total = object.total | 0;
            if (object.has_more != null)
                message.has_more = Boolean(object.has_more);
            if (object.limit != null)
                message.limit = object.limit | 0;
            if (object.skip != null)
                message.skip = object.skip | 0;
            return message;
        };

        /**
         * Creates a plain object from a Pagination message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.Pagination
         * @static
         * @param {user.Pagination} message Pagination
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pagination.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.total = 0;
                object.has_more = false;
                object.limit = 0;
                object.skip = 0;
            }
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            if (message.has_more != null && message.hasOwnProperty("has_more"))
                object.has_more = message.has_more;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            if (message.skip != null && message.hasOwnProperty("skip"))
                object.skip = message.skip;
            return object;
        };

        /**
         * Converts this Pagination to JSON.
         * @function toJSON
         * @memberof user.Pagination
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pagination.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Pagination;
    })();

    user.UserFilter = (function() {

        /**
         * Properties of a UserFilter.
         * @memberof user
         * @interface IUserFilter
         * @property {string|null} [id] UserFilter id
         */

        /**
         * Constructs a new UserFilter.
         * @memberof user
         * @classdesc Represents a UserFilter.
         * @implements IUserFilter
         * @constructor
         * @param {user.IUserFilter=} [properties] Properties to set
         */
        function UserFilter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserFilter id.
         * @member {string} id
         * @memberof user.UserFilter
         * @instance
         */
        UserFilter.prototype.id = "";

        /**
         * Creates a new UserFilter instance using the specified properties.
         * @function create
         * @memberof user.UserFilter
         * @static
         * @param {user.IUserFilter=} [properties] Properties to set
         * @returns {user.UserFilter} UserFilter instance
         */
        UserFilter.create = function create(properties) {
            return new UserFilter(properties);
        };

        /**
         * Encodes the specified UserFilter message. Does not implicitly {@link user.UserFilter.verify|verify} messages.
         * @function encode
         * @memberof user.UserFilter
         * @static
         * @param {user.IUserFilter} message UserFilter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserFilter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified UserFilter message, length delimited. Does not implicitly {@link user.UserFilter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.UserFilter
         * @static
         * @param {user.IUserFilter} message UserFilter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserFilter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserFilter message from the specified reader or buffer.
         * @function decode
         * @memberof user.UserFilter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.UserFilter} UserFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserFilter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.UserFilter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserFilter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.UserFilter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.UserFilter} UserFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserFilter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserFilter message.
         * @function verify
         * @memberof user.UserFilter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserFilter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a UserFilter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UserFilter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UserFilter} UserFilter
         */
        UserFilter.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UserFilter)
                return object;
            var message = new $root.user.UserFilter();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a UserFilter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UserFilter
         * @static
         * @param {user.UserFilter} message UserFilter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserFilter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this UserFilter to JSON.
         * @function toJSON
         * @memberof user.UserFilter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserFilter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserFilter;
    })();

    return user;
})();

module.exports = $root;
