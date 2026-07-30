public with sharing class FlipMOUserController {
    @AuraEnabled
    public static List<Order__c> getOrderHistory(Id customerId) {
        try {
            return new OrderSelector().getOrdersByCustomerId(customerId);
        } catch(Exception e) { throw new AuraHandledException(e.getMessage()); }
    }
}