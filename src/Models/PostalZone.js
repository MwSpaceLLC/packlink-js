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

module.exports.Carrier = class PostalZone extends Packlink {

    /**
     *
     * @returns {Promise<{}>}
     */
    static async all() {
        return PostalZone._response(
            await PostalZone._get('locations/postalzones/origins', {language: PostalZone.language})
        )
    }

}