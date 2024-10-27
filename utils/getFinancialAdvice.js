import Groq from "groq-sdk";

// const groqs = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Initialize the OpenAI client
// const openai = new OpenAI({
//   apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true,
// });

// Function to fetch user-specific data (mocked for this example)

// Function to generate personalized financial advice
// const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
//   console.log(totalBudget, totalIncome, totalSpend);
//   try {
    //  const userPrompt = `
    //    Based on the following financial data:
    //    - Total Budget: ${totalBudget} USD 
    //    - Expenses: ${totalSpend} USD 
    //   - Incomes: ${totalIncome} USD
    //    Provide detailed financial advice in 2 sentence to help the user manage their finances more effectively.
    //  `;

//     // Send the prompt to the OpenAI API
//     const chatCompletion = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [{ role: "user", content: userPrompt }],
//     });

//     // Process and return the response
//     const advice = chatCompletion.choices[0].message.content;

//     console.log(advice);
//     return advice;
//   } catch (error) {
//     console.error("Error fetching financial advice:", error);
//     return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
//   }
// };




const groq = new Groq({ apiKey: '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',dangerouslyAllowBrowser: true  });

const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) =>   {
  const userPrompt = `
       Based on the following financial data:
       - Total Budget: ${totalBudget} USD 
       - Expenses: ${totalSpend} USD 
      - Incomes: ${totalIncome} USD
       Provide detailed financial advice in 2 sentence to help the user manage their finances more effectively.
     `;
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  // console.log(chatCompletion.choices[0]?.message?.content || "");
  const advice = chatCompletion.choices[0]?.message?.content || "";
   async function getGroqChatCompletion() {
    return groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: userPrompt,
        },
      ],
      model: "llama3-8b-8192",
    });
  }
  return advice;
}



export default getFinancialAdvice;