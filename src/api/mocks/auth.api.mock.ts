// import {httpApiMock} from '@/api/mocks/http.api.mock'
// import {AuthData} from '@/api/auth.api'
// // import {initValues} from '@/components/auth/LoginForm/LoginForm'
// import avatarImg from '@/assets/avatars/avatar5.png'

// httpApiMock.onPost('login').reply(config => {
//     const data: AuthData = JSON.parse(config.data || '')
//     if (data.password) {
//         return [
//             200,
//             {
//                 token: 'bearerToken',
//                 user: {
//                     id: 1,
//                     firstName: 'Christopher',
//                     lastName: 'Johnson',
//                     imgUrl: avatarImg,
//                     userName: '@john1989',
//                     email: {
//                         name: 'christopher.johnson@altence.com',
//                         verified: true,
//                     },
//                     phone: {
//                         number: '+18143519459',
//                         verified: true,
//                     },
//                     sex: 'male',
//                     birthday: '01/26/2022',
//                     lang: 'en',
//                     country: 'GB',
//                     city: 'London',
//                     address1: '14 London Road',
//                     zipcode: 5211,
//                     website: 'altence.com',
//                     socials: {
//                         twitter: '@altence_team',
//                         facebook: 'https://facebook.com/groups/1076577369582221',
//                         linkedin: 'https://linkedin.com/company/altence',
//                     },
//                 },
//             },
//         ]
//     } else return [401, {message: 'Invalid Credentials'}]
// })

// httpApiMock.onPost('signUp').reply(200)

// httpApiMock.onPost('forgotPassword').reply(200)

// httpApiMock.onPost('verifySecurityCode').reply(200)

// httpApiMock.onPost('setNewPassword').reply(200)
export {}
