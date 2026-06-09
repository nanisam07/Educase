import MobileContainer from "../components/MobileContainer";

function Account() {
  return (
    <MobileContainer>
      <div className="page">
        <h2>Account Settings</h2>

        <div className="profile">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
          />

          <div>
            <h3>Marry Doe</h3>
            <p>marry@gmail.com</p>
          </div>
        </div>

        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur
          Sadipscing Elitr, Sed Diam Nonumy.
        </p>
      </div>
    </MobileContainer>
  );
}

export default Account;