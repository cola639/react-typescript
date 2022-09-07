import {createSlice, PayloadAction} from '@reduxjs/toolkit'
// import {UserModel} from '@/domain/UserModel'
import {readUser} from '@/services/localStorage.service'

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

export interface UserState {
    user: UserModel | null
}

const initialState: UserState = {
    user: readUser(),
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserModel | null>) => {
            state.user = action.payload
        },
    },
})

export const {setUser} = userSlice.actions

export default userSlice.reducer
