// 仅测试
export default async function GetResourceData() {
    const res = await fetch('https://api.upup.cool/get/CSGO-Toolbox/version', {mode: 'no-cors'})
    console.log(res)

    const csgo_toolbox = {
        version: res,
        original_download_link: 'https://github.com/One-Studio/CSGO-Toolbox/releases/latest',
        proxy_download_link: 'https://api.upup.cool/get/CSGO-Toolbox/version'
    }

    return {csgo_toolbox};
}