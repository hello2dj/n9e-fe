import React from 'react';
// <<<<<<< HEAD
// import { Form, Space } from 'antd';
// import _ from 'lodash';
// import useFetchDatasourceList from './useFetchDatasourceList';
// import CateSelect from './CateSelect';
// import ValueSelect from './ValueSelect';
// import Pure from './Pure';
// import './locale';
// export { useFetchDatasourceList, Pure };

// interface IProps {
//   defaultDatasourceValue?: number; // 如果是 prometheus 类型，placeholder 默认需要显示全局的数据源值
// }

// const defaultDatasourceCate = 'prometheus';

// export default function index({ defaultDatasourceValue }: IProps) {
//   return (
//     <Form.Item shouldUpdate={(prev, curr) => prev.datasourceCate !== curr.datasourceCate} noStyle>
//       {({ getFieldValue }) => {
//         const cate = getFieldValue('datasourceCate') || defaultDatasourceCate;
//         return (
//           <Space align='start'>
//             <CateSelect defaultValue={defaultDatasourceCate} />
//             <ValueSelect cate={cate} defaultDatasourceValue={defaultDatasourceValue} />
//           </Space>
//         );
//       }}
//     </Form.Item>
//   );
// }


import _ from 'lodash';
import DatasourceCateSelect, { ProSvg } from './DatasourceCateSelect';
import ProdSelect from './ProdSelect';
import DatasourceSelect from './DatasourceSelect';

import './locale';
export { DatasourceCateSelect, ProSvg, ProdSelect, DatasourceSelect };
