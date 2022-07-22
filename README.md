## php Version <img src="https://www.php.net//images/logos/php-logo.svg" width="80"/>

> Go to use library [packlink-php](https://github.com/MwSpaceLLC/packlink-php)

# Carrier Service <img src="https://cdn.packlink.com/apps/giger/logos/packlink-pro.svg" width="200">

> Small Javascript library for use [Packlink PRO](https://pro.packlink.it/).

| JS Version  | Status | Require | version |
|-------------|--------|---------|---------|
| Node >=16.0 | @Dev   | node    | 1.0.0   |

[//]: # ([![Build Status]&#40;https://travis-ci.com/mwspace/packlink-php.svg?branch=main&#41;]&#40;https://travis-ci.com/mwspace/packlink-php.svg?branch=main&#41;)

[//]: # ([![Latest Stable Version]&#40;http://poser.pugx.org/mwspace/packlink-php/v&#41;]&#40;https://packagist.org/packages/mwspace/packlink-php&#41;)

[//]: # ([![Total Downloads]&#40;http://poser.pugx.org/mwspace/packlink-php/downloads&#41;]&#40;https://packagist.org/packages/mwspace/packlink-php&#41;)

[//]: # ([![Latest Unstable Version]&#40;http://poser.pugx.org/mwspace/packlink-php/v/unstable&#41;]&#40;https://packagist.org/packages/mwspace/packlink-php&#41;)

[//]: # ([![License]&#40;http://poser.pugx.org/mwspace/packlink-php/license&#41;]&#40;https://packagist.org/packages/mwspace/packlink-php&#41;)

![image](https://user-images.githubusercontent.com/29952045/129723631-f52d3795-2033-4217-812b-46113256a62e.png)

### 🐱‍🚀 Install Library:

` npm i packlink-js`

### 💎 Register your [account](https://auth.packlink.com/it-IT/pro/registro).

Compare prices and choose the services that best suit your needs, Manage all your orders at the same time and in one
place! Start enjoying Packlink PRO completely for free!

### 🔐 Authenticating to Packlink

Go to the settings page and request your Api Key (
See [Api Key](https://pro.packlink.it/private/settings/api-key))

### 🎉 See all [examples](https://github.com/MwSpaceLLC/packlink-php/tree/main/examples).

You can see it works correctly in the code we wrote or if you want to test it you could include this file in your
script. **PLEASE, SEE ALSO PHP UNIT TEST FOR MORE USAGE**

#### 🐱‍🏍 Start Packlink Object:

```javascript
import {Packlink} from "packlink-js";

Packlink.setApiKey(process.env.YOUR_PACKLINK_API_KEY);
```

#### 🐱‍🏍 Get all Status Dashboard:

```javascript
import {Stat} from "packlink-js";

const stats = await Stat.all();

return console.log(stats) // Stat object class to json
```

The class will connect via api to your packlink account (pro.packlink.it)

### 🚚 All Carriers:

```javascript
import {Carrier} from "packlink-js";

const packages = [[]];

const carriers = await Carrier.ship(packages)

carriers.from({ // get prices for parcels by zip code from => to
    country: 'IT',
    zip: '20900'
})

carriers.to({
    country: 'IT',
    zip: '06073'
});

return res.json(await carriers.all()) // decode Carrier object class to json
```

The system will search for the couriers with the best price for the shipment of all parcels attached. Create method
insert many data to array. Please see all data needed at
[Parcels](https://github.com/MwSpaceLLC/packlink-php/blob/main/PARCELS.md).

### 🚚 Find Carriers:

```javascript

```

Please see all data needed at
[Parcels](https://github.com/MwSpaceLLC/packlink-php/blob/main/PARCELS.md).

### 🚚 Quote Carriers:

```javascript
import {Carrier} from "packlink-js";

const carriers = await Carrier.quote(8.5)  // quote ship weight (kg)

carriers.from({ // get prices for parcels by zip code from => to
    country: 'IT',
    zip: '20900'
})

carriers.to({
    country: 'IT',
    zip: '06073'
});

return res.json(await carriers.all()) // decode Carrier object class to json
```

The system will search for the couriers with the best price for the shipment of weight.

### 🗺 All Postal Zones:

```javascript
import {PostalZone} from "packlink-js";

const postalzones = await PostalZone.all()

return res.json(postalzones)
```

The system will return all countries (iso code) available for shipment

### 🗺 All Postal Code:

```javascript
import {PostalCode} from "packlink-js";

const postalcodes = await PostalCode.all()

return res.json(postalcodes)
```

The system will return all postal code (zip code) available for shipment

### 🗺 Get Postal Code:

```javascript
import {PostalCode} from "packlink-js"; 

const postalcodes = await PostalCode.get('NAME_OF_CITY_OR_ZIP_CODE')

return res.json(postalcodes)
```

The system will return postal code (zip code) available for shipment by query search. You can use this function also for
validate your zip code.

### 🗺 Check Postal Code:

```javascript
import {PostalCode} from "packlink-js";

const postalcodes = await PostalCode.exists('NAME_OF_CITY_OR_ZIP_CODE')

return res.json(postalcodes)
```

The system will return postal code (zip code) available for shipment by query search. You can use this function also for
validate your zip code.

### 📦 All Shipments:

```javascript
import {Shipment} from "packlink-js";

const shipments = await Shipment.all()

return res.json(shipments)
```

The system checks the tax code by confirming the captcha through Api Vision. Filter available:
*ALL | PENDING | READY_TO_PURCHASE | DRAFT | PROCESSING | READY_FOR_SHIPPING | TRACKING | IN_TRANSIT | OUT_FOR_DELIVERY
| DELIVERED | INCIDENT | RETURNED_TO_SENDER | ARCHIVED*

### 📦 First Shipments:

```javascript
import {Shipment} from "packlink-js";

const shipments = await Shipment.first()

return res.json(shipments)
```

### 📦 Find Shipment:

```javascript
import {Shipment} from "packlink-js";

const shipments = await Shipment.find('YOUR_SHIPMENT_ID')

return res.json(shipments)
```

The system will check the status of your order, reporting useful information such as the various tracking and couriers
with collection and exchange points.

### 📦 Create Shipment:

```javascript
import {Shipment} from "packlink-js";

const model = {};

const shipments = await Shipment.create(model)

return res.json(shipments)
```

Create method insert many data to array. Please see all data needed at
[Shipment Model](https://github.com/MwSpaceLLC/packlink-php/blob/main/SHIPMENT-MODEL.md).

### 📦 Update Shipment:

```javascript

```

### 📦 Delete Shipment:

```javascript
import {Shipment} from "packlink-js";

const shipments = await Shipment.delete('YOUR_SHIPMENT_ID') // delete if ready to ship or draft

return res.json(shipments)
```

### 🎯 All Warehouses:

```javascript
import {Warehouse} from "packlink-js";

const warehouses = await Warehouse.all() // find warehouse by id

return res.json(warehouses) // decode Warehouse object class to json
```

### 🎯 Find Warehouses:

```javascript
import {Warehouse} from "packlink-js";

const warehouse = await Warehouse.find('YOUR_WAREHOUSE_ID') // find warehouse by id

return res.json(warehouse) // decode Warehouse object class to json
```

### 🎯 First Warehouses:

```javascript
import {Warehouse} from "packlink-js";

const warehouse = await Warehouse.first() // find warehouse by id

return res.json(warehouse) // decode Warehouse object class to json
```

### 🎯 Create Warehouses:

```javascript
import {Warehouse} from "packlink-js";

const model = {};

const warehouse = await Warehouse.create(model) // create new Warehouse by Model Class

return res.json(warehouse) // decode Warehouse object class to json
```

Create method insert many data to array. Please see all data needed at
[Warehouse Model](https://github.com/MwSpaceLLC/packlink-php/blob/main/WAREHOUSE-MODEL.md).

### 🎯 Update Warehouses:

```javascript
import {Warehouse} from "packlink-js";

const update = await Warehouse.update('YOUR_WAREHOUSE_ID', {alias: 'MwSpace llc'})

return res.json(update)
```

### 🎯 Delete Warehouses:

```javascript
import {Warehouse} from "packlink-js";

const warehouse = await Warehouse.find('YOUR_WAREHOUSE_ID') // OPTIONAL | find warehouse by id

return res.json(
    await Warehouse.delete(warehouse.id)
)
```

## Why use?

It matters Automatically import or manually create your national and international shipments.

Professionalism Choose from a wide variety of transport services at the best prices.

Fast and flexible Fast and flexible Save time with the massive management of your shipments: print several labels at the
same time, or modify and pay for several shipments in one go.

Insurance Insurance Insurance coverage on products shipped, available for new and second hand items.

Tracking Tracking Tracking of all shipments from a single platform.

Customer service Customer service Help from our sales and customer service staff.

Good packaging protects the shipment and is one of the requirements for insurance.

[Read the 5 rules for proper packaging](https://support-pro.packlink.com/hc/it/articles/210236805).

## List Italy Shipping Carrier

ITALIAN POST

Poste Italiane shipments with Crono Express and Crono Internazionale services. Express deliveries throughout Italy and
the safety of sending with Poste Italiane. Compare rates and services on Packlink and send with Poste Italiane online
starting from € 5.59 all inclusive.

BRT

To ship with BRT, you can choose between national (such as Express and Priority 12.00) or international (such as DPD and
Euroexpress) shipping services. The cost of shipping with BRT will be discounted up to 70% with prices starting from €
10.96 all included.

TNT

Ship abroad with TNT courier starting from € 23.36 with services such as Economy Express and Express. You can send
parcels to Europe and abroad with delivery in 224/48 hours or 4/5 days.

UPS

Send by UPS courier in Italy and abroad. The UPS rates you will find on Packlink start at € 18.59 for national shipments
and € 15.61 for international shipments. You can choose between the Standard, Express or Express Saver service.

SDA

The SDA courier allows you to send small and medium-sized parcels throughout Italy with express delivery starting from
24 hours and from € 9.57. On Packlink you can send by choosing between Extra Large and Extra Large 12.00 services.

DHL

The deliveries that DHL Express offers are naturally both on the Italian territory and across the border. In both cases,
however, the service remains fundamentally the same, in terms of assistance, traceability and timing. DHL collects and
delivers in guaranteed times, and clearly specifies what the conditions are.

NEXIVE

With Nexive you can choose between the Complete, Espresso Drop Off and Espresso services. By choosing the Drop off
service, you can deliver the package to a Nexive collection point by selecting it at the time of shipment from our map.

STARPACK

For your shipments abroad, you can rely on Starpack services that allow you to send packages at affordable prices
without sacrificing quality. With Starpack, you can choose between Road Express and Air Courier services.

SKYNET

Send by Skynet courier in Italy and abroad. The Skynet rates that you will find on Packlink start at € 6.59 for national
shipments and € 13.30 for international shipments. The cost of shipping with Skynet will be discounted up to 70%.

See complete shipping carriers at [Shipping couriers](https://www.packlink.com/en-GB/couriers/).

## Search

Got to page for informational purposes only for browsers looking for keywords for this library included:
**Packlink nodejs api**,**Packlink nodejs sdk**,**Laravel packlink api**,**Laravel shipping api**,**Codeigniter packlink
api**
,**Codeigniter shipping api**,**Symfony packlink api**,**Symfony shipping api**,**Yii Framework packlink api**,**Yii
Framework shipping api**,**Cakenodejs packlink api**,**Cakenodejs shipping api**,**Zend Framework packlink api**,**Zend
Framework shipping api**.

## Contributing

Thank you for considering contributing to the MwSpace Company! The contribution can be found in
the [MwSpace Website](https://mwspace.com/it).

## Security Vulnerabilities

If you discover a security vulnerability within **mwspace/packlink-nodejs**, please send an e-mail to Dev team
via [dev@mwspace.com](mailto:dev@mwspace.com). All security vulnerabilities will be promptly addressed.

## License

The **packlink-js** is application programming interface licensed under
the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0.txt).
