import React from "react";

const Users = ({ users }) => {
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table table-zebra">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          {users.map((user) => (
            <tbody>
              <tr>
                <th>{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.address.street}</td>
                <td>{user.phone}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Users;
