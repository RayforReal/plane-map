/**
 * 根据字符串生成唯一颜色
 * @param value 字符串
 */
export function generateColor(value:string) {
    // 使用字符串哈希函数计算国家名称的哈希值
    let hashCode = 0;
    for (let i = 0; i < value.length; i++) {
        hashCode = value.charCodeAt(i) + ((hashCode << 5) - hashCode); // 简单的哈希算法
    }
    // 将哈希值限制在0到360之间
    const hue = Math.abs(hashCode % 360);
    // 转换为HSL颜色模式
    const saturation = 60; // 饱和度
    const lightness = 70; // 亮度
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
