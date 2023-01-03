import { Article } from "../models/article";

export const MockArticles: Article[] = [
    {
        id: 1,
        title: "My first Article",
        content: '',
        description: "",
        key: "my-first-article",
        date: new Date(),
        imageUrl: "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/11/breaking-1603159815-1606179737.jpg"
    },
    {
        id: 2,
        title: "My second Article",
        content: '',
        description: "",
        key: "my-second-article",
        date: new Date(),
        imageUrl: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/05/breaking-news-jpeg-1651538030.jpg"
    }
]
