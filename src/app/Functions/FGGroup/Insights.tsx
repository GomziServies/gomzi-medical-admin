import { getAPIHeaders } from '../../../_metronic/helpers/AuthToken'
import { APIGet, APIPost } from '../../../_metronic/helpers/Utils'
import * as FGGroupEndpoints from '../../constants/fg_group_endpoints'

type FacebookGraphAPIInsightsQueryParams = {
	fields?: string
	breakdowns?: string
	action_attribution_windows?: string
	action_breakdowns?: string
	action_report_time?: string
	date_preset?: string
	default_summary?: string
	export_columns?: string
	filtering?: string
	level?: string
	time_range?: string
	product_id_limit?: string
	sort?: string
	summary?: string
	summary_action_breakdowns?: string
	time_increment?: string
	use_account_attribution_setting?: string
	use_unified_attribution_setting?: string
	limit?: string
	after?: string
}

// --- FG Group ---
export function GetOrdersInsights(query?: {
	item_type?: string | string[]
	currency: string | string[]
	purchase_mode?: string | string[]
	gateway?: string | string[]
	from_date?: Date
	to_date?: Date
	order_status?: string | string[]
	receipt_id?: string | string[]
	user_id?: string | string[]
	order_id?: string | string[]
	key?: string | string[] // format: item_type#order_status#currency#purchase_mode#(gateway) Check API response for detailed information
}): Promise<FGGroupAPIResponse> {
	return APIGet(FGGroupEndpoints.GetOrdersInsights, getAPIHeaders('fg_group'), query)
}

export function GetInvoiceInsights(query?: {
	from_date?: Date
	to_date?: Date
	createdAt_from?: Date
	createdAt_to?: Date
	email?: string | string[]
	mobile?: string | string[]
	state?: string | string[]
	city?: string | string[]
	pin_code?: string | string[]
	item_name?: string | string[]
	bank_account_type?: string | string[]
	bank_branch_code?: string | string[]
	payment_method?: string | string[]
	invoice_category?: string | string[]
}): Promise<FGGroupAPIResponse> {
	return APIGet(FGGroupEndpoints.GetInvoiceInsights, getAPIHeaders('fg_group'), query)
}

export function GetExpenseInsights(query?: {
	from_date?: Date
	to_date?: Date
	createdAt_from?: Date
	createdAt_to?: Date
	item_name?: string | string[]
	payment_method?: string | string[]
	expense_category?: string | string[]
	expense_company?: string | string[]
}): Promise<FGGroupAPIResponse> {
	return APIGet(FGGroupEndpoints.GetExpenseStats, getAPIHeaders('fg_group'), query)
}

export function GetUserStats(query?: { reset_cache?: boolean }): Promise<FGGroupAPIResponse> {
	return APIGet(FGGroupEndpoints.GetUsersStats, getAPIHeaders('fg_group'), query)
}

export function GetStudentsStats(query?: { reset_cache?: boolean }): Promise<FGGroupAPIResponse> {
	return APIGet(FGGroupEndpoints.GetStudentsStats, getAPIHeaders('fg_group'), query)
}
