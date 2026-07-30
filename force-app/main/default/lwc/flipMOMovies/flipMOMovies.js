import { LightningElement, api, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getCinemas from '@salesforce/apex/FlipMOBookingController.getCinemas';
import createMovieBooking from '@salesforce/apex/FlipMOBookingController.createMovieBooking';

export default class FlipMOMovies extends LightningElement {
    @api customerId;
    cinemas = [];
    selectedCinema = '';
    selectedMovie = 'Skyline Express';
    selectedShowTime = '10:30 AM';
    seats = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4'].map(label => ({ label, variant: 'neutral', selected: false }));

    movieOptions = [
        { label: 'Skyline Express', value: 'Skyline Express' },
        { label: 'The Last Signal', value: 'The Last Signal' },
        { label: 'Monsoon Stories', value: 'Monsoon Stories' }
    ];
    showTimeOptions = [
        { label: '10:30 AM', value: '10:30 AM' },
        { label: '2:15 PM', value: '2:15 PM' },
        { label: '7:00 PM', value: '7:00 PM' }
    ];

    @wire(getCinemas)
    wiredCinemas({ data, error }) {
        if (data) this.cinemas = data;
        if (error) this.showToast('Unable to load cinemas', error.body?.message || 'Please try again.', 'error');
    }

    get cinemaOptions() { return this.cinemas.map(cinema => ({ label: cinema.Name + ' - ' + cinema.BillingCity, value: cinema.Id })); }
    get selectedSeats() { return this.seats.filter(seat => seat.selected).map(seat => seat.label); }
    get selectedSeatsLabel() { return this.selectedSeats.length ? 'Selected seats: ' + this.selectedSeats.join(', ') : 'Select one or more seats.'; }

    handleCinemaChange(event) { this.selectedCinema = event.detail.value; }
    handleMovieChange(event) { this.selectedMovie = event.detail.value; }
    handleShowTimeChange(event) { this.selectedShowTime = event.detail.value; }
    handleSeatSelection(event) {
        const label = event.currentTarget.dataset.seat;
        this.seats = this.seats.map(seat => seat.label === label ? { ...seat, selected: !seat.selected, variant: seat.selected ? 'neutral' : 'brand' } : seat);
    }

    bookMovie() {
        createMovieBooking({ customerId: this.customerId, cinemaId: this.selectedCinema, movieName: this.selectedMovie, showTime: this.selectedShowTime, seats: this.selectedSeats.join(', ') })
            .then(() => this.showToast('Booking request created', 'Your movie booking request is saved as a Salesforce Case.', 'success'))
            .catch(error => this.showToast('Booking could not be created', error.body?.message || 'Choose all booking details and try again.', 'error'));
    }

    showToast(title, message, variant) { this.dispatchEvent(new ShowToastEvent({ title, message, variant })); }
}