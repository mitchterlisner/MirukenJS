new function(){
	var sampleApp = new base2.Package(this, {
		name:    'sampleApp',
		imports: 'miruken.mvc',
		exports: 'ModalsController'
	});

	eval(this.imports);

	var ModalsController = Controller.extend({
        $inject: ['$rootContext'],
        constructor: function ($rootContext) {
            $rootContext.addHandlers(new BootstrapModalProvider);
        },
		showModal: function () {
            var viewModal = {
                templateUrl:  'app/modals/modalContent.html',
                controller:   'ModalContentController as vm'
            };
            ViewRegion(this.content.context.modal({title: 'Hooray!'}))
                       .present(viewModal);
		}
	});

	eval(this.exports);
}
