import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { userUrl } from "../Constant/Constant";
export const userApi =createApi({
    reducePath:'userApi',
    baseQuery:fetchBaseQuery({
        baseUrl:userUrl,
    }),
    endpoints:builders=>({
        userSignup:builders.mutation({
            query:(query)=>({
                url:'/signup',
                method:'POST',
                body:query,
            })
        }),

        userLogin:builders.mutation({
            query:(query)=>({
                url:'/login',
                method:'POST',
                body:query,
            })
        }),
        
    })
})

export const {useUserSignupMutation,useUserLoginMutation} =userApi