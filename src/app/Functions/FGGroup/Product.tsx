import { getAPIHeaders } from '../../../_metronic/helpers/AuthToken'
import { APIDelete, APIGet, APIPatch, APIPost } from '../../../_metronic/helpers/Utils'
import * as FGGroupEndpoints from '../../constants/fg_group_endpoints'

export function AddProduct(body: {
	name: string
	display_image?: string
	price: number
	private_note?: string
}): Promise<FGGroupAPIResponse> {
	return APIPost(FGGroupEndpoints.AddProduct, getAPIHeaders('fg_group'), undefined, body)
}

export function UpdateProduct(body: {
	id: string
	name?: string
	display_image?: string
	price?: number
}): Promise<FGGroupAPIResponse> {
	return APIPost(FGGroupEndpoints.UpdateProduct, getAPIHeaders('fg_group'), undefined, body)
}

export function GetProduct(
	query?: { id?: string } & FGGroupSearchOptions & FGGroupPaginationOptions & FGGroupSortOptions
): Promise<FGGroupAPIResponse> {
	return APIGet(FGGroupEndpoints.GetProduct, getAPIHeaders('fg_group'), query)
}

/**
 *
 * @deprecated The method must not be used
 */
export function GetProductCart(): Promise<FGGroupAPIResponse> {
	console.error('[DEPRECATED] Use GetOrderCart() instead of GetProductCart()')
	return APIGet(FGGroupEndpoints.GetProductCart, getAPIHeaders('fg_group'))
}
