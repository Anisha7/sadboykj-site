const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    createdAt: { type: Date },
    updatedAt: { type: Date },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true }
});

UserSchema.pre("save", function(next) {
    const now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    // PASSWORD
    // const user = this;
    // if (!user.isModified("password")) {
    //     return next();
    // }
    // bcrypt.genSalt(10, (err, salt) => {
    //     bcrypt.hash(user.password, salt, (err, hash) => {
    //         user.password = hash;
    //         next();
    //     });
    // });
});
// PASSWORD
// UserSchema.methods.comparePassword = function(password, done) {
//     bcrypt.compare(password, this.password, (err, isMatch) => {
//         done(err, isMatch);
//     });
// };

module.exports = mongoose.model("User", UserSchema);