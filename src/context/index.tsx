import React from 'react';

import { Children } from '../components/Common/types';

// TODO: 추후 유저 로그인을 통해 데이터 정보를 provider에 넣으면 괜찮을지도..?
export const EntireContextProvider = ({ children }: Children) => <React.Fragment>{children}</React.Fragment>;
