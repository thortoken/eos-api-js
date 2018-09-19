Eos = require('eosjs');

// Private key or keys (array) provided statically or by way of a function.
// For multiple keys, the get_required_keys API is used (more on that below).
keyProvider: '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3';

// Default configuration (additional options below)
config = {
  chainId: null, // 32 byte (64 char) hex string
  keyProvider, // WIF string or array of keys..
  httpEndpoint: 'http://127.0.0.1:8888',
  expireInSeconds: 60,
  broadcast: true,
  verbose: false, // API activity
  sign: true
};

// Read-only instance when 'eosjs' is already a dependency
eos = Eos(config);

// class needs to connect to the mainnet
// issue the token
// wait for a response
// handle the errors