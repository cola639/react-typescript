// import { UserModel } from '@app/domain/UserModel';
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

export const persistToken = (token: string): void => {
    localStorage.setItem('accessToken', token)
}

export const readToken = (): string => {
    return localStorage.getItem('accessToken') || ''
}

export const persistUser = (user: UserModel): void => {
    localStorage.setItem('user', JSON.stringify(user))
}

export const readUser = (): UserModel | null => {
    const userStr = localStorage.getItem('user')

    return userStr ? JSON.parse(userStr) : null
}

export const deleteToken = (): void => localStorage.removeItem('accessToken')
export const deleteUser = (): void => localStorage.removeItem('user')
