import React from 'react';

import Meta from '@/Components/meta';
import { IProps } from '@/Interfaces/global';

const LayoutFailed: React.FC<IProps> = ({ children }) => (
  <>
    <Meta />
    <div className="content size-small tw-bg-transparent">
      { children }
    </div>
  </>
);

export default LayoutFailed;
