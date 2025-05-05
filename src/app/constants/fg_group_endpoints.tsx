import { FG_GROUP_BASE_URL } from './base_URL'

// 🌟----------------- FG Group -----------------🌟
export const BASE_URL = FG_GROUP_BASE_URL
const AdminV1Route = `${BASE_URL}/admin/v1`
const PublicV1Route = `${BASE_URL}/public/v1`

// Account
export const Login = `${AdminV1Route}/login`
export const LoginWithEmailOTP = `${AdminV1Route}/login-with-otp`
export const VerifyEmailOTP = `${AdminV1Route}/login-with-otp/verify`
export const CreateAdminAccount = `${AdminV1Route}/create-admin`
export const GetProfile = `${AdminV1Route}/get-profile`
export const UpdateProfile = `${AdminV1Route}/update-profile`
export const ChangePassword = `${AdminV1Route}/change-password`
export const GetUniversalAccessToken = `${AdminV1Route}/get-universal-token`
export const FileUpload = `${AdminV1Route}/file-upload`

// Account/Authenticator [MFA]
const AccountAuthenticatorRoute = `${AdminV1Route}/mfa`

export const AddAuthenticatorSecret = `${AccountAuthenticatorRoute}/authenticator/add-secret`
export const RemoveAuthenticatorSecret = `${AccountAuthenticatorRoute}/authenticator/remove-secret`

// Admin User
const AdminUserRoute = `${AdminV1Route}/admin-user`

export const GetAdminUsers = `${AdminUserRoute}/get-admin`
export const UpdateAdminUsers = `${AdminUserRoute}/update-profile`
export const ResetAdminUserPassword = `${AdminUserRoute}/reset-password`
export const RemoveAdminUser = `${AdminUserRoute}/remove-admin`

// Books
const BookRoute = `${AdminV1Route}/book`

export const CreateBook = `${BookRoute}/create`
export const UpdateBook = `${BookRoute}/update`
export const RemoveBook = `${BookRoute}/remove`
export const GetBooks = `${BookRoute}/get`

// Dashboard
const DashboardRoute = `${AdminV1Route}/dashboard`

export const GeneralDashboardStats = `${DashboardRoute}/get-dashboard`
export const StudentDashboardStats = `${DashboardRoute}/get-student-stats`

// Order
const OrderRoute = `${AdminV1Route}/orders`

export const GetOrders = `${OrderRoute}/get`
export const FetchPaymentDetails = `${OrderRoute}/get-payment`
export const UpdateOrder = `${OrderRoute}/update-order`
export const SetBookTrackingStatus = `${BookRoute}/set-tracking-status`

// Product
const ProductRoute = `${AdminV1Route}/medical-product`

export const AddProduct = `${ProductRoute}/add`
export const UpdateProduct = `${ProductRoute}/update`
export const GetProduct = `${ProductRoute}/get`

// Product/Product Review
const ProductReviewRoute = `${ProductRoute}/product-review`

export const GetProductReviews = `${ProductReviewRoute}/get`
export const UpdateProductReview = `${ProductReviewRoute}/update`

// Users
const UserRoutes = `${AdminV1Route}/user`

export const GetUsers = `${UserRoutes}/get`
export const GetStudentUsers = `${UserRoutes}/get-student-user`
export const UpdateUser = `${UserRoutes}/update`
export const LockUnlockUser = `${UserRoutes}/lock`
export const RemoveUser = `${UserRoutes}/remove`
export const CreateUser = `${UserRoutes}/create`
export const SendFCMNotification = `${UserRoutes}/send-fcm-notification`
export const GetUserDietPreference = `${AdminV1Route}/diet-preference/get`

//Product Cart
export const GetProductCart = `${AdminV1Route}/product-cart/get`

// Invoice
const InvoiceRoute = `${AdminV1Route}/invoice`

export const GetInvoices = `${InvoiceRoute}/get`
export const CreateInvoice = `${InvoiceRoute}/create`
export const UpdateInvoice = `${InvoiceRoute}/update`
export const DeleteInvoice = `${InvoiceRoute}/delete`
export const GetNextInvoiceSequence = `${InvoiceRoute}/get-next-invoice`
export const GetInvoiceStats = `${InvoiceRoute}/stats`

// Insights APIs (Individual modules, requires common admin access)
export const GetInsights = `${AdminV1Route}/insights`

// Insights APIs > FG Group
const InsightFGGroupRoute = `${GetInsights}/fg-group`

export const GetOrdersInsights = `${InsightFGGroupRoute}/orders`
export const GetInvoiceInsights = `${InsightFGGroupRoute}/invoice`
export const GetUsersStats = `${InsightFGGroupRoute}/users`
export const GetStudentsStats = `${InsightFGGroupRoute}/students`
export const GetExpenseStats = `${InsightFGGroupRoute}/expense`

// Expense
const ExpenseRoute = `${AdminV1Route}/expense`

export const GetExpense = `${ExpenseRoute}/get`
export const CreateExpense = `${ExpenseRoute}/create`
export const UpdateExpense = `${ExpenseRoute}/update`
export const DeleteExpense = `${ExpenseRoute}/delete`
export const GetNextExpenseSequence = `${ExpenseRoute}/get-next-expense`

// Order Cart
const OrderCartRoute = `${AdminV1Route}/order-cart`

export const GetOrderCart = `${OrderCartRoute}/get`
