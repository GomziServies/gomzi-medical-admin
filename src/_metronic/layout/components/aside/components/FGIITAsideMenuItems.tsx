/* eslint-disable react/jsx-no-target-blank */
import {
	faCartArrowDown,
	faCartShopping,
	faJar,
	faUserCog,
	faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { AsideMenuItem } from '../AsideMenuItem'

export function FGIITAsideMenuItems() {
	return (
		<>
			<AsideMenuItem
				to='admin-user'
				Icon={faUserCog}
				title='Admin User'
			/>
			<AsideMenuItem
				to='product'
				title='Products'
				Icon={faJar}
			/>

			{/* Invoice start*/}
			{/* <AsideMenuItemWithSub
				to=''
				title='Invoice'
				Icon={faFileInvoice}>
				<AsideMenuItem
					to='invoice/create'
					title='Create Invoice'
					hasBullet={true}
				/>
				<AsideMenuItem
					to='invoice/list'
					title='Invoice List'
					hasBullet={true}
				/>
			</AsideMenuItemWithSub> */}
			{/* Invoice End*/}

			{/* FGIIT start*/}
			{/* <AsideMenuItemWithSub
				to=''
				title='FGIIT'
				Icon={faBook}>
				<AsideMenuItem
					to='books'
					title='Books'
					hasBullet={true}
				/>
			</AsideMenuItemWithSub> */}
			{/* FGIIT End*/}

			{/* Users start*/}
			{/* <AsideMenuItemWithSub
				to=''
				title='Users'
				Icon={faUsers}> */}
			<AsideMenuItem
				to='users'
				title='Users'
				Icon={faUsers}
			/>
			{/* </AsideMenuItemWithSub> */}
			{/* Users End*/}

			{/* Orders start*/}
			<AsideMenuItem
				to='all-order'
				title='Orders'
				Icon={faCartArrowDown}
			/>
			{/* Orders End*/}

			{/* Cart start*/}
			{/* <AsideMenuItemWithSub
				to=''
				title='Cart'
				Icon={faCartArrowDown}> */}
			<AsideMenuItem
				to='/fgiit/cart/add-to-cart'
				title='User Cart'
				Icon={faCartShopping}
			/>
			{/* <AsideMenuItem
					to='/fgiit/cart/abandoned-list'
					title='Abandoned Checkout'
					Icon={faJar}
				/> */}
			{/* </AsideMenuItemWithSub> */}
			{/* Cart End*/}
		</>
	)
}
