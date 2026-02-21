export type WACallUpdateType = 'offer' | 'ringing' | 'timeout' | 'reject' | 'accept' | 'terminate'

export type WACallEvent = {
	chatId: string
	from: string
	callerPn?: string
	isGroup?: boolean
	groupJid?: string
	id: string
	date: Date
	isVideo?: boolean
	status: WACallUpdateType
	offline: boolean
	latencyMs?: number
}

export type CallInitOptions = {
	/** enable audio for the call offer (video support added later) */
	audio?: boolean
}

export type CallInitResult = {
	callId: string
	status: 'ringing' | 'failed'
}
