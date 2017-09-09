"use strict";

$(document).ready(() => {

  $(".menuOption").click(() => { $(".intro").css("zIndex", -1) });

  const fadeInRight = (selector, time) => {
    $(selector).css("color", "#FFF");

    $(selector).animate({
      left: "0",
    }, {
      duration: time,
      start: () => { $(selector).fadeIn(250) }
    });
  }

  setTimeout(function () { $(".hometext").fadeIn(2000) }, 1000);
  setTimeout(function () { fadeInRight(".menuOption[data='4']", 50) }, 200);
  setTimeout(function () { fadeInRight(".menuOption[data='3']", 50) }, 400);
  setTimeout(function () { fadeInRight(".menuOption[data='2']", 50) }, 600);
  setTimeout(function () { fadeInRight(".menuOption[data='1']", 50) }, 800);
  setTimeout(function () { fadeInRight(".menuOption[data='0']", 50) }, 1000);

});

const app = angular.module("app", []);

app.controller("main", ["$scope", "$timeout", function($scope, $timeout){
  $scope.company = "entertainment ready";
  $scope.navigate = (e) => {
    const className = e.target.className;
    const selector = e.target.attributes.data.nodeValue;
    console.log(selector)
    if (className.includes("homeNav")) {
      $scope.movePage(0);
      $scope.navHighlight(0);
    } else if (className.includes("aboutNav")) {
      $scope.movePage(-90);
      $scope.navHighlight(1);
    } else if (className.includes("eventNav")) {
      $scope.movePage(-180);
      $scope.navHighlight(2);
    } else if (className.includes("membershipsNav")) {
      $scope.movePage(-270);
      $scope.navHighlight(3);
    } else if (className.includes("partnerships")) {
      $scope.movePage(-360);
      $scope.navHighlight(4);
    } else if (className.includes("contactNav")) {
      $scope.movePage(-450);
      $scope.navHighlight(5);
    }
  };
  $scope.movePage = (location) => {
    $(".pages").fadeOut("200");
    $(".action").css("top", location + "vh");
    $timeout(() => {
      $(".picSection").css("top", location + "vh");
    }, 500);
    $timeout(() => {
      $(".pages").fadeIn("200");
    }, 1200);
  }
  $scope.navHighlight = (data) => {
    $(".menuOption").removeClass("menuHighlight");
    $(".menuOption[data="+data+"]").addClass("menuHighlight");
  }
}]);
