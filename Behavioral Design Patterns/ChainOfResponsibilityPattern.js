const logRequest = (req, res, next) => {
  console.log(`Request received at ${req.url}`);
  next(); // Pass to the next middleware
};

const authenticateUser = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized");
  }
  next(); // Pass to the next handler
};

const processData = (req, res) => {
  res.send("Data processed successfully");
};

// Middleware chain
app.use(logRequest);
app.use(authenticateUser);
app.get("/process", processData);
