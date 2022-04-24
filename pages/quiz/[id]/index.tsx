/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-cycle */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WritedExam from '@/Components/writedExam';
import { IExamId } from '@/Interfaces/exam';
import { setIsExamAction } from '@/Slice/exam';
import { RootState } from '@/Store/index';

const Quiz: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const WORDS_DATA = useSelector((state: RootState) => state.collection.words);
  const DAILY_WORDS = useSelector((state: RootState) => state.daily.dailyWords);
  const { isExamAction } = useSelector((state: RootState) => state.exam);

  useEffect(() => () => {
    dispatch(setIsExamAction(false));
  }, []);

  useEffect(() => {
    if (isExamAction === false) {
      router.push('/quiz');
    }
  }, [isExamAction]);

  const FailedDataCaption: React.FC = () => <div className="tw-py-8 tw-my-4 tw-text-center tw-text-gray">DATA ERROR</div>;

  const examProviderMemo = useMemo(() => {
    if (isExamAction && WORDS_DATA.length) {
      switch (id as IExamId) {
        case 'writed-exam':
        // 單字填空測驗
          if (WORDS_DATA.length >= 10) {
            return <WritedExam id="writed-exam" quantity={10} />;
          }
          return <FailedDataCaption />;
        case 'daily-writed-exam':
        // 今日單字填空測驗
          if (DAILY_WORDS.length) {
            return <WritedExam id="daily-writed-exam" quantity={DAILY_WORDS.length} />;
          }
          return <FailedDataCaption />;
        default:
          return <FailedDataCaption />;
      }
    }
    return <FailedDataCaption />;
  }, [id, isExamAction, WORDS_DATA, DAILY_WORDS]);

  return (
    <>
      <h1 className="title">單字測驗</h1>
      <div className="content">
        { examProviderMemo }
      </div>
    </>
  );
};

export default Quiz;