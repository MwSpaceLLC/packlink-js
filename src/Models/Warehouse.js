/**
 * @copyright 2022 | MwSpace llc, srl
 * @package packlink-js
 * @author Aleksandr Ivanovitch
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * @license http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * This class was developed to connect PHP frameworks with the packlink pro
 * shipping system. This library is unofficial and uses the connection protocols
 * of the request. No copyright infringement.
 * Released, developed and maintain by MwSpace llc, srl.
 *
 */

const {Packlink} = require("../Packlink.js");
const {Error} = require("../Exceptions/Error.js");

module.exports.Carrier = class Warehouse extends Packlink {

    /**
     *
     * @param uuid
     * @returns {Promise<Error|{}>}
     */
    static async find(uuid) {

        if (!uuid) return new Error('uuid has been required');

        return Warehouse._response(
            await Warehouse._get(`clients/warehouses/${uuid}`)
        )
    }

    /**
     *
     * @returns {Promise<*>}
     */
    static async first() {
        return (await Warehouse.all()).shift();
    }

    /**
     *
     * @returns {Promise[{}]}
     */
    static async all() {
        return Warehouse._response(
            await Warehouse._get(`warehouses`)
        )
    }

    /**
     *
     * @returns {Promise[{}]}
     */
    static async create(data) {

        if ((await Warehouse.all()).length >= 8) return new Error('The maximum number of addresses allowed has been reached')

        const {id} = Warehouse._response(
            await Warehouse._post(`clients/warehouses`, data)
        );

        // return instance of real
        return await Warehouse.find(id);
    }

    /**
     *
     * @param uuid
     * @param data
     * @returns {Promise<Error|Carrier>}
     */
    static async update(uuid, data) {

        if (!uuid) return new Error('uuid has been required');

        if (!data) return new Error('data has been required');

        Warehouse._response(
            await Warehouse._put(`clients/warehouses/${uuid}`,
                {...await Warehouse.find(uuid), ...data}
            )
        )

        // return instance of real
        return await Warehouse.find(uuid);
    }

    /**
     *
     * @param uuid
     * @returns {Promise<{}>}
     */
    static async delete(uuid) {

        if (!uuid) return new Error('uuid has been required');

        return Warehouse._response(
            await Warehouse._delete(`clients/warehouses/${uuid}`)
        )
    }

}