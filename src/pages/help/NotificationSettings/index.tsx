import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import PageLayout from '@/components/pageLayout';
import Webhooks from './Webhooks';
import Script from './Script';
import Info from '../../account/info'
import Channels from './Channels';
import Contacts from './Contacts';
import SMTP from './SMTP';
// @ts-ignore
import NotificationSettings from 'plus:/parcels/NotificationSettings';
import './style.less';
import './locale';
import { panelBaseProps } from '@/pages/alertRules/constants';

export default function index() {
  const { t } = useTranslation('notificationSettings');
  const { search } = useLocation();
  const query = queryString.parse(search);
  const history = useHistory();
  const [activeKey, setActiveKey] = React.useState((query.tab as string) || 'webhooks');
  const panes = [
    {
      key: 'webhooks',
      tab: t('webhooks.title'),
      content: <Webhooks />,
    },
    // {
    //   key: 'script',
    //   tab: t('script.title'),
    //   content: <Script />,
    // },
    {
      key: 'info',
      tab: t('告警地址设置'),
      content: <Info />,
    },
    {
      key: 'channels',
      tab: t('channels.title'),
      content: <Channels />,
    },
    {
      key: 'contacts',
      tab: t('contacts.title'),
      content: <Contacts />,
    },
    // {
    //   key: 'smtp',
    //   tab: t('smtp.title'),
    //   content: <SMTP />,
    // },
    ...(NotificationSettings() || []),
  ];

  return (
    <PageLayout title={t('title')}>
      <div>
        <div
          style={{
            padding: '0 10px 10px 10px',
          }}
        >
          <Tabs
            activeKey={activeKey}
            onChange={(val) => {
              setActiveKey(val);
              history.push({
                search: `?tab=${val}`,
              });
            }}
          >
            {panes.map((pane) => {
              return (
                <Tabs.TabPane tab={pane.tab} key={pane.key}>
                  {pane.content}
                </Tabs.TabPane>
              );
            })}
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
}
