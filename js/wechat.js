function toggleWeChatBox(target) {
    // 检查 target 是否存在
    if (!target) {
      console.error('未提供有效的 target 参数');
      return;
    }
    
  // 查找父容器 team-box
  const teamBox = target.closest(".team-box");
  if (teamBox) {
    // 查找 team-box 中的 .wechatbox 元素
    const wechatBox = teamBox.querySelector(".wechatbox");
    if (wechatBox) {
        const hasWechatShow = wechatBox.classList.contains("wechatshow")
        if (hasWechatShow) {
            wechatBox.classList.remove("wechatshow");
            wechatBox.classList.remove("fade-in");
            wechatBox.classList.add("fade-out");
        } else {
            wechatBox.classList.remove("fade-out");
            wechatBox.classList.add("fade-in");
            wechatBox.classList.add("wechatshow");
        }
      
    }
  }
}
