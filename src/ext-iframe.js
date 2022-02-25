import {LitElement, css, html} from 'lit';

export class ExtIframe extends LitElement {
  static properties = {
    name: {},
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    this.name = 'World';
  }

  // Render the UI as a function of component state
  render() {
    return html`<iframe src="https://www.wix.com/website-template/view/html/1723?utm_source=freewebsitetemplates&utm_medium=template_banner&utm_term=design&utm_content=ma_html_fwt_temp_1_1_knollwalters&utm_campaign=ma_fwt&experiment_id=cpa_fwt_temp_1_1_knollwalters1723" title="Wix web" allowfullscreen="true" width="100%" height="400" target="_parent"></iframe>
    `;
  }
}
customElements.define('ext-iframe', ExtIframe);
