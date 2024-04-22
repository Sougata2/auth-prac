function isLogedIn(request, response, next) {
  if (!request.user) return response.status(401).send("Not Authorized");
  next();
}

export default isLogedIn;
