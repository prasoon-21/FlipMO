import { LightningElement, api, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getTravelOptions from '@salesforce/apex/FlipMOBookingController.getTravelOptions';
import createTravelBooking from '@salesforce/apex/FlipMOBookingController.createTravelBooking';

export default class FlipMOTravel extends LightningElement {
    @api customerId;
    category = 'Hotel';
    travelDate;
    travellerCount = 1;
    options;

    connectedCallback() { this.travelDate = new Date().toISOString().slice(0, 10); }

    @wire(getTravelOptions, { category: '$category' })
    wiredOptions({ data, error }) {
        if (data) this.options = data;
        if (error) this.showToast('Unable to load travel options', error.body?.message || 'Please try again.', 'error');
    }

    handleTabChange(event) { this.category = event.target.value; }
    handleDateChange(event) { this.travelDate = event.target.value; }
    handleTravellerChange(event) { this.travellerCount = event.target.value; }

    bookOption(event) {
        createTravelBooking({ customerId: this.customerId, accountId: event.currentTarget.dataset.id, bookingType: this.category, bookingDate: this.travelDate, travellerCount: Number(this.travellerCount) })
            .then(() => this.showToast('Booking request created', 'Your ' + this.category.toLowerCase() + ' booking request is saved as a Salesforce Case.', 'success'))
            .catch(error => this.showToast('Booking could not be created', error.body?.message || 'Please try again.', 'error'));
    }

    showToast(title, message, variant) { this.dispatchEvent(new ShowToastEvent({ title, message, variant })); }
}