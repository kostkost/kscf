// Google Map

$(function () {

	var map = new GMaps({

	el: "#map",

        lat: 50.4333900,

        lng: 30.5217400,

          zoom: 15,

          zoomControl : false,

		  scrollwheel: false,

		controls : false,

          zoomControlOpt: {

            style : "BIG",

            position: "TOP_LEFT"

          },

          panControl : false,

          streetViewControl : false,

          mapTypeControl: false,

          overviewMapControl: false,

                    styles: [

    {

        "featureType": "landscape",

        "stylers": [

            {

                "saturation": -100

            },

            {

                "lightness": 65

            },

            {

                "visibility": "on"

            }

        ]

    },

    {

        "featureType": "poi",

        "stylers": [

            {

                "saturation": -100

            },

            {

                "lightness": 51

            },

            {

                "visibility": "simplified"

            }

        ]

    },

    {

        "featureType": "road.highway",

        "stylers": [

            {

                "saturation": -100

            },

            {

                "visibility": "simplified"

            }

        ]

    },

    {

        "featureType": "road.arterial",

        "stylers": [

            {

                "saturation": -100

            },

            {

                "lightness": 30

            },

            {

                "visibility": "on"

            }

        ]

    },

    {

        "featureType": "road.local",

        "stylers": [

            {

                "saturation": -100

            },

            {

                "lightness": 40

            },

            {

                "visibility": "on"

            }

        ]

    },

    {

        "featureType": "transit",

        "stylers": [

            {

                "saturation": -100

            },

            {

                "visibility": "simplified"

            }

        ]

    },

    {

        "featureType": "administrative.province",

        "stylers": [

            {

                "visibility": "off"

            }

        ]

    },

    {

        "featureType": "water",

        "elementType": "labels",

        "stylers": [

            {

                "visibility": "on"

            },

            {

                "lightness": -25

            },

            {

                "saturation": -100

            }

        ]

    },

    {

        "featureType": "water",

        "elementType": "geometry",

        "stylers": [

            {

                "hue": "#ffff00"

            },

            {

                "lightness": -25

            },

            {

                "saturation": -97

            }

        ]

    }

]





      });



      map.addMarker({

        lat: 50.4333940,

        lng: 30.5218650,

        icon: "demo/mapicon2.png"

      });

});

