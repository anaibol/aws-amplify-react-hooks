// @flow
// this is an auto generated file. This will be overwritten

export const createJob = `mutation CreateJob($input: CreateJobInput!) {
  createJob(input: $input) {
    id
    position
    rate
    description
    owner
  }
}
`;
export const updateJob = `mutation UpdateJob($input: UpdateJobInput!) {
  updateJob(input: $input) {
    id
    position
    rate
    description
    owner
  }
}
`;
export const deleteJob = `mutation DeleteJob($input: DeleteJobInput!) {
  deleteJob(input: $input) {
    id
    position
    rate
    description
    owner
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    avatar {
      bucket
      region
      key
    }
    username
    firstName
    lastName
    description
    location
    web
    phone
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    avatar {
      bucket
      region
      key
    }
    username
    firstName
    lastName
    description
    location
    web
    phone
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    avatar {
      bucket
      region
      key
    }
    username
    firstName
    lastName
    description
    location
    web
    phone
  }
}
`;
