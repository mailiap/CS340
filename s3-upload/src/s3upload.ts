import fs from "fs";

import {
    S3Client,
    PutObjectCommand,
} from "@aws-sdk/client-s3";
import type PutObjectAclCommandInput = require("@aws-sdk/client-s3");

s3upload();

async function s3upload() {
    if (process.argv.length !== 3) {
        console.log("Specify the file to upload on the command line");
        process.exit();
    }

    try {
        const client = new S3Client();
        const fileContent = fs.readFileSync(process.argv[2]);

        // Extract the file name from the provided path
        const fileName = process.argv[2].split("/")!.pop() ?? "uploaded-file";

        const params = {
            "Body": fileContent,
            "Bucket": "mailiap-s3-demo" //TODO: Specify your bucket name,
            "Key": `uploads/${fileName}` //TODO: Specify name or file path you want to appear in S3,
        }

        const command = new PutObjectCommand(params); // TODO: Create the PutObjectCommand
        const response = await client.send(command); // TODO: Send the command and await the result

        console.log("File upload successful with ", response.$metadata.httpStatusCode);
    } catch (error) {
        console.log(error);
    }
}