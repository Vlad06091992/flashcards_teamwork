import { FormType } from '@/components'
import { baseApi } from '@/services/base-api.ts'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<any, FormType>({
        query: params => ({
          url: `v1/auth/login`,
          method: 'POST',
          params: params ?? {},
        }),
        // providesTags: ['Auth'],
      }),
      signUp: builder.mutation<any, any>({
        query: params => ({
          url: `v1/auth/sign-up`,
          method: 'POST',
          body: params ?? {},
        }),
        // providesTags: ['Auth'],
      }),
    }
  },
})

export const { useLoginMutation, useSignUpMutation } = authApi
