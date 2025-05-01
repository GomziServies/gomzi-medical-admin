import { Route, Routes } from 'react-router-dom'
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import AbandonedList from '../pages/gomzi-nutrition/abandoned-list/abandoned-list'
import AddToCart from '../pages/gomzi-nutrition/add-to-cart/add-to-cart'
import { GomziNutritionDashboard } from '../pages/gomzi-nutrition/dashboard/DashboardWrapper'
import NutritionCreateInvoice from '../pages/gomzi-nutrition/invoice/create-invoice'
import NutritionTotalSalesList from '../pages/gomzi-nutrition/invoice/total-sales'
import NutritionUpdateInvoice from '../pages/gomzi-nutrition/invoice/update-invoice'
import { NutritionOrderView } from '../pages/gomzi-nutrition/product/all-order/order-view'
import ProductOrder from '../pages/gomzi-nutrition/product/product-order'
import { ProductOrderView } from '../pages/gomzi-nutrition/product/product-order-view'

const GomziNutritionPrivateRoutes = () => {
	return (
		<Routes>
			<Route element={<MasterLayout />}>
				<Route
					path='dashboard'
					element={<GomziNutritionDashboard />}
				/>
				<Route
					path='/add-to-cart'
					element={<AddToCart />}
				/>
				<Route
					path='/abandoned-list'
					element={<AbandonedList />}
				/>
				<Route
					path='/create-invoice-nutrition'
					element={<NutritionCreateInvoice />}
				/>
				<Route
					path='/update-invoice-nutrition'
					element={<NutritionUpdateInvoice />}
				/>
				<Route
					path='/nutrition-invoice'
					element={<NutritionTotalSalesList />}
				/>
				<Route
					path='product-order'
					element={<ProductOrder />}
				/>
				<Route
					path='product-order-view'
					element={<ProductOrderView />}
				/>
				<Route
					path='/all-order/view-order'
					element={<NutritionOrderView />}
				/>
			</Route>
		</Routes>
	)
}

// const SuspensedView: FC<WithChildren> = ({ children }) => {
// 	const baseColor = getCSSVariableValue('--bs-primary')
// 	TopBarProgress.config({
// 		barColors: {
// 			'0': baseColor,
// 		},
// 		barThickness: 1,
// 		shadowBlur: 5,
// 	})
// 	return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
// }

export { GomziNutritionPrivateRoutes }
