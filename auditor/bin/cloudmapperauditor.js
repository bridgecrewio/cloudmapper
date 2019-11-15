#!/usr/bin/env node

// @ts-ignore: Cannot find declaration file
require('source-map-support/register');
const cdk = require('@aws-cdk/core');

// Import libraries to read a config file
const yaml = require('js-yaml');
const fs = require('fs');

const { CloudmapperauditorStack } = require('../lib/cloudmapperauditor-stack');

var config = yaml.safeLoad(fs.readFileSync('./s3_bucket_files/cdk_app.yaml', 'utf8'));

const app = new cdk.App();
new CloudmapperauditorStack(app, `CloudmapperauditorStack${config["customer_name"]}`);
