import AxiosMockAdapter from 'axios-mock-adapter'
import {service} from '@app/api/http.api'

export const httpApiMock = new AxiosMockAdapter(service, {delayResponse: 1000})
