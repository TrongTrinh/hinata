// import {
//     SearchTwitterUserRequest,
//     SearchTwitterUserResponse,
// } from '@lib/domain/twitter/interface';
// import { get } from '@lib/infra/HTTPService/HTTPService';

// export const TwitterAPI = {
//     async searchUser(
//         req: SearchTwitterUserRequest,
//     ): Promise<SearchTwitterUserResponse> {
//         const url = `/twitter/user/${req.username}`;

//         const res = await get({ url });
//         const { data } = res;
//         return data;
//     },
// };
export const TwitterAPI = {};
