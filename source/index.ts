import { env } from 'process'

/** The port that the environment wishes for you to use. */
export const PORT: number | null =
	Number(
		env.PORT ||
			env.OPENSHIFT_NODEJS_PORT ||
			env.OPENSHIFT_IOJS_PORT ||
			env.VCAP_APP_PORT ||
			env.VMC_APP_PORT,
	) || null

/** The hostname that the environment wishes for you to use. */
export const HOSTNAME: string | null =
	String(
		env.HOSTNAME ||
			env.OPENSHIFT_NODEJS_IP ||
			env.OPENSHIFT_IOJS_IP ||
			env.VCAP_APP_HOST ||
			env.VMC_APP_HOST,
	) || null
