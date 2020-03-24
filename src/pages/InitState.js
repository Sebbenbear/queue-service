// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, {useEffect, useContext} from 'react'
// import { Analytics, Auth, API } from 'aws-amplify'
// import isoCountries from '../config/isoCountries'
import AppContext from '../context/AppContext'

const mySite = {
        "queue_data": {
          "normal_queue_length": "123",
          "priority_queue_length": "123",
          "correct_asof": "1585029652"
        },
        "site_state": "open",
        "hours_of_operation": {
          "sunday": {},
          "saturday": {},
          "tuesday": {
            "close": "16:30",
            "open": "08:30",
            "last_call": "15:30"
          },
          "wednesday": {
            "close": "16:30",
            "open": "08:30",
            "last_call": "15:30"
          },
          "thursday": {
            "close": "16:30",
            "open": "08:30",
            "last_call": "15:30"
          },
          "friday": {
            "close": "16:30",
            "open": "08:30",
            "last_call": "15:30"
          },
          "monday": {
            "close": "16:30",
            "open": "08:30",
            "last_call": "15:30"
          }
        },
        "longitude": "153.042932",
        "timezone": "Australia/Queensland",
        "latitude": "-27.664516",
        "site_id": "1234567890",
        "site_name": "Centrelink Xavier's House",
        "deployment_id": "1234567890"
      }

function InitState() {
    console.log('getting site')
    const {site, storeSite} = useContext(AppContext)

    useEffect(() => {
        if (site === null) {}
            const getSitesUrl = "https://ap8k1gvkx0.execute-api.ap-southeast-2.amazonaws.com/sites/site?site_id=1234567890&deployment_id=1234567890"
            // fetch(getSitesUrl, {mode: 'no-cors'})
            //     .then((response) => {
            //         console.log(response)
            //         return response.json();
            //     })
            //     .then((data) => {
            //         console.log(data);
            //     });
            console.log('useEffect: site')
            console.log(mySite)
            storeSite(mySite);

            // API.get('awsamplifyecommerceapi', '/items')
            // .then(response => {
            //     addItems(response.data)
            // })
            // .catch(error => {
            //     console.log(error.response)
            // })
    }, [site, storeSite])

    // useEffect(() => {
    //     Auth.currentAuthenticatedUser()
    //         .then(data => {
    //             if (user === null) {
    //                 if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    //                     console.log(data)
    //                 }

    //                 var countryCode = null

    //                 if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    //                     console.log('Updating Pinpoint endpoint [InitState]')
    //                 }

    //                 if (isoCountries.hasOwnProperty(data.attributes['custom:country'])) {
    //                     countryCode = isoCountries[data.attributes['custom:country']]
    //                 }

    //                 Analytics.updateEndpoint({
    //                     ChannelType: 'EMAIL',
    //                     Address: data.attributes.email,
    //                     location: {
    //                         city: data.attributes['custom:city'],
    //                         country: countryCode,
    //                         postalCode: data.attributes['custom:postcode'],
    //                         region: data.attributes['custom:state']
    //                     },
    //                     optOut: 'NONE',
    //                     attributes: {
    //                         firstName: [data.attributes.given_name],
    //                         hasShoppingCart: ['false'],
    //                         completedOrder: ['false']
    //                     },
    //                     metrics: {
    //                         itemsInCart: 0,
    //                         orderNumber: "0"
    //                     }
    //                 })

    //                 storeUser(data.attributes)
    //             }

    //             if (user != null) {
                    
    //             }
    //         })
    // }, [user, storeUser])

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export default InitState