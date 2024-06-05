const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');
const pool = require('./databaseSet');

dotenv.config();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
},
async function(token, tokenSecret, profile, done) {
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE google_id = ?', [profile.id]);
    if (rows.length > 0) {
      return done(null, rows[0]);
    } else {
      const [result] = await pool.query('INSERT INTO users (google_id, username, email) VALUES (?, ?, ?)', [profile.id, profile.displayName, profile.emails[0].value]);
      const [newUser] = await pool.query('SELECT * FROM users WHERE id = ?', [result.insertId]);
      return done(null, newUser[0]);
    }
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    if (rows.length > 0) {
      done(null, rows[0]);
    } else {
      done(null, null);
    }
  } catch (err) {
    done(err, null);
  }
});