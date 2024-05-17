import axios from "axios";

const apikey = process.env.STRAPI_API_TOKEN

const axiosClient = axios.create({
    baseURL: 'https://blog-ai-1.onrender.com/api',
    headers: {
        Authorization: `Bearer ${"27b75981281f2766d8208ccec71a44aea7365f2a3c5ecc9793e5ba8603ad72d1a96d9ccabc2e6958ecb33a0a941cd576d11bd667bdc460713a74e526f35f682a8f1e3c89cc6cd0da578ad6452891ba223f161c823b0c987252dd63dc800152bd7b2a76f1641cb5a115660997b801d8e223d512cbda7003d04714464a16cb4e80"}`
    }
})

export const getAiTools = () => axiosClient.get('/ai-tools?populate=*');

export const getBLog = () => axiosClient.get('/blogs?populate=*');

export const getCategory = () => axiosClient.get('/categories?populate=*');

export const getAiToolsDetailById = (slug: any) => axiosClient.get(`/ai-tools?populate=*&filters[slug][$eq]=${slug}`)

export const getBlogDetailById = (slug: any) => axiosClient.get(`/blogs?populate=*&filters[slug][$eq]=${slug}`)

export const getCategoryDetailById = (slug: any) => axiosClient.get(`/categories?populate=*&filters[slug][$eq]=${slug}`)


