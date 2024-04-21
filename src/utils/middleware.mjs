function isLogedIn(request, response, next) {
  if (!request.session.user) return response.status(401).send("Not Authorized");
  next();
}

export default isLogedIn;
