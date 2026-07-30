import { LightningElement } from 'lwc';
import { showToast } from 'c/flipMOUtils';
export default class FlipMOSell extends LightningElement {
    handleAction() {
        showToast(this, 'Seller Portal', 'Seller onboarding is not available in the demo environment.', 'info');
    }
}