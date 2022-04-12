import myImg from '../../assets/images/me.jpg';

const Home = () => {
    const style = {
        borderRadius:'50%'
    }
  return (
    <div className="container mt-3">
        <div className="row justify-content-between align-items-center">
      <h4 className="desc text-start col-12 col-md-6">
        Hello Am yasmine kamal I’m a software engineer, and I am skilled in node js,laravel , php ,react ,vue js and angular. I try to leave every bit of
        code I touch more readable, modular, performant and accessible than I
        found it.
      </h4>
      <div className="col-12 col-md-6">
      <img style={style} width="65%" height="60%"  src={myImg} alt="profile" />
      </div>
        </div>
    </div>
  );
};

export default Home;