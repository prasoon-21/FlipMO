public with sharing class FlipMODemoData {
    public static void seedBookingData() {
        if ([SELECT COUNT() FROM Account WHERE Booking_Category__c != null] > 0) {
            return;
        }
        insert new List<Account>{
            new Account(Name = 'Harbour View Hotel', BillingCity = 'Mumbai', Booking_Category__c = 'Hotel', Booking_Details__c = '1 night stay, breakfast included', Booking_Price__c = 5499, Available_Seats__c = 8),
            new Account(Name = 'Lakefront Residency', BillingCity = 'Udaipur', Booking_Category__c = 'Hotel', Booking_Details__c = '1 night stay, lake-view room', Booking_Price__c = 4299, Available_Seats__c = 6),
            new Account(Name = 'IndiGo 6E 234', BillingCity = 'Delhi', Booking_Category__c = 'Flight', Booking_Details__c = 'Delhi to Mumbai, economy class', Booking_Price__c = 6200, Available_Seats__c = 22),
            new Account(Name = 'Vistara UK 955', BillingCity = 'Bengaluru', Booking_Category__c = 'Flight', Booking_Details__c = 'Bengaluru to Delhi, economy class', Booking_Price__c = 7100, Available_Seats__c = 18),
            new Account(Name = 'RedBus Express', BillingCity = 'Pune', Booking_Category__c = 'Bus', Booking_Details__c = 'Pune to Goa, AC sleeper', Booking_Price__c = 1400, Available_Seats__c = 16),
            new Account(Name = 'CityLink Coaches', BillingCity = 'Mumbai', Booking_Category__c = 'Bus', Booking_Details__c = 'Mumbai to Nashik, AC seater', Booking_Price__c = 850, Available_Seats__c = 20),
            new Account(Name = 'PVR Phoenix', BillingCity = 'Mumbai', Booking_Category__c = 'Cinema', Booking_Details__c = 'Screen 3, Dolby sound', Booking_Price__c = 320, Available_Seats__c = 48),
            new Account(Name = 'INOX R City', BillingCity = 'Mumbai', Booking_Category__c = 'Cinema', Booking_Details__c = 'Screen 5, recliner seating', Booking_Price__c = 380, Available_Seats__c = 36)
        };
    }
}
