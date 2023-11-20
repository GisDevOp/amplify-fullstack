import "bootstrap/dist/css/bootstrap.min.css";
import { useAuthenticator } from '@aws-amplify/ui-react';
const Contact = () => {
    const { user, signOut } = useAuthenticator((context) => [context.user]);

    return <>
  <div role="main" className='mt-2 container-fluid'>
  <table className="table">
   <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Welcome, {user.username}!</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{user.username}!</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{user.username}!</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
  </table>
</div>
    
    </>;
  };
  
  export default Contact;