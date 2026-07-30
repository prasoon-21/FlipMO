# FlipMO - Unified Commerce Platform on Salesforce

A multi-vertical booking system combining **E-commerce (Flipkart-style)**, **Travel Booking (Flights, Hotels, Buses)**, and **Movie Ticket Booking** into a single Salesforce Lightning application.

> Built with maximum Standard Salesforce functionality and minimal customization.

---

<img width="1875" height="737" alt="Screenshot 2026-07-30 154706" src="https://github.com/user-attachments/assets/5d4f5115-286d-4f17-90db-f63f3763a44c" />
<img width="1900" height="721" alt="Screenshot 2026-07-30 154723" src="https://github.com/user-attachments/assets/da68f41e-ae30-4797-9fb5-0363ee34a99c" />

## Project Objective

To demonstrate how Salesforce's out-of-the-box capabilities can power a complex multi-service platform without heavy customization — leveraging **Standard Objects**, **SLDS styling**, and **declarative automation** wherever possible.

---

## Architecture Philosophy
Maximum Standard | Minimum Custom
─────────────────────┼─────────────────────
Standard Objects | Only 5-6 Custom Objects
SLDS Base Styling | No Custom CSS
Point & Click Flows | Code only where necessary
Standard Components | Reusable LWC Components
Profiles/Perm Sets | No Custom Apex Security


---

## Platform Modules

### E-Commerce (Flipkart-Style)
- Product browsing by category
- Search functionality
- Add to cart / Wishlist
- Order placement & tracking

### Travel Booking
- Flight search & booking
- Hotel search & room selection
- Bus ticket booking
- Passenger details capture
- Combined travel itinerary

### Movie Booking
- Browse movies by genre/language
- Theater & showtime selection
- Interactive seat map
- Ticket booking & confirmation

### Unified Cart
- Single cart across all three verticals
- Mixed item handling (Flight + Movie + Product)
- Common checkout flow

---


## Admin Configuration (Config > Code)

- ✅ **Record Types** on Product2 for multi-category catalog
- ✅ **Validation Rules** for booking date checks, inventory validation
- ✅ **Lightning Flows** for cart-to-order conversion & seat booking
- ✅ **Profiles & Permission Sets** for role-based access
- ✅ **Sharing Rules** for data visibility
- ✅ **Reports & Dashboards** for business insights

---

## Developer Components

### LWC (No Custom CSS — Pure SLDS)

| Component | Description |
|-----------|-------------|
| `productCard` | Reusable card for all product types |
| `productBrowser` | Product listing with search & filters |
| `cartManager` | Unified cart across modules |
| `flightSearch` | Flight search form & results |
| `movieList` | Movie browsing grid |
| `seatSelector` | Interactive seat booking |
| `unifiedHome` | Landing page with module tiles |

---

## Integration Approach

- Mock API layer simulating external e-commerce/travel APIs
- Designed for easy swap with real APIs (Amadeus, Skyscanner, etc.)
- Uses Named Credentials pattern for secure endpoint management
- Scheduled sync ready for inventory updates

---

---

## Quick Setup

1. Deploy to Salesforce Developer Edition
2. Assign permission sets to users
3. Run demo data script from Anonymous Apex
4. Activate Lightning Flows
5. Open FlipMO App from App Launcher

---

## Built For

Salesforce Training & Internship Project — demonstrating **Admin + Developer** skills with a **"Standard First"** approach.

---

## Key Metrics

| Metric | Count |
|--------|-------|
| Custom Objects | 5 |
| LWC Components | 7 |
| Apex Classes | 5 |
| Lightning Flows | 3 |
| Standard Objects Used | 8 |
| Custom CSS Files | 0 |

---

## Author

Prasoon Mishra
Salesforce Developer Intern  
