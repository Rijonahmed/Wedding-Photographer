import React from 'react';

const Blog = () => {
  return (
    <div className='container'>
      <h4 className='mt-3'><big>Question: </big>Difference between authorization and authentication?</h4>
      <table className="table table-bordered">
        <thead className=''>
          <tr>

            <th scope="col">authorization</th>
            <th scope="col">authentication</th>

          </tr>
        </thead>
        <tbody>
          <tr>

            <td>&bull; Authorization determines what resources a user can access. <br />
              &bull; Authorization works through settings that are implemented and maintained by the organization. <br />
              &bull; Authorization always takes place after authentication.
            </td>

            <td>&bull; Authentication verifies who the user is. <br />
              &bull; Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user. <br />
              &bull; Authentication is the first step of a good identity and access management process.
            </td>
          </tr>

        </tbody>
      </table>
      <h4><big>Question: </big> Why are you using firebase? What other options do you have to implement authentication?</h4>
      <p><big>Ans: </big><br /> &bull; Firebase manages all data real-time in the database. Firebase দিয়ে আমার সহজে email  password  authentication করতে পারি। Google,  Facebook, github আরো সকল social site দিয়ে log in, sign out করতে পারি। অর্থাৎ আমরা সহজেই firebase use   করে একটা ওয়েব সাইটের authentication system implement করতে পারি।</p>
      <p>&bull; firebase ছাড়া আরো অনেক মাধ্যমে authentication  implement করা যায়।</p>
      <p><big>1:</big> Cookie-Based authentication.</p>
      <p><big>2:</big> Token-Based authentication.</p>
      <p><big>3:</big> Third party access(OAuth, API-token)</p>
      <p><big>4:</big> OpenId.</p>
      <p><big>5:</big> SAML.</p>

      <h4><big>Question: </big>What other services does firebase provide other than authentication?</h4>
      <big>Ans: </big>

      <p><big>1:</big> Firebase Realtime Database</p>
      <p><big>2:</big> Firebase Machine Learning</p>
      <p><big>3:</big> Firebase Push Notification</p>
      <p><big>4:</big> Firebase Cloud Storage</p>
      <p><big>5:</big> Firebase Analytics</p>
      <p><big>6:</big> Firebase Crash Reports</p>


    </div>
  );
};

export default Blog;