module.exports.PORT =
	process.env.PORT /* Custom, Heroku, Nodejitsu */
	|| process.env.OPENSHIFT_NODEJS_PORT /* OpenShift Official Cartridge */
	|| process.env.OPENSHIFT_IOJS_PORT /* OpenShift: https://github.com/connyay/openshift-iojs */
	|| process.env.VCAP_APP_PORT /* AppFog */
	|| process.env.VMC_APP_PORT /* CloudFoundry */
	|| null

module.exports.HOSTNAME =
	process.env.HOSTNAME /* Custom */
	|| process.env.OPENSHIFT_NODEJS_IP /* OpenShift Official Cartridge */
	|| process.env.OPENSHIFT_IOJS_IP /* OpenShift: https://github.com/connyay/openshift-iojs */
	|| null
