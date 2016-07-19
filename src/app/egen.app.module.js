(function (angular) {
    'use strict';

    angular
        .module('egen.app', [
            'ui-notification',

           // 'egen.app.phoneFilter',
            'egen.app.header',
            //'egen.app.footer',
            'signup',
            'signin',
            'homepage'

        ])
        .config(moduleConfig)
        .run(moduleRun);

    function moduleConfig($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.when('/', '/app');

        $urlRouterProvider.otherwise(function ($injector) {
            $injector.get('$state').go("egen.404");
        });

        $stateProvider
            .state('egen', {
                url: '/app',
                views: {
                    '@': {
                        templateUrl: 'app/egen.app.tmpl.html'
                    },
                    'header@egen': {
                        templateUrl: 'app/features/header/header.tmpl.html',
                        controller: 'HeaderController',
                        controllerAs: 'headerVm'
                    },
                    'footer@egen': {
                        templateUrl: 'app/features/footer/footer.tmpl.html',
                        controller: 'FooterController',
                        controllerAs: 'footerVm'
                    }

                }
            })
          .state('login', {
            url: '/login',
            views: {
              '@': {
                templateUrl: 'app/features/login/login.html'
              },
              'header@login': {
                templateUrl: 'app/features/header/header.tmpl.html'
              }
            }

          })
          .state('signup', {
            url: '/signup',
            views: {
              '@': {
                templateUrl: 'app/features/signup/signup.html',
                controller: 'SignupController',
                controllerAs: 'signup'
              },
              'header@signup': {
                templateUrl: 'app/features/header/header.tmpl.html'
              }
            }
          })

          .state('home', {
               resolve: {
              check : function ($location, $rootScope) {
                console.log($rootScope.auth);
                if (!$rootScope.auth){
                  $location.path('/login');
                }
              }
            },
            url : '/home',
            views: {
              '@': {
                templateUrl: 'app/features/home/home.html',
                controller: 'MainController'
              },
              'header@home': {
                templateUrl: 'app/features/home/homeHeader.html'
              },
              // 'section@home': {
              //   templateUrl: 'app/features/home/catalogMovies.html'
              // },
              'section@home': {
                templateUrl: 'app/features/home/catalog.html'
              }
            }
          }
          )
            .state('egen.404', {
                templateUrl: 'app/egen.404.tmpl.html'
            });
    }

    function moduleRun($rootScope) {
      $rootScope.auth = false;
    }

})(angular);
