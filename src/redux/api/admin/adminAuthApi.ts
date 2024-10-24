import baseApi from '../baseApi';

const adminAuthApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    adminRegistration: builder.mutation({
      query: ({ data }) => ({
        url: '/admin/register',
        method: 'POST',
        body: data,
      }),
    }),
    adminLogin: builder.mutation({
      query: ({ data }) => ({
        url: '/api/admin/login',
        method: 'POST',
        body: data,
      }),
    }),
    addBlog: builder.mutation({
      query: ({ data, token }) => ({
        url: '/api/blogs',
        method: 'POST',
        body: data,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),
    allBlogs: builder.query({
      query: ({ data, token }) => ({
        url: '/api/blogs',
        method: 'GET',
        body: data,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),

    adminProfile: builder.query({
      query: ({ token }) => ({
        url: '/admin/my/profile',
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),
    tokenCheck: builder.mutation({
      query: ({ token }) => ({
        url: '/api/admin/check-token',
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),

    logOut: builder.mutation({
      query: ({ token }) => ({
        url: '/admin/logout',
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});
export const {
  useAdminLoginMutation,
  useTokenCheckMutation,
  useLogOutMutation,
  useAddBlogMutation,
  useAllBlogsQuery
} = adminAuthApi;
