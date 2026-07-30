import { LightningElement } from 'lwc';
import { showToast } from 'c/flipMOUtils';
export default class FlipMOCustomerService extends LightningElement {
    handleAction() {
        showToast(this, 'Customer Service', 'This action will be handled by Agentforce AI in the future.', 'info');
    }
}