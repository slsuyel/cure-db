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
      invalidatesTags: ['blogs'],
    }),
    editBlog: builder.mutation({
      query: ({ data, token, id }) => ({
        url: `/api/blogs/${id}`,
        method: 'PUT',
        body: data,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['blogs'],
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
      providesTags: ['blogs'],
    }),
    singleBlog: builder.query({
      query: ({ id, token }) => ({
        url: `/api/blogs/${id}`,
        method: 'GET',
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['blogs'],
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

    deleteBlog: builder.mutation({
      query: ({ id, token }) => ({
        url: `/api/blogs/${id}`,
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['blogs'],
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
  useSingleBlogQuery,
  useEditBlogMutation,
  useDeleteBlogMutation,
  useTokenCheckMutation,
  useLogOutMutation,
  useAddBlogMutation,
  useAllBlogsQuery,
} = adminAuthApi;
