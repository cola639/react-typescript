import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// no lazy loading for auth pages to avoid flickering
// const AuthLayout = React.lazy(() => import('@/components/layouts/AuthLayout/AuthLayout'))
import OnlineVote from '../views/home/index'
// import SignUpPage from '@/pages/SignUpPage'
// import ForgotPasswordPage from '@/pages/ForgotPasswordPage'
// import SecurityCodePage from '@/pages/SecurityCodePage'
// import NewPasswordPage from '@/pages/NewPasswordPage'
// import LockPage from '@/pages/LockPage'

// import MainLayout from '@/components/layouts/main/MainLayout/MainLayout'
// import ProfileLayout from '@/components/profile/ProfileLayout'
// import RequireAuth from '@/components/router/RequireAuth'
import {withLoading} from '../hocs/withLoading.hoc'

// const DashboardPage = React.lazy(() => import('@/pages/DashboardPage'))
// const PersonalInfoPage = React.lazy(() => import('@/pages/PersonalInfoPage'))
// const Logout = React.lazy(() => import('./Logout'))

// export const DASHBOARD_PATH = '/'

// const Dashboard = withLoading(DashboardPage)
// const PersonalInfo = withLoading(PersonalInfoPage)
// const AuthLayoutFallback = withLoading(AuthLayout)
// const LogoutFallback = withLoading(Logout)

const OnlineVotePage = withLoading(OnlineVote)

export const AppRouter: React.FC = () => {
    // const protectedLayout = (
    //     <RequireAuth>
    //         <MainLayout />
    //     </RequireAuth>
    // )

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<OnlineVotePage />}></Route>
            </Routes>
        </BrowserRouter>
        // <BrowserRouter>
        //     <Routes>
        //         <Route path={DASHBOARD_PATH} element={protectedLayout}>
        //             <Route index element={<Dashboard />} />
        //             <Route path="profile" element={<ProfileLayout />}>
        //                 <Route path="personal-info" element={<PersonalInfo />} />
        //             </Route>
        //         </Route>
        //         <Route path="/auth" element={<AuthLayoutFallback />}>
        //             <Route path="login" element={<LoginPage />} />
        //             <Route path="sign-up" element={<SignUpPage />} />
        //             <Route
        //                 path="lock"
        //                 element={
        //                     <RequireAuth>
        //                         <LockPage />
        //                     </RequireAuth>
        //                 }
        //             />
        //             <Route path="forgot-password" element={<ForgotPasswordPage />} />
        //             <Route path="security-code" element={<SecurityCodePage />} />
        //             <Route path="new-password" element={<NewPasswordPage />} />
        //         </Route>
        //         <Route path="/logout" element={<LogoutFallback />} />
        //     </Routes>
        // </BrowserRouter>
    )
}
