import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
 border-radius:20px ;
 border-color:10px soliod;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const Heading = styled.h1`
  color: #FF6F00;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 20px;
  font-family: 'PremiumFont', sans-serif;
`;

const Description = styled.h5`
  color: #ffffff;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
  font-family: 'PremiumFont', sans-serif;

  /* Additional CSS styles */
  a {
    color: #FF6F00;
    text-decoration: underline;
  }
`;

export default function About() {
  return (
    <Container>
      <Link to="/about">
        <Heading>About:-</Heading>
        <Description>
          A financial management systems web application typically consists of several key components that work together to provide users with various financial management functionalities. Here are some common components you might find in such an application:
          <br />
          <br />
          1. User Authentication: This component handles user registration, login, and authentication to ensure that only authorized users can access the application. It may involve features like password management, two-factor authentication, and user roles/permissions.
          <br />
          <br />
          2. Dashboard: The dashboard is the main interface of the application where users can view an overview of their financial data. It may include charts, graphs, and summaries of key financial metrics, such as account balances, income, expenses, investments, and net worth.
          <br />
          <br />
          3. Account Management: This component allows users to manage their financial accounts. Users can add, edit, and delete accounts, specify their account types (e.g., bank account, credit card, investment account), and track transactions associated with each account.
          <br />
          <br />
          4. Budgeting: The budgeting component enables users to create and manage budgets. Users can set budget limits for various categories (e.g., groceries, entertainment, transportation) and track their spending against these limits. The application may provide visual representations of budget progress and offer alerts or notifications for overspending.
          <br />
          <br />
          5. Expense Tracking: This component helps users track and categorize their expenses. Users can enter details about each expense, such as the date, amount, category, and description. The application may support automatic expense categorization and integration with bank feeds or receipt scanning.
          <br />
          <br />
          6. Income Management: This component allows users to track and manage their income sources. Users can add and categorize income streams, such as salaries, dividends, or rental income. The application may provide reports and analytics on income trends and projections.
          <br />
          <br />
          7. Financial Goal Setting: Users can define their financial goals (e.g., saving for a down payment, paying off debt, retirement planning) and track their progress toward achieving these goals. The component may include features like goal visualization, milestones, and reminders.
          <br />
          <br />
          8. Reporting and Analytics: This component provides users with detailed financial reports and analytics. Users can generate statements, summaries, and visualizations of their financial data, such as cash flow statements, balance sheets, income statements, and investment performance reports.
          <br />
          <br />
          9. Integration with External Systems: The application may integrate with external systems, such as banks, credit card providers, investment platforms, or accounting software. This integration allows users to import financial data automatically, reducing manual data entry and providing real-time updates.
        </Description>
      </Link>
    </Container>
  );
}
