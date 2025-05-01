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

// Books Feedback
export const GetBooksFeedback = `${AdminV1Route}/feedback/books` // GET
export const updateBooksFeedback = `${AdminV1Route}/feedback/book` // POST

// Business Listing
const BusinessListingRoute = `${BASE_URL}/business-listing`

export const AddListing = `${BusinessListingRoute}/create-listing`
export const UpdateListing = `${BusinessListingRoute}/update-listing`
export const GetAdminBusinessListing = `${BusinessListingRoute}/get-listing-for-admin`
export const GetBusinessListing = `${BusinessListingRoute}/get-listing-admin`
export const RemoveListing = `${BusinessListingRoute}/delete-listing`
export const ListingAction = `${BusinessListingRoute}/listing-action`

// Contact Inquiry

const ContactInquiryRoute = AdminV1Route + '/contact-inquiry'

export const GetContactInquiry = `${ContactInquiryRoute}/get`
export const GetRTPConsultancyInquiry = `${ContactInquiryRoute}/get-rtp-consultancy`
export const UpdateInquiryReadReceipt = `${ContactInquiryRoute}/read-receipt`

// Dashboard
const DashboardRoute = `${AdminV1Route}/dashboard`

export const GeneralDashboardStats = `${DashboardRoute}/get-dashboard`
export const StudentDashboardStats = `${DashboardRoute}/get-student-stats`

// Digital Plan
const DigitalPlanRoute = `${AdminV1Route}/digital-plan`

export const GetDigitalPlans = `${DigitalPlanRoute}/get`
export const UpdateDigitalPlan = `${DigitalPlanRoute}/update`
export const RemoveDigitalPlan = `${DigitalPlanRoute}/remove`

// E-Books
const EBooksRoute = `${AdminV1Route}/ebook`

export const CreateEBook = `${EBooksRoute}/create-ebook`
export const UpdateEBook = `${EBooksRoute}/update-ebook`
export const RemoveEBook = `${EBooksRoute}/remove-ebook`
export const GetEBooks = `${EBooksRoute}/get-ebook`

// Employee Application
const EmployeeApplicationRoute = `${AdminV1Route}/employee-application`

export const GetEmployeeApplications = `${EmployeeApplicationRoute}/get-application`

// Employer Application
const EmployerApplicationRoute = `${AdminV1Route}/employer-application`

export const GetEmployerApplications = `${EmployerApplicationRoute}/get-application`

// Fitness Plan
const FitnessPlanRoute = `${AdminV1Route}/fitness-plan`

export const CreateFitnessPlan = `${FitnessPlanRoute}/create`
export const UpdateFitnessPlan = `${FitnessPlanRoute}/update`
export const RemoveFitnessPlan = `${FitnessPlanRoute}/remove`
export const GetFitnessPlans = `${FitnessPlanRoute}/get`

// Fitness Course
const FitnessCourseRoute = `${AdminV1Route}/fitness-course`

export const CreateFitnessCourse = `${FitnessCourseRoute}/create`
export const UpdateFitnessCourse = `${FitnessCourseRoute}/update`
export const RemoveFitnessCourse = `${FitnessCourseRoute}/remove`
export const GetFitnessCourse = `${FitnessCourseRoute}/get`

// Fitness Course Lectures
const CourseLectureRoute = `${AdminV1Route}/fitness-course-lecture`

export const AddFitnessCourseLecture = `${CourseLectureRoute}/create`
export const UpdateFitnessCourseLecture = `${CourseLectureRoute}/update`
export const RemoveFitnessCourseLecture = `${CourseLectureRoute}/delete`
export const GetFitnessCourseLectures = `${CourseLectureRoute}/get`

// Fitness Course Exam [FCE]
const FitnessCourseExamRoute = `${AdminV1Route}/fitness-course-exam`

export const CreateFitnessCourseExam = `${FitnessCourseExamRoute}/create`
export const UpdateFitnessCourseExam = `${FitnessCourseExamRoute}/update`
export const RemoveFitnessCourseExam = `${FitnessCourseExamRoute}/remove`
export const GetFitnessCourseExam = `${FitnessCourseExamRoute}/get`
export const GetFitnessCourseResultExam = `${FitnessCourseExamRoute}/result/get`
export const UpdateFCEQuestion = `${FitnessCourseExamRoute}/question/update`
export const DeleteFCEQuestion = `${FitnessCourseExamRoute}/question/delete`

// Fitness Course Exam/Allocate
const FCEAllocationRoute = `${FitnessCourseExamRoute}/allocate`

export const FCEAllocate = `${FCEAllocationRoute}/assign`
export const UpdateFCEAllocation = `${FCEAllocationRoute}/update`
export const GetFCEAllocations = `${FCEAllocationRoute}/get`
export const RemoveFCEAllocation = `${FCEAllocationRoute}/remove`

// Fitness Course Exam/Result
const FCEResultRoute = `${FitnessCourseExamRoute}/result`

export const GetFCEResults = `${FCEResultRoute}/get`

// Fitness Course Feedback
export const GetFitnessCourseFeedback = `${AdminV1Route}/feedback/course` // GET
export const UpdateFitnessCourseFeedback = `${AdminV1Route}/feedback/course` // POST

// Free Session

export const GetFreeSessionRegistrations = `${AdminV1Route}/free-session/get-registration`

// Franchise
const FranchiseRoute = `${AdminV1Route}/franchise`

export const GetFranchise = `${FranchiseRoute}/get`
export const CreateFranchise = `${FranchiseRoute}/create`
export const UpdateFranchise = `${FranchiseRoute}/update`
export const RemoveFranchise = `${FranchiseRoute}/delete`

// Job Placement
const JobPlacementRoute = `${AdminV1Route}/job-placement`

export const GetJobPlacement = `${JobPlacementRoute}/get`
export const CreateJobPlacement = `${JobPlacementRoute}/create`
export const UpdateJobPlacement = `${JobPlacementRoute}/update`
export const RemoveJobPlacement = `${JobPlacementRoute}/remove`

// Order
const OrderRoute = `${AdminV1Route}/orders`

export const GetOrders = `${OrderRoute}/get`
export const FetchPaymentDetails = `${OrderRoute}/get-payment`
export const UpdateOrder = `${OrderRoute}/update-order`
export const SetBookTrackingStatus = `${BookRoute}/set-tracking-status`

// Project
const ProjectRoute = `${AdminV1Route}/projects`

export const CreateProject = `${ProjectRoute}/create`
export const UpdateProject = `${ProjectRoute}/update`
export const RemoveProject = `${ProjectRoute}/remove`
export const GetProjects = `${ProjectRoute}/get`
export const GetSubmission = `${ProjectRoute}/get-submission`
export const GetProjectSubmission = `${ProjectRoute}/get-projects-submissions`
export const UpdateProjectSubmission = `${ProjectRoute}/update-submission`

// Product
const ProductRoute = `${AdminV1Route}/product`

export const AddProduct = `${ProductRoute}/add`
export const UpdateProduct = `${ProductRoute}/update`
export const GetProduct = `${ProductRoute}/get`
export const SetProductTrackingStatus = `${ProductRoute}/set-tracking-status`
export const AddProductVariation = `${ProductRoute}/variation/add`
export const UpdateProductVariation = `${ProductRoute}/variation/update`
export const RemoveProductVariation = `${ProductRoute}/variation/remove`

// Product/Product Review
const ProductReviewRoute = `${ProductRoute}/product-review`

export const GetProductReviews = `${ProductReviewRoute}/get`
export const UpdateProductReview = `${ProductReviewRoute}/update`

// Product/Project Feedback
const ProductFeedbackRoute = `${ProductRoute}/feedback`

export const GetProductFeedback = `${AdminV1Route}/feedback/products`
export const UpdateProductFeedback = `${ProductFeedbackRoute}/update`

// Recipe
export const GetRecipes = `${AdminV1Route}/recipe/get`

// Referral Coupon
const ReferralCouponRoute = `${AdminV1Route}/referral-coupon`

export const CreateReferralCoupon = `${ReferralCouponRoute}/create`
export const UpdateReferralCoupon = `${ReferralCouponRoute}/update`
export const GetReferralCoupons = `${ReferralCouponRoute}/get`
export const GetCouponUsage = `${ReferralCouponRoute}/get-usage`

// ScholarShip
const ScholarShipRoute = `${AdminV1Route}/scholarship-user`

export const GetScholarshipResults = `${ScholarShipRoute}/get-results`
export const GetScholarshipResultByID = `${ScholarShipRoute}/get`
export const UpdateReadResultReceipt = `${ScholarShipRoute}/read-receipt`

// Seminar Registration
const SeminarRegistrationRoute = `${AdminV1Route}/seminar-registration`

export const GetSeminarRegistrations = `${SeminarRegistrationRoute}/get`

// Student Batch
const StudentBatchRoute = `${AdminV1Route}/student-batch`

export const CreateStudentBatch = `${StudentBatchRoute}/create`
export const UpdateStudentBatch = `${StudentBatchRoute}/update`
export const RemoveStudentBatch = `${StudentBatchRoute}/remove-batch`
export const GetStudentBatches = `${StudentBatchRoute}/get`
export const RemoveBatchTimetable = `${StudentBatchRoute}/remove-timetable`
export const RemoveBatchUser = `${StudentBatchRoute}/remove-user`

// Server Cache
const CacheManagerRoute = `${AdminV1Route}/cache-manager`

export const CleanGeneralCache = `${CacheManagerRoute}/general-cache`

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

// Users > Fitness Plan
const UserFitnessPlanRoute = `${AdminV1Route}/user-fitness-plan`

export const GetUserFitnessPlan = `${UserFitnessPlanRoute}/get`

// Users > Fitness Course
const UserFitnessCourseRoute = `${AdminV1Route}/user-fitness-course`

export const GetUserFitnessCourse = `${UserFitnessCourseRoute}/get`
export const AssignFitnessCourseToUser = `${UserFitnessCourseRoute}/assign`
export const DeactivateFitnessCourse = `${UserFitnessCourseRoute}/deactivate`
export const ExtendFitnessCourseValidity = `${UserFitnessCourseRoute}/extend-validity`
export const GetFitnessCourseStudentReview = `${UserFitnessCourseRoute}/get-review`
export const FitnessCourseLectureComments = `${UserFitnessCourseRoute}/comment`
export const CreateFitnessCourseCertificate = `${UserFitnessCourseRoute}/create-certificate`
export const UpdateFitnessCourseCertificate = `${UserFitnessCourseRoute}/update-certificate`
export const GenerateFitnessCourseCertificate = `${UserFitnessCourseRoute}/generate-certificate`
export const GenerateFitnessCourseQRCertificate = `${UserFitnessCourseRoute}/generate-qr-certificate`
export const DeleteFitnessCourseCertificate = `${UserFitnessCourseRoute}/delete-certificate`
export const VerifyCertificate = `${PublicV1Route}/verify-certificate`

// Users > Fitness Course Exam
const UserDigitalPlanRoute = `${AdminV1Route}/user-digital-plan`

export const GetUserDigitalPlans = `${UserDigitalPlanRoute}/get`

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

// Employee
const EmployeeRoute = `${AdminV1Route}/employee`

export const GetEmployees = `${EmployeeRoute}/get`
export const GetNextEmployeeCode = `${EmployeeRoute}/get-next-employee_code`
export const CreateEmployee = `${EmployeeRoute}/create`
export const UpdateEmployee = `${EmployeeRoute}/update`
export const RemoveEmployee = `${EmployeeRoute}/remove`

// Chat
const ChatRoute = `${AdminV1Route}/employee-chat`

export const GetEmployeeChatHistory = `${ChatRoute}`
export const GetChatEmployees = `${ChatRoute}/employee-list`

// Employee Leave Application
const EmployeeLeaveRoute = `${AdminV1Route}/leave-management`

export const CreateEmployeeLeave = `${EmployeeLeaveRoute}/create`
export const ActionEmployeeLeave = `${EmployeeLeaveRoute}/action`
export const RemoveEmployeeLeave = `${EmployeeLeaveRoute}/remove`
export const GetEmployeeLeaves = `${EmployeeLeaveRoute}/get`

// Task Management
const TaskManagementRoute = `${AdminV1Route}/task-management`

export const CreateTask = `${TaskManagementRoute}/create`
export const ActionTask = `${TaskManagementRoute}/action`
export const UpdateTask = `${TaskManagementRoute}/update`
export const RemoveTask = `${TaskManagementRoute}/remove`
export const GetTasks = `${TaskManagementRoute}/get`
export const RatingEmployee = `${TaskManagementRoute}/rating`

// Target Achievement
const TargetAchievementRoute = `${AdminV1Route}/target`

export const CreateTarget = `${TargetAchievementRoute}/create`
export const UpdateTarget = `${TargetAchievementRoute}/update`
export const RemoveTarget = `${TargetAchievementRoute}/remove`
export const GetTargets = `${TargetAchievementRoute}/get`

// SOP
const SOPRoute = `${AdminV1Route}/sop`

export const CreateSOP = `${SOPRoute}/create`
export const UpdateSOP = `${SOPRoute}/update`
export const RemoveSOP = `${SOPRoute}/remove`
export const GetSOPs = `${SOPRoute}/get`
export const CompleteSOPs = `${SOPRoute}/complete`

// Insights APIs (Individual modules, requires common admin access)
export const GetInsights = `${AdminV1Route}/insights`

// Insights APIs > Facebook
export const FacebookAuth = `${GetInsights}/facebook-oauth`
export const FacebookAuthCallback = `${GetInsights}/facebook-oauth/callback`

// Insights APIs > Facebook > Facebook Page
export const GetFacebookPages = `${GetInsights}/facebook-pages`
export const GetFacebookPageInsights = `${GetInsights}/facebook-pages/:page_id/insights`

// Insights APIs > Facebook > Instagram
export const GetInstagramAccounts = `${GetInsights}/instagram-accounts`
export const GetInstagramAccountInsights = `${GetInsights}/instagram-accounts/:account_id/insights`
export const GetIGMedia = `${GetInsights}/instagram-accounts/:account_id/media`
export const GetIGMediaInsights = `${GetInsights}/instagram-accounts/media/:media_id/insights`

// Insights APIs > Facebook > Facebook Ad / Marketing
const InsightFacebookBusinessRoute = `${GetInsights}/facebook-businesses`

export const GetFBUserAdAccounts = `${InsightFacebookBusinessRoute}/ad-accounts` // To get ad accounts of the user who has authenticated the app
export const GetFBBusinesses = `${InsightFacebookBusinessRoute}` // To get businesses owned by the user who has authenticated the app
export const GetFBBusinessOwnedAdAccounts = `${InsightFacebookBusinessRoute}/:business_id/ad-accounts` // To get ad accounts owned by a business, not the user
export const GetFBBusinessAdAccountInsights = `${InsightFacebookBusinessRoute}/:account_id/insights`
export const GetFBAdCampaigns = `${InsightFacebookBusinessRoute}/:account_id/campaigns`
export const GetFBAdCampaignsInsights = `${InsightFacebookBusinessRoute}/:campaign_id/insights`
export const GetFBAdCampaignAdSets = `${InsightFacebookBusinessRoute}/:campaign_id/ad-sets`
export const GetFBAdSetInsights = `${InsightFacebookBusinessRoute}/:ad_set_id/insights`
export const GetFBAdSetAds = `${InsightFacebookBusinessRoute}/:ad_set_id/ads`
export const GetFBAdInsights = `${InsightFacebookBusinessRoute}/:ad_id/insights`
export const GetAdLeads = `${InsightFacebookBusinessRoute}/:ad_id/leads`
export const GetLeadInfo = `${InsightFacebookBusinessRoute}/lead/:lead_id`

// Insights APIs > Google Analytics
const InsightGoogleAnalyticsRoute = `${GetInsights}/google-analytics`

export const GARunReport = `${InsightGoogleAnalyticsRoute}/run-report`

// Insights APIs > FG Group
const InsightFGGroupRoute = `${GetInsights}/fg-group`

export const GetOrdersInsights = `${InsightFGGroupRoute}/orders`
export const GetInvoiceInsights = `${InsightFGGroupRoute}/invoice`
export const GetUsersStats = `${InsightFGGroupRoute}/users`
export const GetStudentsStats = `${InsightFGGroupRoute}/students`
export const GetExpenseStats = `${InsightFGGroupRoute}/expense`

// Insights APIs > Google Search Console
const InsightGoogleSearchConsoleRoute = `${GetInsights}/google-search-console`

export const GSCRunAnalytics = `${InsightGoogleSearchConsoleRoute}/run-search-analytics-query`
export const GSCSitesList = `${InsightGoogleSearchConsoleRoute}/sites`
export const GSCInspectURL = `${InsightGoogleSearchConsoleRoute}/inspect-url`
export const GSCGetSitemapList = `${InsightGoogleSearchConsoleRoute}/get-sitemaps-list`
export const GSCGetSitemap = `${InsightGoogleSearchConsoleRoute}/get-sitemap`

// Expense
const ExpenseRoute = `${AdminV1Route}/expense`

export const GetExpense = `${ExpenseRoute}/get`
export const CreateExpense = `${ExpenseRoute}/create`
export const UpdateExpense = `${ExpenseRoute}/update`
export const DeleteExpense = `${ExpenseRoute}/delete`
export const GetNextExpenseSequence = `${ExpenseRoute}/get-next-expense`

// Trainer
const TrainerRoute = `${AdminV1Route}/trainer`

export const GetTrainers = `${TrainerRoute}/get`
export const CreateTrainer = `${TrainerRoute}/create`
export const UpdateTrainer = `${TrainerRoute}/update`
export const RemoveTrainer = `${TrainerRoute}/remove`

// Attendance
const AttendanceRoute = `${AdminV1Route}/attendance`

export const GetAttendance = `${AttendanceRoute}/get-attendance`
export const GetSyncAttendance = `${AttendanceRoute}/get-machine-attendance`

// Salary
const SalaryRoute = `${AdminV1Route}/salary`

export const GetSalary = `${SalaryRoute}/get-salary`

// Manual Leave
const ManualLeaveRoute = `${AdminV1Route}/manual-leave`

export const CreateManualLeave = `${ManualLeaveRoute}/create`
export const ActionManualLeave = `${ManualLeaveRoute}/action`
export const RemoveManualLeave = `${ManualLeaveRoute}/remove`
export const GetManualLeaves = `${ManualLeaveRoute}/get`

// Order Cart
const OrderCartRoute = `${AdminV1Route}/order-cart`

export const GetOrderCart = `${OrderCartRoute}/get`

// Stock management
const StockManagementRoute = `${AdminV1Route}/stock-management`

export const CreateStockManagement = `${StockManagementRoute}/create`
export const RemoveStockManagement = `${StockManagementRoute}/remove`
export const GetStockManagement = `${StockManagementRoute}/get`
export const UpdateStockManagement = `${StockManagementRoute}/update`

// Subscriptions
const SubscriptionRoute = `${AdminV1Route}/subscription`

export const CreateSubscription = `${SubscriptionRoute}/create`
export const GetSubscription = `${SubscriptionRoute}/get`
export const GetSubscriptionById = `${SubscriptionRoute}/razorpay/get`
export const GetSubscriptionInvoice = `${SubscriptionRoute}/invoice-get`
export const CancelSubscription = `${SubscriptionRoute}/cancel`
export const PauseSubscription = `${SubscriptionRoute}/pause`
export const ResumeSubscription = `${SubscriptionRoute}/resume`
export const UpdateSubscription = `${SubscriptionRoute}/update`

// Subscriptions Plan
const SubscriptionPlanRoute = `${AdminV1Route}/subscription-plan`

export const CreateSubscriptionPlan = `${SubscriptionPlanRoute}/create`
export const GetSubscriptionPlan = `${SubscriptionPlanRoute}/get`

// Lead Automation
const LeadAutomationRoute = `${AdminV1Route}/lead-automation`

export const CreateLeadAutomation = `${LeadAutomationRoute}/create`
export const GetLeadAutomationRoute = `${LeadAutomationRoute}/get`
export const RemoveLeadAutomationRoute = `${LeadAutomationRoute}/remove`

// Sheets
const SheetsRoute = `${AdminV1Route}/sheets`

export const GetGoogleSheets = `${SheetsRoute}/list`
export const GetGoogleSubSheets = `${SheetsRoute}/get`
export const AppendGoogleSheets = `${SheetsRoute}/append`

// Complaint Chatbot
const ComplaintRoute = `${AdminV1Route}/complaint-chatbot`

export const CreateComplaint = `${ComplaintRoute}/create`
export const ActionComplaint = `${ComplaintRoute}/action`
export const UpdateComplaint = `${ComplaintRoute}/update`
export const RemoveComplaint = `${ComplaintRoute}/remove`
export const GetComplaint = `${ComplaintRoute}/get`

// Student Placement
const StudentPlacementRoute = `${AdminV1Route}/student-placement`

export const GetPlacementRequest = `${StudentPlacementRoute}/get-placement-requests`
export const SchedulePlacementInterview = `${StudentPlacementRoute}/schedule-interview`

// Inpta Listing
const InptaListingRoute = `${BASE_URL}/inpta-listing`

// Training Partner
export const AddInptaTPListing = `${InptaListingRoute}/create-tp-listing`
export const UpdateInptaTPListing = `${InptaListingRoute}/update-tp-listing`
export const GetAdminInptaTPListing = `${InptaListingRoute}/get-tp-listing-for-admin`
export const RemoveInptaTPListing = `${InptaListingRoute}/delete-tp-listing`
export const ActionInptaTPListing = `${InptaListingRoute}/tp-listing-action`

// Training Center
export const AddInptaTCListing = `${InptaListingRoute}/create-tc-listing`
export const UpdateInptaTCListing = `${InptaListingRoute}/update-tc-listing`
export const GetAdminInptaTCListing = `${InptaListingRoute}/get-tc-listing-for-admin`
export const RemoveInptaTCListing = `${InptaListingRoute}/delete-tc-listing`
export const ActionInptaTCListing = `${InptaListingRoute}/tc-listing-action`
