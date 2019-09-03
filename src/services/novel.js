import request from '@/utils/request'

export const fetchBookList = ({
    cate = '',
    pageNo = 1,
} = {}) => request(`novel/book_list?cate=${ encodeURIComponent(cate) }&pageNo=${ pageNo }&pageSize=20`)