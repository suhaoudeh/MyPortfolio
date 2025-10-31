import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });
export default mongoose.models.User || mongoose.model('User', userSchema);


// const User = mongoose.models.User || mongoose.model('User', userSchema);
// export default User;
 ///////////////////////// update the code above /////////////////////////

// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, required: true, unique: true },
//   hashed_password: { type: String, required: true }
// }, { timestamps: true });

// Virtual field for password
// userSchema.virtual('password')
//   .set(function(password) {
//     this._password = password;
//     this.hashed_password = bcrypt.hashSync(password, 10);
//   })
//   .get(function() {
//     return this._password;
 // });
