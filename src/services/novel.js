import request from '@/utils/request'

export const fetchBookList = ({
    cate = '',
    pageNo = 1,
} = {}) => request(`novel/book_list?cate=${ encodeURIComponent(cate) }&pageNo=${ pageNo }&pageSize=20`)

export const fetchChapters = ({
    book_id,
    pageNo,
    order
}) => request(`novel/book_chapters?bookid=${ book_id }&pageNo=${ pageNo }&order=${ order }`)

export const chapterContent = ({
    book_id,
    chapter_id
}) => request(`novel/chapter_content?book_id=${ book_id }&chapter_id=${ chapter_id }`)