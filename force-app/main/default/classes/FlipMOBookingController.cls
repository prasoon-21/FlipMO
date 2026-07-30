public with sharing class FlipMOBookingController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getTravelOptions(String category) {
        return [
            SELECT Id, Name, BillingCity, Booking_Details__c, Booking_Price__c, Available_Seats__c
            FROM Account
            WHERE Booking_Category__c = :category
            ORDER BY Name
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getCinemas() {
        return [
            SELECT Id, Name, BillingCity, Booking_Details__c, Booking_Price__c, Available_Seats__c
            FROM Account
            WHERE Booking_Category__c = 'Cinema'
            ORDER BY Name
        ];
    }

    @AuraEnabled
    public static Id createTravelBooking(Id customerId, Id accountId, String bookingType, String bookingDate, Integer travellerCount) {
        if (customerId == null || accountId == null || String.isBlank(bookingType) || String.isBlank(bookingDate)) {
            throw new AuraHandledException('Choose an option and travel date before booking.');
        }
        Account option = [SELECT Id, Name, Booking_Category__c FROM Account WHERE Id = :accountId LIMIT 1];
        if (option.Booking_Category__c != bookingType) {
            throw new AuraHandledException('The selected option does not match the booking type.');
        }
        Case booking = new Case(
            Subject = 'FlipMO ' + bookingType + ' booking - ' + option.Name,
            Status = 'New',
            Origin = 'Web',
            AccountId = option.Id,
            FlipMO_Customer__c = customerId,
            Description = 'Travel date: ' + bookingDate + '\nTravellers: ' + String.valueOf(travellerCount)
        );
        insert booking;
        return booking.Id;
    }

    @AuraEnabled
    public static Id createMovieBooking(Id customerId, Id cinemaId, String movieName, String showTime, String seats) {
        if (customerId == null || cinemaId == null || String.isBlank(movieName) || String.isBlank(showTime) || String.isBlank(seats)) {
            throw new AuraHandledException('Select a cinema, movie, show time, and at least one seat.');
        }
        Account cinema = [SELECT Id, Name, Booking_Category__c FROM Account WHERE Id = :cinemaId LIMIT 1];
        if (cinema.Booking_Category__c != 'Cinema') {
            throw new AuraHandledException('Choose a valid cinema hall.');
        }
        Case booking = new Case(
            Subject = 'FlipMO movie booking - ' + movieName,
            Status = 'New',
            Origin = 'Web',
            AccountId = cinema.Id,
            FlipMO_Customer__c = customerId,
            Description = 'Cinema: ' + cinema.Name + '\nShow time: ' + showTime + '\nSeats: ' + seats
        );
        insert booking;
        return booking.Id;
    }
}