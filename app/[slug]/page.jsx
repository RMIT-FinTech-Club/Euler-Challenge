'use client'
import Input from './input';
import Question from './question';
import Button from '../component/error-button';
export default function Page({params}) {

    const slug = params.slug;
    // Capitalize the first letter of the route
    const route= slug.charAt(0).toUpperCase() + slug.slice(1, slug.length - 1) + " " + slug.charAt(slug.length - 1);

    return (
        <div className="space-y-8">
            <h1 className="text-xl font-medium text-gray-300">{route}</h1>
            <Question slug={slug} />
        </div>
    )
}