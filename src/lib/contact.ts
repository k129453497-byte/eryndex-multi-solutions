// This boundary deliberately prepares a draft only. Add a reviewed API adapter here later.
export function prepareEnquiry(data: FormData, interest: string, subject: string) {
  const get = (key: string) => String(data.get(key) || '').trim();
  const body = [
    '姓名：' + get('name'),
    '公司：' + get('company'),
    '企業 Email：' + get('email'),
    '職位：' + get('jobTitle'),
    '解決方案：' + interest,
    '預算區間：' + get('budget'),
    '',
    '預計改善的系統需求：',
    get('message'),
  ].join('\n');
  return {
    body,
    mailto:
      'mailto:contact@eryndex.com?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body),
  };
}
