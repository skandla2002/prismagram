import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import { ExtractJwt } from "passport-jwt";

export const secretGenerator = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

const sendMail = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };
  const client = nodemailer.createTransport(sgTransport(optinos));
  return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "jongmeong@prismagram.com",
    to: address,
    subject: "Login Secret for Prismagram",
    html: `Hello! Your login secret it <strong>${secret}</strong>.<br/>Copy paste on the app/website to log in'`
  };
  return sendMail(email);
};


export generateToken = (id) => ExtractJwt.sign({ id}, process.env.JWT_SECRET);
