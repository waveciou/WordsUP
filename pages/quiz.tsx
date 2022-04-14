/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-cycle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import WritedExam from '@/Components/writedExam';
import { setIsExamTesting } from '@/Slice/examination';
import styles from '@/Styles/examination.module.scss';

const Quiz: React.FC = () => {
  const dispatch = useDispatch();
  const [currentExam, setCurrentExam] = useState<string>('');

  useEffect(() => () => {
    dispatch(setIsExamTesting(false));
  }, []);

  return (
    <>
      <h1 className="title">單字測驗</h1>
      <div className="content">
        {
          currentExam === '' && (
            <div className="tw-py-5 tw-px-4 tw-rounded-lg tw-shadow-[0_1px_3px_0_rgba(51,51,51,0.4)]">
              <div className="tw-text-wine/80 tw-my-5 tw-text-md tw-text-center">
                單字填空測驗 (10題)
              </div>
              <div className="tw-my-5 tw-flex tw-justify-center">
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => setCurrentExam('writedExam')}
                >
                  開始測驗
                </button>
              </div>
            </div>
          )
        }
        {
          currentExam === 'writedExam' && (
            <WritedExam
              quantity={10}
              onCancelExam={() => setCurrentExam('')}
            />
          )
        }
      </div>
    </>
  );
};

export default Quiz;
