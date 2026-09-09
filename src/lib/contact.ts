// This boundary deliberately prepares a draft only. Add a reviewed API adapter here later.
export function prepareEnquiry(data: FormData, interest: string, subject: string) {
  const get = (key: string) => String(data.get(key) || '').trim();
  const body = [
    get('name') + ' / ' + get('company'),
    get('email'),
    interest,
    '',
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
