import {service} from '@app/api/http.api'
import './mocks/auth.api.mock'
// import {UserModel} from '@app/domain/UserModel'

export interface UserModel {
    id: number
    firstName: string
    lastName: string
    imgUrl: string
    userName: string
    email: {
        name: string
        verified: boolean
    }
    phone: {
        number: string
        verified: boolean
    }
    sex: 'male' | 'female'
    birthday: string
    lang: 'en' | 'de'
    country: string
    city: string
    address1: string
    address2?: string
    zipcode: number
    website?: string
    socials?: {
        twitter?: string
        facebook?: string
        linkedin?: string
    }
}

export interface AuthData {
    email: string
    password: string
}

export interface SignUpRequest {
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface ResetPasswordRequest {
    email: string
}

export interface SecurityCodePayload {
    code: string
}

export interface NewPasswordData {
    newPassword: string
}

// http request model
export interface LoginRequest {
    email: string
    password: string
}

// http response model
export interface LoginResponse {
    token: string
    user: UserModel
}

export const login = (loginPayload: LoginRequest): Promise<LoginResponse> =>
    service.post<LoginResponse>('login', {...loginPayload}).then(({data}) => data)

export const signUp = (signUpData: SignUpRequest): Promise<undefined> =>
    service.post<undefined>('signUp', {...signUpData}).then(({data}) => data)

export const resetPassword = (resetPasswordPayload: ResetPasswordRequest): Promise<undefined> =>
    service.post<undefined>('forgotPassword', {...resetPasswordPayload}).then(({data}) => data)

export const verifySecurityCode = (securityCodePayload: SecurityCodePayload): Promise<undefined> =>
    service.post<undefined>('verifySecurityCode', {...securityCodePayload}).then(({data}) => data)

export const setNewPassword = (newPasswordData: NewPasswordData): Promise<undefined> =>
    service.post<undefined>('setNewPassword', {...newPasswordData}).then(({data}) => data)
