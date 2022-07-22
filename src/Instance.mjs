/**
 * @copyright 2022 | MwSpace llc, srl
 * @package mwspace/packlink-js
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
 * of the cms. No copyright infringement.
 * Released, developed and maintain by MwSpace llc, srl.
 *
 */

import axios from "axios";

export default class Instance {

    static Apy_Key;

    static  #platform = 'PRO';

    static  #language = 'it_IT';

    static  #platform_country = 'IT';

    static  #platform_postalzone = 113;

    static #Content_Type = 'application/json';

    static #BASE_URL = 'https://api.packlink.com/v1';

    static #CDN_URL = 'https://cdn.packlink.com/apps'

    /**
     *
     * @param endpoint
     * @param data
     * @returns {*}
     */
    static async _post(endpoint, data = {}) {
        return await Instance.#client().post(endpoint, data)
    }

    /**
     *
     * @param endpoint
     * @param data
     * @returns {*}
     */
    static async _put(endpoint, data = {}) {
        return await Instance.#client().put(endpoint, data)
    }

    /**
     *
     * @param endpoint
     * @param data
     * @returns {*}
     */
    static async _patch(endpoint, data) {
        return await Instance.#client().patch(endpoint, data)
    }

    /**
     *
     * @param endpoint
     * @param params
     * @returns {*}
     */
    static async _get(endpoint, params = {}) {
        return await Instance.#client().get(endpoint, params ? {params: params} : null)
    }

    /**
     *
     * @param res
     * @returns {{}}
     */
    static _response(res = {}) {

        // console.log(res.data)

        return res.data || {};
    }

    /**
     *
     * @param endpoint
     * @param params
     * @returns {*}
     */
    static async _delete(endpoint, params = {}) {
        return await Instance.#client().delete(endpoint, {params: params})
    }

    static #client() {

        const client = axios.create({
            baseURL: Instance.#BASE_URL,
            headers: {
                "Content-Type": Instance.#Content_Type,
                "Authorization": Instance.Apy_Key,
            },
        });

        // client.interceptors.request.use(function (config) {
        //
        //     console.log(config)
        //     return config;
        // }, function (error) {
        //
        //     console.log(error)
        //     return Promise.reject(error);
        // });
        //
        // client.interceptors.response.use(function (response) {
        //
        //     console.log(response)
        //     return response;
        // }, function (error) {
        //
        //     console.log(error)
        //     return Promise.reject(error);
        // });

        return client;
    }

    /**
     * Check new Error Api
     */
    constructor() {
        if (!Instance.Apy_Key) throw new Error('API KEY MUST BE SET AS Packlink.setApiKey(\'YOUR_API_KEY\');');
    }
}