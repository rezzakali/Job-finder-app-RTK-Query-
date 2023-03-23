import React from 'react';
import { useSelector } from 'react-redux';
import { useGetTasksQuery } from '../features/tasks/tasksApi';
import Error from '../ui/Error';
import Loading from '../ui/Loading';
import Task from './Task';

function Tasks() {
  const filterWord = useSelector((state) => state.filter.filterWord);

  const {
    data: tasks,
    isLoading,
    isError,
    error,
  } = useGetTasksQuery(filterWord);

  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError) content = <Error error={error} />;

  if (!isLoading && !isError && tasks?.length === 0)
    content = <div>No tasks found!</div>;

  if (!isLoading && !isError && tasks?.length > 0)
    content = tasks.map((task) => <Task key={task.id} task={task} />);

  return <div className="lws-task-list">{content}</div>;
}

export default Tasks;
