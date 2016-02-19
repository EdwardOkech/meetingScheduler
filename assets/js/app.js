//create angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

//create our controller and wire it to firebase
.controller('mainController', function($scope, $firebase){

	// we make a connection to firebase
	var ref = new Firebase('https://glowing-torch-2277.firebaseio.com/days');
	// added days object to our firebase app's url,everything will be saved to this object db
	var fb = $firebase(ref);

	// sync our data frm firebase to an angular object
	var syncObject = fb.$asObject(); // we have all data in json form in our syncObject var

	// we do a three-way data binding to get info from our database into our scope var
	syncObject.$bindTo($scope, 'days');


	//function to set default fake data
	$scope.reset = function(){
		fb.$set({
			monday:{
				name: 'Monday',
				slots:{
					0900:{
						time: '9.00am',
						booked: false
					},
					0110:{
						time: '11:00am',
						booked: false
					},
					
				}
			},
			tuesday: {
                name: 'Tuesday',
                slots: {
                    0900: {
                        time: '9:00am',
                        booked: false
                    },
                    0110: {
                        time: '11:00am',
                        booked: false
                    }
                }
            },
            wednesday: {
                name: 'Wednesday',
                slots: {
                    0900: {
                        time: '9:00am',
                        booked: false
                    },
                    0110: {
                        time: '11:00am',
                        booked: false
                    }
                }
            },
            thursday: {
                name: 'Thursday',
                slots: {
                    0900: {
                        time: '9:00am',
                        booked: false
                    },
                    0110: {
                        time: '11:00am',
                        booked: false
                    }
                }
            },
            friday: {
                name: 'Friday',
                slots: {
                    0900: {
                        time: '9:00am',
                        booked: false
                    },
                    0110: {
                        time: '11:00am',
                        booked: false
                    }
                }
            }
		});
	};

});