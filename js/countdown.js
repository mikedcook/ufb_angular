var myApp = angular.module('myApp',[]);

myApp.controller('CountdownController',['$scope', '$interval', function($scope,$interval){
	
	$scope.now;
	$scope.setNow	=	function() { $scope.now	=	new Date(); }
	
	$scope.getNextGame = function(){
		for(game in $scope.games){
			var rawDate	=	Date.parse($scope.games[game].datetime);
			console.info('rawDate in getNextGame', rawDate);
			if(rawDate > $scope.now){
				return $scope.games[game];
			}
		}
	};
	
	$scope.isMidnight = function(gameDate){
		gameDate = new Date(gameDate);
		var theTime = (gameDate.getHours());
		if(theTime) {
			return true;
		}else{
			return false;
		}
	};
	
	$scope.init	=	function() {
		
		$scope.games = [
			{
				id:1,
				opponent:"Michigan",
				mascot:"Wolverines",
				datetime:new Date("Sep 3 2015 6:30 pm"),
				logo:"michigan.png",
				hometeam:"utah",
				result:"",
				score:""
			},
			{
				id:2,
				opponent:"Utah State",
				mascot:"Aggies",
				datetime:new Date("Sep 11 2015 7:00 pm"),
				logo:"utahstate.jpg",
				hometeam:"utah",
				result:"",
				score:""
			},
			{
				id:3,
				opponent:"Fresno State",
				mascot:"Bulldogs",
				datetime:new Date("Sep 19 2015 8:00 pm"),
				logo:"fresnostate.png",
				hometeam:"opp",
				result:"",
				score:""
			},
			{
				id:4,
				opponent:"Oregon",
				mascot:"Ducks",
				datetime:new Date("Sep 26 2015"),
				logo:"oregon.jpg",
				hometeam:"opp",
				result:"",
				score:""
			},
			{
				id:5,
				opponent:"Bye",
				mascot:"",
				datetime:new Date("Oct 3 2015"),
				logo:"",
				hometeam:"",
				result:"",
				score:""
			},
			{
				id:6,
				opponent:"Cal",
				mascot:"Golden Bears",
				datetime:new Date("Oct 10 2015"),
				logo:"cal.jpg",
				hometeam:"utah",
				result:"",
				score:""
			},
			{
				id:7,
				opponent:"Arizona State",
				mascot:"Sun Devils",
				datetime:new Date("Oct 17 2015"),
				logo:"arizonastate.jpg",
				hometeam:"utah",
				result:"",
				score:""
			},
			{
				id:8,
				opponent:"USC",
				mascot:"Trojans",
				datetime:new Date("Oct 24 2015"),
				logo:"usc.jpg",
				hometeam:"opp",
				result:"",
				score:""
			},
			{
				id:9,
				opponent:"Oregon State",
				mascot:"Wildcats",
				datetime:new Date("Oct 31 2015"),
				logo:"oregonstate.jpg",
				hometeam:"utah",
				result:"",
				score:""
			},
			{
				id:10,
				opponent:"Washington",
				mascot:"Huskies",
				datetime:new Date("Nov 7 2015"),
				logo:"washington.jpg",
				hometeam:"opp",
				result:"",
				score:""
			},
			{
				id:11,
				opponent:"Arizona",
				mascot:"Wildcats",
				datetime:new Date("Nov 14 2015"),
				logo:"arizona.jpg",
				hometeam:"utah",
				result:"",
				score:""
			},
			{
				id:12,
				opponent:"UCLA",
				mascot:"Bruins",
				datetime:new Date("Nov 21 2015"),
				logo:"ucla.jpg",
				hometeam:"utah",
				result:"",
				score:""
			},
			{
				id:13,
				opponent:"Colorado",
				mascot:"Buffalos",
				datetime:new Date("Nov 28 2015"),
				logo:"colorado.jpg",
				hometeam:"opp",
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