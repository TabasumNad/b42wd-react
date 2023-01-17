function Welcome({ name, pic }) {
  return (
    <div>
      <h1>{name}😊😊😊 </h1>
      <img className='profile-pic' src="https://images.pexels.com/photos/341013/pexels-photo-341013.jpeg?auto=compress&cs=tinysrgb&w=600" alt={name} />
    </div>
  );
}
