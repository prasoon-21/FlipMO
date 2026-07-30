import { LightningElement } from 'lwc';
import { showToast } from 'c/flipMOUtils';
export default class FlipMOGiftCards extends LightningElement {
    handleAction() {
        showToast(this, 'Gift Card Applied', 'This functionality is mocked for the portfolio.', 'success');
    }
}