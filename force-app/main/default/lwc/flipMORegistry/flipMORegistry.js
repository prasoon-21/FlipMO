import { LightningElement } from 'lwc';
import { showToast } from 'c/flipMOUtils';
export default class FlipMORegistry extends LightningElement {
    handleAction() {
        showToast(this, 'Registry Portal', 'The Registry management backend is currently under construction.', 'success');
    }
}