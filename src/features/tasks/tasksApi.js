import { apiSlice } from '../api/apiSlice';

const tasksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => `/tasks`,
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: '/tasks',
        method: 'POST',
        body: {
          taskName: data.tName,
          teamMember: {
            name: data.member.name,
            avatar: data.member.avatar,
            id: data.member.id,
          },
          projectName: data.project.projectName,
          deadline: data.deadline,
          project: {
            id: data.member.id,
            projectName: data.project.projectName,
            colorClass: data.project.colorClass,
          },
          status: 'pending',
        },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData('getTasks', undefined, (draft) => {
              draft.push(res.data);
            })
          );
        } catch (error) {}
      },
    }),
  }),
});

export const { useGetTasksQuery, useAddTaskMutation } = tasksApi;
