import express from "express";
import session from "express-session";
import routes from "./routes/index.mjs";
import passport from "./strategies/localStrategies.mjs";

const PORT = process.env.PORT || 3000;

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
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(PORT, function () {
  console.log(`Listening on PORT ${PORT}`);
});
