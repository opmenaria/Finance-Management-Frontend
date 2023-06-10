import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { IoMdCall } from 'react-icons/io';
import { GoMail } from 'react-icons/go';
import { FaAddressBook, FaTwitter, FaFacebookSquare, FaLinkedinIn } from 'react-icons/fa';

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
  background-color: #333;
  color: #fff;
  border: 2px solid orange;
  border-radius: 20px;
`;

const Heading = styled.h1`
  color: #FF6F00;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`;
const SupportInfo = styled.div`
  margin-bottom: 20px;
`;

const FeedbackInfo = styled.div`
  margin-bottom: 20px;
`;

const SocialMedia = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const SocialMediaText = styled.p`
  margin-left: 10px;
`;

const SocialMediaLink = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  margin-top: 5px;
`;

const Form = styled.form`
  color: black;
  border:2px solid black;
  margin-bottom: 20px;
  border-radius:10px;
`;

const SubmitButton = styled.input`
  background-color: #FF6F00;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;
const ContactInfo = styled.div`
  margin-bottom: 20px;

  h5 {
    margin-bottom: 5px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline-flex;
    align-items: center;
    margin-right: 20px;
  }

  svg {
    margin-right: 5px;
  }
`
export default function Contact() {
  return (
    <Container>
      <Heading>Contact Us</Heading>
      <Description>
        We are here to assist you with any queries or concerns you may have regarding our finance management application. Your feedback is valuable to us, and we encourage you to reach out to us using the contact information provided below.
      </Description>

      <ContactInfo>
        <h5>Contact Information</h5>
        <ul>
          <li><GoMail /> contact@financemanagerapp.com</li>
          <li><IoMdCall /> +91 9876543210</li>
          <li><FaAddressBook /> 13, Mahapragya Vihar Oppo. Celebration mall, Udaipur (313003)</li>
        </ul>
      </ContactInfo>


      <SupportInfo>
        <h5>Support</h5>
        <p>
          Our support team is available to help you with technical assistance and support inquiries. Please contact our support team at support@financemanagerapp.com. We are available from Monday to Friday, 9:00 AM to 6:00 PM (EST).
        </p>
      </SupportInfo>

      <FeedbackInfo>
        <h5>Feedback</h5>
        <p>
          We appreciate your feedback and suggestions as they enable us to improve our finance management application. Feel free to email us at feedback@financemanagerapp.com with any comments, suggestions, or feature requests you may have. Your input is highly valuable to us.
        </p>
      </FeedbackInfo>

      <SocialMedia>
        <h5>Social Media</h5>
        <p>
          Stay up-to-date with the latest news, tips, and updates by following us on social media:
        </p>
        <ul>
          <li>
            <SocialMediaLink href="https://twitter.com/FinanceManagerApp">
              <FaTwitter />
              <SocialMediaText>@FinanceManagerApp</SocialMediaText>
            </SocialMediaLink>
          </li>
          <li>
            <SocialMediaLink href="https://facebook.com/FinanceManagerApp">
              <FaFacebookSquare />
              <SocialMediaText>facebook.com/FinanceManagerApp</SocialMediaText>
            </SocialMediaLink>
          </li>
          <li>
            <SocialMediaLink href="https://linkedin.com/company/FinanceManagerApp">
              <FaLinkedinIn />
              <SocialMediaText>linkedin.com/company/FinanceManagerApp</SocialMediaText>
            </SocialMediaLink>
          </li>
        </ul>
      </SocialMedia>

      <Form action="/" method="POST">
        <Label htmlFor="name">Name:</Label><br />
        <input type="text" id="name" name="name" required /><br /><br />

        <Label htmlFor="email">Email:</Label><br />
        <input type="email" id="email" name="email" required /><br /><br />

        <Label htmlFor="message">Message:</Label><br />
        <textarea id="message" name="message" rows="4" cols="50" required /><br /><br />

        <SubmitButton type="submit" value="Submit" />
      </Form>

      <p>
        Thank you for using our finance management application. We look forward to hearing from you!
      </p>
      <Link to="/"><button>BACK TO HOME</button></Link>
    </Container>
  );
}
