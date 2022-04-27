/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-cycle */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { PrimaryButton } from '@/Components/form';
import getExamName from '@/Functions/examName';
import { IExamId } from '@/Interfaces/exam';
import { setIsExamAction } from '@/Slice/exam';

const Quiz: React.FC = () => {
  interface IQuizCollection {
    title: string;
    description: string;
    path: IExamId;
  }

  const router = useRouter();
  const dispatch = useDispatch();
  const [quizCollection, setQuizCollection] = useState<IQuizCollection[]>([]);

  useEffect(() => {
    setQuizCollection([
      {
        title: getExamName('writed-random'),
        description: '從單字資料庫隨機取得10個單字來進行填空測驗',
        path: 'writed-random',
      },
      {
        title: getExamName('writed-daily'),
        description: '使用「今日單字」進行填空測驗',
        path: 'writed-daily',
      },
      {
        title: getExamName('writed-group-1'),
        description: '從「ABCDE」字首的單字隨機取得10個單字來進行填空測驗',
        path: 'writed-group-1',
      },
      {
        title: getExamName('writed-group-2'),
        description: '從「FGHIJ」字首的單字隨機取得10個單字來進行填空測驗',
        path: 'writed-group-2',
      },
      {
        title: getExamName('writed-group-3'),
        description: '從「KLMNO」字首的單字隨機取得10個單字來進行填空測驗',
        path: 'writed-group-3',
      },
      {
        title: getExamName('writed-group-4'),
        description: '從「PQRST」字首的單字隨機取得10個單字來進行填空測驗',
        path: 'writed-group-4',
      },
      {
        title: getExamName('writed-group-5'),
        description: '從「UVWXYZ」字首的單字隨機取得10個單字來進行填空測驗',
        path: 'writed-group-5',
      },
    ]);
  }, []);

  return (
    <>
      <h1 className="title">單字測驗</h1>
      <div className="content">
        {
          quizCollection.map(({ title, description, path }: IQuizCollection, index: number) => (
            <div
              key={path}
              className={`tw-py-5 tw-px-4 tw-rounded-lg tw-shadow-[0_1px_3px_0_rgba(51,51,51,0.4)] ${index + 1 === quizCollection.length ? '' : 'tw-mb-4'}`}
            >
              <div className="tw-text-wine tw-mb-5 tw-text-md tw-text-center tw-leading-9 before-font-material">
                { title }
              </div>
              <p className="tw-text-center tw-text-xs tw-text-brown">{ description }</p>
              <div className="tw-mt-5 tw-flex tw-justify-center">
                <PrimaryButton
                  text="開始測驗"
                  onClick={async () => {
                    await dispatch(setIsExamAction(true));
                    await router.push(`/quiz/${path}`);
                  }}
                />
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Quiz;
