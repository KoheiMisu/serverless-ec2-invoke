const INSTANCE_ID = process.env.ec2_instance_id;
const ACCESS_KEY = process.env.access_key;
const SECRET_KEY = process.env.secret_key;

const AWS = require('aws-sdk');
AWS.config.update({accessKeyId: ACCESS_KEY, secretAccessKey: SECRET_KEY});
AWS.config.region = process.env.region;

const start = () => {
  const ec2 = new AWS.EC2();

  let params = {
    InstanceIds: [
      INSTANCE_ID
    ]
  };

  return new Promise(resolve => ec2.startInstances(params, function(err, data) {
    resolve(console.log(err || data));
  }));
}

module.exports.startHandler = function(event, context) {
  start();
};
