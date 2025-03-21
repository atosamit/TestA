const resolvers = {
  Query: {
    getPremiumAdjustment: (_, { id }) => {
      // Placeholder sample data
      const adjustments = [
        {
          id: "1",
          Comment_M: "Initial adjustment",
          Total_Borrower_Fees_M: 1500.0,
          CU_Retail_Rate: 3.75,
          Protected_Loan_Amount_M: 100000.0,
          Pay_Rate: 2.5,
          Premium_Due: 2500.0,
          Total_Amount: 103000.0,
        },
      ];
      return adjustments.find((adjustment) => adjustment.id === id);
    },
  },
  Mutation: {
    editPremiumAdjustment: (_, { input }) => {
      // Placeholder for edit operation
      // In a real implementation, you would update the database
      // and return the updated record
      return {
        id: input.id,
        Comment_M: input.Comment_M,
        Total_Borrower_Fees_M: input.Total_Borrower_Fees_M,
        CU_Retail_Rate: input.CU_Retail_Rate,
        Protected_Loan_Amount_M: input.Protected_Loan_Amount_M,
        Pay_Rate: input.Pay_Rate,
        Premium_Due: input.Premium_Due,
        Total_Amount: input.Total_Amount,
      };
    },
  },
};

export default resolvers;