import axios from "axios";


//Export an object with a "search" method that searches the random API for the passed query
export default {
  fetchUsers: function() {
    return axios
    .get("https://randomuser.me/api/")
    .then(results => {
      const employees = results.data;
      return employees.map( employees => {
        return {
          firstname: employees.name.first,
          lastname: employees.name.last,
          title: employees.name.title,
          phone: employees.phone,
          email: employees.email,
          profileUrl: employees.picture.thumbnail
        };
      });
    });
  }
};