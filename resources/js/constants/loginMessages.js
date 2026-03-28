export const LOGIN_ALERT_MESSAGES = {
    401: {
        type: 'error',
        title: 'ログインに失敗しました',
        message: 'メールアドレスまたはパスワードが正しくありません。',
    },
    423: {
        type: 'lock',
        title: 'アカウントがロックされています',
        message: 'しばらく待ってから再度ログインしてください。',
    },
    429: {
        type: 'rate-limit',
        title: '試行回数が多すぎます',
        message: '短時間にログインを試しすぎました。少し時間を置いて再度お試しください。',
    },
    default: {
        type: 'error',
        title: '通信エラーが発生しました',
        message: '時間を置いて再度お試しください。',
    },
};
