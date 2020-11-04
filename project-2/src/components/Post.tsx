import React from 'react';
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { IPost } from '../type';

type Props = {
    post: IPost
    removePost: (post: IPost) => void
}
