import Input from './input'
import questions from './questions'

const question1 = () => {
    // question about climbing stairs in dynamic programming

    return (
        <>
            <p>A child is running up a staircase with n steps and can hop either 1 step, 2 steps at a time. How many possible ways the child can run up the stairs which have <strong>50</strong> steps.</p>

        </>
    )
        
}
const question2 = () => {
    return (
        <>
            <p>There are a total of 4 coins with value of 1, 3, 4, 5.</p>
            <p>Return the fewest number of coins that you need to make up that amount = 21. If that amount of money cannot be made up by any combination of the coins, return -1</p>
            <p><strong>Note: You may assume that you have an infinite number of each kind of coin.</strong></p>
        </>
    )
};


const question3 = () => {
    return (
        <>
            <p>
            By counting carefully it can be seen that a rectangular grid measuring
            $3$ by $2$ contains eighteen rectangles:
            </p>
            <div className="flex justify-center">
            <img src="/tiles.png" alt="question2" />
            </div>
            <p>
            Although there exists no rectangular grid that contains exactly two
            million rectangles, find the area of the grid with the nearest
            solution.
            </p>
        </>
    );
}

function getQuestion(slug) {
    // return question detail and answer
    switch (slug) {
        case 'question1':
            return {
                detail: question1(),
                answer: '20365011074'
            }
        case 'question2':
            return {
                detail: question2(),
                answer: '5'
            }
        case 'question3':
            return {
                detail: question3(),
                answer: '27.2'
            }
    }
}

export default function Question({slug}) {

    const question = getQuestion(slug);
    return (
        <div className="space-y-8">
            <p className="text-gray-300">{question.detail}</p> 
            {/* <p className="text-gray-300">{questions[slug].answer}</p> */}
            <Input slug={slug} answer={question.answer} />
        </div>
    )
}