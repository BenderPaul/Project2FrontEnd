import AWS from 'aws-sdk';
import S3 from 'aws-sdk/clients/s3';
//import React from 'react'



export const config = {
    bucketName: 'the-react-project-profile-info',
    region: 'us-west-2',
    accessKeyId: 'AKIAY7WTSTRC23EBBHVH',
    secretAccessKey: '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',
    s3Url: 'http://the-react-project-profile-info.s3-website-us-west-2.amazonaws.com/'
}


export const ReactS3Client = new S3(config);

//-----------------------------------SES stuff-----------------------------------------------//

export const sesConfig = {
    accessKeyId: 'AKIAY7WTSTRC23EBBHVH',
    secretAccessKey: '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',
    region: 'us-west-2'
}