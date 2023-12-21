import Input from './input'
import questions from './questions'

const question1 = () => {
    // question about climbing stairs in dynamic programming

    return (
        <>
            <p>A child is running up a staircase with n steps and can hop either 1 step, 2 steps at a time. How many possible ways the child can run up the stairs which have <strong>20</strong> steps.</p>

        </>
    )
        
}
const question2 = () => {
    return (
        <>
            <p>Using a combination of grey square tiles and oblong tiles chosen from: red tiles (measuring two units), green tiles (measuring three units), and blue tiles (measuring four units), it is possible to tile a row measuring five units in length in exactly fifteen different ways.</p>

            <div className="flex justify-center">
                <img src="/tiles.png" alt="question2"/>
            </div>
            <p>How many ways can a row measuring 50 units in length be tiled?</p>
        </>
    )
};


const question3 = () => {
    return (
        <>
            <p>In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:</p>
            <blockquote>1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).</blockquote>
            <p>It is possible to make £2 in the following way:</p>
            <blockquote>1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p</blockquote>
            <p>How many different ways can £2 be made using any number of coins?</p>
        </>
    )
}

function getQuestion(slug) {
    // return question detail and answer
    switch (slug) {
        case 'question1':
            return {
                detail: question1(),
                answer: '10946'
            }
        case 'question2':
            return {
                detail: question2(),
                answer: '190569291'
            }
        case 'question3':
            return {
                detail: question3(),
                answer: '73682'
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