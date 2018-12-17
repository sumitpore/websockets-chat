import AbstractResponseType from './AbstractResponseType';

class Userlist extends AbstractResponseType {
  static prepareHtml(msg) {
    let ul = '';
    let i;

    for (i = 0; i < msg.users.length; i += 1) {
      ul += `${msg.users[i]} <br>`;
    }
    return ul;
  }

  static updateChatWindow(msg, timeStr) {
    const html = this.prepareHtml(msg, timeStr);
    if (html.length) {
      chatboxElements.userlistBox.innerHTML = html;
    }
  }
}

export default Userlist;
