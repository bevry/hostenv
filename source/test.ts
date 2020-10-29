import kava from 'kava'
import { PORT, HOSTNAME } from './index.js'

kava.suite('hostenv', function (suite, test) {
	test('imported fine', function () {
		console.log({ PORT, HOSTNAME })
	})
})
