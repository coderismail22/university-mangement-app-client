// import { TQueryParam, TResponseRedux } from "../../../types";
// import { TAcademicSemester } from "../../../types/academicSemester.type";
import { baseApi } from "../../api/baseApi";

const userMangementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student",
        method: "POST",
        body: data,
      }),
    }),
    // getAllSemesters: builder.query({
    //   query: (args) => {
    //     const params = new URLSearchParams();
    //     if (args) {
    //       args.forEach((item: TQueryParam) => {
    //         params.append(item.name, item.value as string);
    //       });
    //     }
    //     return {
    //       url: "/academic-semesters",
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    //   transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
    //     console.log("inside redux", response);
    //     return {
    //       data: response?.data,
    //       meta: response?.meta,
    //     };
    //   },
    // }),
  }),
});

export const { useAddStudentMutation } = userMangementApi;
