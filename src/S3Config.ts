import AWS from 'aws-sdk';
import S3 from 'aws-sdk/clients/s3';
//import React from 'react'



export const config = {
    bucketName: 'the-react-project-profile-info',
    region: 'us-west-2',
    accessKeyId: 'AKIAY7WTSTRCSKMXMDGL',
    secretAccessKey: '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',
    s3Url: 'http://the-react-project-profile-info.s3-website-us-west-2.amazonaws.com/'
}


export const ReactS3Client = new S3(config);

//-----------------------------------SES stuff-----------------------------------------------//

export const sesConfig = {
    accessKeyId: 'AKIAY7WTSTRCSKMXMDGL',
    secretAccessKey: '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',
    region: 'us-west-2'
}