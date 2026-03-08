import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../config/awsConfig.js";

export default class S3Service {
  static async uploadToS3(file, _id) {
    const params = {
      Bucket: "mangaconszurufilesbucket",
      Key: `${_id}_${file.originalname}`, // Unique file name
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    try {
      const command = new PutObjectCommand(params);
      const data = await s3Client.send(command);
      return {
        Location: `https://mangaconszurufilesbucket.s3.eu-north-1.amazonaws.com/${params.Key}`, // Construct the file URL
        ...data,
      };
    } catch (error) {
      console.error("Error uploading file to S3:", error);
      throw new Error("File upload to S3 failed");
    }
  }
}
export class S3ServiceAdmin {
  static async uploadToS3(file) {
    const params = {
      Bucket: "mangaconsadministrationstafffilesbucket",
      Key: `${file.originalname}`, // Unique file name
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    try {
      const command = new PutObjectCommand(params);
      const data = await s3Client.send(command);
      return {
        Location: `https://mangaconsadministrationstafffilesbucket.s3.eu-north-1.amazonaws.com/${params.Key}`, // Construct the file URL
        ...data,
      };
    } catch (error) {
      console.error("Error uploading file to S3:", error);
      throw new Error("File upload to S3 failed");
    }
  }
}
