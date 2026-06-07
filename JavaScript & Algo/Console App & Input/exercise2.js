const promptSync= require("prompt-sync");
const prompt = promptSync();

const questions = [
    {
        question: "2+2 ?",
        answer: "4"
    },
    {
        question: "3*5",
        answer: "15"
    },
    {
        question:"20/5",
        answer: "4"
    }
];



function main()
{
    let score =0;
    for (const q of questions)
    {
        const useranswer= prompt(q.question + " ");
        if (useranswer === q.answer)
        {
            console.log("Correct");
            score++;
        }
        else
           console.log("Wrong");
    }
    console.log(`Final Score: ${score}/${questions.length} correct!`);

}



main();