import baseApi from '../baseApi';

const packageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    packages: builder.query({
      query: () => {
        return {
          url: `/packages`,
        };
      },
    }),

    singlePackage: builder.query({
      query: (id) => {
        return {
          url: `/packages/${id}`,
        };
      },
    }),

    buyPack: builder.mutation({
      query: ({ package_id, token }) => ({
        url: '/purchase',
        method: 'Post',
        body: { package_id },
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),
    myPackage: builder.query({
      query: (token) => {
        return {
          url: `/user-purchases`,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    deletePackage: builder.mutation({
      query: (id) => ({
        url: `/packages/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  usePackagesQuery,
  useBuyPackMutation,
  useSinglePackageQuery,
  useMyPackageQuery,
  useDeletePackageMutation,
} = packageApi;
