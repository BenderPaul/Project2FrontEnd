import AWS from 'aws-sdk';
import S3 from 'aws-sdk/clients/s3';
import React from 'react'



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
//Configuration for the email
let sesParams = {
    Destination: {
        CcAddresses: [
            //optional
        ],
        ToAddresses: [
            //person you're emailing
        ]
    },
    Message: { /*the message*/
        Body: { //the body
            Html: {
                Charset: "UTF-8",
                Data: "HTML_FORMAT_BODY"
            },
            Text: {
                Charset: "UTF-8",
                Data: "TEXT_FORMAT_BODY"
            }
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Password Recovery'
           }
    },
    Source: 'benderp94@gmail.com', //Verified with AWS
}

//Create the promise and SES service object
const sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(sesParams).promise();

//Send and handle the promise
sendPromise.then(
    function(data) {
      console.log(data.MessageId);
    }).catch(
      function(err) {
      console.error(err, err.stack);
    });
