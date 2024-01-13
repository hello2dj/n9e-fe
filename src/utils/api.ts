/*
 * Copyright 2022 Nightingale Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
function getApi(path: string) {
  const prefix = '/api/n9e/busi-group';
  return (busiGroup: string | number) => {
    return `${prefix}/${busiGroup}${path}`;
  }
}

export const isNoPerm = (err: Error) => {
  return (err && err.message.includes("没有权限"))
}

const api = {
  tasktpls: getApi('/task-tpls'),
  tasktpl: getApi('/task-tpl'),
  tasks: getApi('/tasks'),
  task: getApi('/task'),
  perms: getApi('/builtin-perms'),
};

export default api;