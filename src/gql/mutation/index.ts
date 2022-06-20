import { gql } from "@apollo/client";

export const CREATE_TODO = gql`
  mutation createTodo($title: String!, $category: String) {
    createTodo(title: $title, category: $category) {
      id
      title
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;

export const CHECK_TODO = gql`
  mutation checkTodo($id: ID!) {
    checkTodo(id: $id) {
      id
      title
      done
    }
  }
`;
