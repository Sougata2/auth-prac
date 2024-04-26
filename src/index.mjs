import express from "express";
import session from "express-session";
import routes from "./routes/index.mjs";
// import passport from "./strategies/localStrategies.mjs";
import passport from "./strategies/googleStrategies.mjs";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";

const PORT = process.env.PORT || 3000;

mongoose
  .connect("mongodb://localhost/express")
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(`Error : ${err}`));

const app = express();
app.use(express.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000 * 60,
    },
    store: MongoStore.create({
      client: mongoose.connection.getClient(),
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(PORT, function () {
  console.log(`Listening on PORT ${PORT}`);
});
