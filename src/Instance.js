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

const qs = require("qs");
const axios = require("axios");

module.exports.Instance = class Instance {

    static Apy_Key;

    static  #platform = 'PRO';

    static Api_Version = 'v1';

    static  language = 'it_IT';

    static  platform_country = 'IT';

    static  #platform_postalzone = 113;

    static #Content_Type = 'application/json';

    static #BASE_URL = 'https://api.packlink.com';

    static #CDN_URL = 'https://cdn.packlink.com/apps'

    /**
     *
     * @param endpoint
     * @param data
     * @returns {*}
     */
    static async _post(endpoint, data) {
        try {
            return await Instance.#client().post(endpoint, data)
        } catch (error) {

            console.log(error)
            return {error: error.message}
        }
    }

    /**
     *
     * @param endpoint
     * @param data
     * @returns {*}
     */
    static async _put(endpoint, data) {
        try {
            return await Instance.#client().put(endpoint, data)
        } catch (error) {

            console.log(error)
            return {error: error.message}
        }
    }

    /**
     *
     * @param endpoint
     * @param data
     * @returns {*}
     */
    static async _patch(endpoint, data) {
        try {
            return await Instance.#client().patch(endpoint, data)
        } catch (error) {

            console.log(error)
            return {error: error.message}
        }
    }

    /**
     *
     * @param endpoint
     * @param params
     * @returns {*}
     */
    static async _get(endpoint, params) {
        try {
            return await Instance.#client().get(
                `${endpoint}${params ? '?' + qs.stringify(params) : ''}`
            )
        } catch (error) {

            console.log(error)
            return {error: error.message}
        }
    }

    /**
     *
     * @param endpoint
     * @param params
     * @returns {*}
     */
    static async _delete(endpoint, params) {
        try {
            return await Instance.#client().delete(
                `${endpoint}${params ? '?' + qs.stringify(params) : ''}`
            )
        } catch (error) {

            console.log(error)
            return {error: error.message}
        }
    }

    /**
     *
     * @param res
     * @returns {{}}
     */
    static _response(res) {
        return res.data ? res.data : res;
    }

    /**
     *
     * @returns {any}
     */
    static #client() {

        if (!Instance.Apy_Key) throw new Error('API KEY MUST BE SET AS Packlink.setApiKey(\'YOUR_API_KEY\');');

        return axios.create({
            baseURL: `${Instance.#BASE_URL}/${Instance.Api_Version}`,
            headers: {
                "Content-Type": Instance.#Content_Type,
                "Authorization": Instance.Apy_Key,
            },
        });
    }

}