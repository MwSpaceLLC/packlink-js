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

import Packlink from "../Packlink.mjs";
import Error from "../Exceptions/Error.mjs";

export default class Carrier extends Packlink {

    _to;
    _from;
    sortBy;
    weight;
    packages;

    /**
     *
     * @param packages
     * @returns {Carrier}
     */
    static ship(packages = [{}]) {

        const self = new Carrier;
        self.packages = packages

        return self;
    }

    /**
     *
     * @param weight
     * @returns {{all(): Promise<*>, _from, weight, packages, delete(*, *=): *, put(*, *=): *, patch(*, *=): *, post(*, *=): *, get(*, *=): *, sortBy, from(*=): Carrier, _to, to(*=): Carrier, parcels}}
     */
    static quote(weight = 0.0) {
        const self = new Carrier;
        self.weight = weight

        return self;
    }

    /**
     *
     * @param country
     * @returns {any}
     */
    from(country = {}) {
        this._from = country;

        return this;
    }

    /**
     *
     * @param country
     * @returns {any}
     */
    to(country = {}) {
        this._to = country;

        return this;
    }

    /**
     * @returns {Promise<*>}
     */
    async all() {

        if (!this._from) return new Error('from address has been required');

        if (!this._to) return new Error('to address has been required');

        // TODO: check also php library to max weight
        if (this.weight > 70) return new Error('weight must be below 70');

        return Carrier._response(
            await Carrier._get('services', {
                from: this._from,
                to: this._to,
                packages: this.packages ?? [
                    {
                        'weight': this.weight ?? 5, // kg
                        'height': 5, // cm
                        'length': 5, // cm
                        'width': 5, // cm
                    }
                ],
                sortBy: this.sortBy ?? 'totalPrice',
            })
        )
    }

}