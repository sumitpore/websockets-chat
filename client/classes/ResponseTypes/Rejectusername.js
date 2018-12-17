import AbstractResponseType from './AbstractResponseType';

class Rejectusername extends AbstractResponseType {
  static prepareHtml(msg) {
    // Disabling eslint for below line in favor of aibnb styleguide
    return `<b>Your username has been set to <em> ${msg.name} </em> because the name you chose is in use.</b><br>`; // eslint-disable-line prettier/prettier
  }
}

export default Rejectusername;
