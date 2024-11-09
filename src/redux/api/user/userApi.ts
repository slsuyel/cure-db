/* eslint-disable @typescript-eslint/no-explicit-any */

import baseApi from '../baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userRegistration: builder.mutation({
      query: ({ data }) => ({
        url: '/user/register',
        method: 'POST',
        body: data,
      }),
    }),
    passwordChange: builder.mutation({
      query: ({ data, token }) => ({
        url: '/change-password',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    activeUsers: builder.query({
      query: () => ({
        url: '/api/users',
      }),
      providesTags: ['user-update'],
    }),

    userProfile: builder.query({
      query: ({ token, id }) => ({
        url: `/api/users/${id}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),

    photoUpload: builder.mutation({
      query: ({ token, formData }) => ({
        url: '/user-images',
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: formData,
      }),
    }),
    photoDelete: builder.mutation({
      query: ({ token, image_id }) => ({
        url: '/single/image/delete',
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: {
          image_id,
        },
      }),
    }),

    profileUpdate: builder.mutation({
      query: ({ data, token, id }) => ({
        url: `/api/users/${id}/descriptions`,
        method: 'PUT',
        body: data,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),
    profileInfoUpdate: builder.mutation({
      query: ({ data, token, id }) => ({
        url: `/api/users/${id}/update`,
        method: 'POST',
        body: data,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['user-update'],
    }),
  }),
});
export const {
  useActiveUsersQuery,
  useProfileInfoUpdateMutation,
  usePhotoDeleteMutation,
  usePasswordChangeMutation,
  useUserRegistrationMutation,

  useUserProfileQuery,
  useProfileUpdateMutation,

  usePhotoUploadMutation,
} = userApi;
