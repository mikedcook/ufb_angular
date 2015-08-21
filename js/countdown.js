var myApp = angular.module('myApp',[]);

myApp.controller('CountdownController',['$scope', '$interval', function($scope,$interval){
	
	$scope.now;
	$scope.setNow	=	function() { $scope.now	=	new Date(); }
	
	$scope.getNextGame = function(){
		for(game in $scope.games){
			var rawDate	=	Date.parse($scope.games[game].date +' '+ $scope.games[game].time);
			console.info('rawDate in getNextGame', rawDate);
			if(rawDate > $scope.now){
				$scope.games[game].datetime	=	rawDate;
				return $scope.games[game];
			}
		}
	};
	
	$scope.init	=	function() {
		
		$scope.games = [
			{
				id:1,
				opponent:"Utah State",
				mascot:"Aggies",
				date:"Aug 29, 2013",
				time:"6:00 pm",
				logo:"utahstate.jpg",
				hometeam:"utah",
				result:"W",
				score:"30-26"
			},
			{
				id:2,
				opponent:"Weber State",
				mascot:"Wildcats",
				date:"Sept 7, 2013",
				time:"12:00 pm",
				logo:"weberstate.jpg",
				hometeam:"utah",
				result:"W",
				score:"70-7"
			},
			{
				id:3,
				opponent:"Oregon State",
				mascot:"Beavers",
				date:"Sept 14, 2013",
				time:"8:00 pm",
				logo:"oregonstate.jpg",
				hometeam:"utah",
				result:"L",
				score:"48-51 OT"
			},
			{
				id:4,
				opponent:"TDS",
				mascot:"Cougars",
				date:"Sept 21, 2013",
				time:"8:15 pm",
				logo:"byu.jpg",
				hometeam:"opp",
				result:"W",
				score:"20-13"
			},
			{
				id:5,
				opponent:"UCLA",
				mascot:"Bruins",
				date:"Oct 3, 2013",
				time:"8:00 pm",
				logo:"ucla.jpg",
				hometeam:"utah",
				result:"L",
				score:"24-27"
			},
			{
				id:6,
				opponent:"Stanford",
				mascot:"Cardinal",
				date:"Oct 12, 2013",
				time:"4:00 pm",
				logo:"stanford.jpg",
				hometeam:"utah",
				result:"W",
				score:"27-21"
			},
			{
				id:7,
				opponent:"Arizona",
				mascot:"Wildcats",
				date:"Oct 19, 2013",
				time:"8:00 pm",
				logo:"arizona.jpg",
				hometeam:"opp",
				result:"L",
				score:"35-24"
			},
			{
				id:8,
				opponent:"USC",
				mascot:"Trojans",
				date:"Oct 26, 2013",
				time:"2:00 pm",
				logo:"usc.jpg",
				hometeam:"opp",
				result:"L",
				score:"19-3"
			},
			{
				id:9,
				opponent:"Arizona State",
				mascot:"Wildcats",
				date:"Nov 9, 2013",
				time:"2:00 pm",
				logo:"arizonastate.jpg",
				hometeam:"utah",
				result:"L",
				score:"20-19"
			},
			{
				id:10,
				opponent:"Michigan",
				mascot:"Wolverines",
				date:"Sep 3, 2015",
				time:"6:30 pm",
				logo:"michigan.png",
				hometeam:"utah",
				result:"",
				score:""
			},
			{
				id:11,
				opponent:"Utah State",
				mascot:"Aggies",
				date:"Sep 11, 2015",
				time:"7:00 pm",
				logo:"utahstate.jpg",
				hometeam:"utah",
				result:"",
				score:""
			}
		];
		
		$scope.setNow();
		$scope.nextGame = $scope.getNextGame();
		
	}
	
	$interval($scope.setNow, 1000);
	
	$scope.gametime	=	function() {
		var t	=	{};
		var s	=	($scope.nextGame.datetime - $scope.now) / 1000;
		
		t.seconds	=	Math.floor(s % 60); s /= 60;
		t.minutes	=	Math.floor(s % 60); s /= 60;
		t.hours	=	Math.floor(s % 24); s /= 24;
		t.days	=	Math.floor(s);
		
		return t;
	}

}]);