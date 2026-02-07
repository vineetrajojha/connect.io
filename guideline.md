I'll help you create a comprehensive prompt for building a modern healthcare platform. Let me search for current design trends and best practices first.Now I'll create a comprehensive prompt for you to build this modern healthcare platform:

---

# **Comprehensive Prompt: Modern Healthcare Platform - Doctor & Patient Portal**

## **Project Overview**
Create a premium, modern healthcare web application with separate interfaces for doctors and patients. The platform should feature appointment booking, patient management, doctor discovery, and real-time availability tracking. Design inspiration should draw from Awwwards-winning healthcare sites and modern SaaS dashboards.

---

## **Tech Stack**
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: GSAP (GreenSock) for smooth, professional animations
- **Icons**: Lucide React (modern, consistent icon set)
- **Additional Libraries**:
  - React Router DOM (navigation)
  - React Hook Form + Zod (form validation)
  - Date-fns or Day.js (date handling)
  - Recharts (data visualization for dashboards)
  - Framer Motion (supplementary micro-interactions)

---

## **Design System & Visual Identity**

### **Color Palette** (Modern Healthcare - Light Mode)
```
Primary Colors:
- Primary Blue: #3B82F6 (Medical trust, professionalism)
- Primary Dark: #1E40AF (Depth, headers)
- Accent Teal: #14B8A6 (Success states, highlights)
- Accent Purple: #8B5CF6 (Premium features, special actions)

Neutral Palette:
- Background: #FAFBFC (Soft white, reduces eye strain)
- Surface: #FFFFFF (Cards, modals)
- Border: #E5E7EB (Subtle dividers)
- Text Primary: #1F2937 (High contrast)
- Text Secondary: #6B7280 (Supporting text)
- Text Tertiary: #9CA3AF (Placeholders)

Semantic Colors:
- Success: #10B981 (Confirmed appointments)
- Warning: #F59E0B (Pending actions)
- Error: #EF4444 (Cancellations, alerts)
- Info: #3B82F6 (Notifications)

Gradients:
- Hero Gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
- Card Hover: linear-gradient(120deg, #f6f8fb 0%, #ffffff 100%)
```

### **Typography**
```
Font Family: 'Inter' (primary), 'Plus Jakarta Sans' (headings)

Scale:
- Display: 48px / 3rem (Hero headings)
- H1: 36px / 2.25rem
- H2: 30px / 1.875rem
- H3: 24px / 1.5rem
- H4: 20px / 1.25rem
- Body Large: 18px / 1.125rem
- Body: 16px / 1rem
- Body Small: 14px / 0.875rem
- Caption: 12px / 0.75rem

Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
```

### **Spacing & Layout**
```
Container Max Width: 1280px
Grid: 12-column with 24px gutters
Border Radius: 
  - Small: 8px (buttons, inputs)
  - Medium: 12px (cards)
  - Large: 16px (modals, major sections)
  
Shadows:
  - Subtle: 0 1px 3px rgba(0,0,0,0.1)
  - Medium: 0 4px 6px rgba(0,0,0,0.07)
  - Large: 0 10px 15px rgba(0,0,0,0.1)
  - XL: 0 20px 25px rgba(0,0,0,0.1)
```

---

## **Core Features & Pages**

### **1. Authentication System**

#### **Landing Page** (`/`)
- **Hero Section**:
  - Animated gradient background with floating medical icons
  - Main headline: "Healthcare Made Simple" with typing animation
  - CTA buttons: "Find a Doctor" | "Doctor Login"
  - GSAP scroll-triggered animations for feature cards
  
- **Features Grid**:
  - 24/7 Online Consultations
  - Smart Appointment Booking
  - Secure Health Records
  - Expert Medical Team
  - Each with custom icon, smooth hover effects
  
- **Stats Section**:
  - Counter animations (GSAP): "10,000+ Patients", "500+ Doctors", "50+ Specialties"
  
- **How It Works** (3-step process with scroll animations)
- **Featured Doctors Carousel** (GSAP horizontal scroll)
- **Testimonials** (Auto-rotating with fade transitions)

#### **Sign Up / Login Pages** (`/signup`, `/login`)
- **Dual-mode forms**:
  - Toggle between Patient/Doctor registration
  - Glass-morphism card design
  - Smooth transitions between forms (Framer Motion)
  
- **Patient Sign Up Fields**:
  - Full Name, Email, Password, Phone
  - Date of Birth, Gender, Blood Group
  - Emergency Contact
  - Profile Photo upload (with preview)
  
- **Doctor Sign Up Fields**:
  - Full Name, Email, Password, Phone
  - Specialization (searchable dropdown)
  - License Number, Years of Experience
  - Education, Hospital Affiliation
  - Profile Photo, Certificates upload
  - Consultation Fee, Available Days
  
- **Validation**: Real-time with Zod schema
- **Error Handling**: Inline error messages with shake animations

---

### **2. Patient Dashboard** (`/patient/dashboard`)

#### **Main Dashboard Layout**
- **Sidebar Navigation** (collapsible):
  - Home (Dashboard overview)
  - Find Doctors
  - My Appointments
  - Health Records
  - Prescriptions
  - Messages
  - Profile Settings
  
- **Top Header Bar**:
  - Search (global doctor/speciality search)
  - Notifications bell (with badge count)
  - Profile dropdown menu

#### **Dashboard Overview**
- **Welcome Card**: "Hello, [Name]! How are you feeling today?"
  - Mood selector with emoji reactions
  
- **Quick Actions Grid**:
  - Book Appointment (primary CTA)
  - Upload Records
  - View Prescriptions
  - Contact Support
  
- **Upcoming Appointments Card**:
  - Timeline view with doctor photos
  - Quick actions: Reschedule, Cancel, Start Video Call
  - Countdown timer for next appointment
  
- **Health Metrics Widget** (if integrated with wearables):
  - Heart Rate, Blood Pressure, Steps
  - Mini charts (Recharts area charts)
  
- **Recommended Doctors**:
  - Based on search history/specialties
  - Carousel with hover zoom effects

---

### **3. Find Doctors** (`/patient/find-doctors`)

#### **Search & Filters**
- **Search Bar**: 
  - Autocomplete for doctor names, specialties, conditions
  - Voice search icon (with animation)
  
- **Advanced Filters** (collapsible sidebar):
  - Specialty (multi-select checkboxes)
  - Location (geolocation + manual entry)
  - Availability (Today, Tomorrow, This Week)
  - Gender Preference
  - Consultation Fee Range (slider)
  - Experience (0-5, 5-10, 10+ years)
  - Languages Spoken
  - Hospital/Clinic
  - Rating (4+ stars)
  
- **Sort Options**: 
  - Relevance, Rating, Experience, Fee (Low-High), Availability

#### **Doctor Cards Grid**
Each card displays:
- **Profile Photo** (rounded, with online status indicator)
- **Name & Credentials** (Dr. Name, MBBS, MD - Cardiology)
- **Rating** (stars + review count)
- **Experience** (X years)
- **Consultation Fee** (₹XXX)
- **Next Available Slot** (pill badge)
- **Location** (icon + city)
- **"View Profile" button** (hover gradient effect)

**Hover State**:
- Card lifts (translateY -4px)
- Shadow intensifies
- "Book Now" quick action appears

---

### **4. Doctor Profile Page** (`/patient/doctor/:id`)

#### **Profile Header**
- **Left Section**:
  - Large profile photo
  - Verified badge (checkmark icon)
  - Online/Offline status dot
  
- **Center Section**:
  - Name with credentials
  - Specialization badges (styled pills)
  - Star rating (large) + total reviews
  - Experience, Languages, Location
  
- **Right Section**:
  - Consultation Fee (highlighted)
  - "Book Appointment" CTA button (sticky on scroll)

#### **Tabbed Content**
**Tab 1: About**
- Bio paragraph
- Education timeline (vertical with icons)
- Certifications (badge grid)
- Awards & Recognitions

**Tab 2: Available Slots**
- **Calendar View**:
  - Month picker (date-fns)
  - Available dates highlighted (green dots)
  - Disabled dates grayed out
  
- **Time Slot Selector**:
  - Morning (6AM-12PM), Afternoon (12PM-6PM), Evening (6PM-12AM)
  - Slots in grid format (e.g., "9:00 AM - 9:30 AM")
  - Booked slots: disabled + strikethrough
  - Available slots: clickable with hover effect
  
- **Booking Flow**:
  1. Select date → Time slots load
  2. Select slot → Confirmation modal
  3. Add reason for visit (textarea)
  4. Choose consultation type (In-person / Video)
  5. Confirm booking → Success animation (confetti or checkmark)

**Tab 3: Reviews**
- Overall rating breakdown (5★: 70%, 4★: 20%, etc.) with bars
- Individual reviews:
  - Patient name (anonymized: "John D.")
  - Star rating
  - Date
  - Review text
  - Helpful count (thumbs up)
- Load more button

**Tab 4: Clinic Info**
- Address with map embed (Google Maps)
- Opening hours
- Contact number
- Photo gallery

---

### **5. Patient Appointments** (`/patient/appointments`)

#### **Tabs**: Upcoming | Past | Cancelled

**Appointment Cards**:
- **Doctor Mini-Profile** (photo + name)
- **Date & Time** (large, prominent)
- **Consultation Type** (badge: In-person/Video)
- **Status** (color-coded pill):
  - Confirmed (green)
  - Pending (yellow)
  - Completed (blue)
  - Cancelled (red)
  
- **Actions** (icon buttons):
  - Reschedule (calendar icon)
  - Cancel (X icon)
  - Start Call (video icon, only if within 15 min of time)
  - View Details (eye icon)
  
**Empty State**: "No appointments yet. Find a doctor to book your first consultation!"

---

### **6. Doctor Dashboard** (`/doctor/dashboard`)

#### **Sidebar Navigation**:
- Dashboard Overview
- My Patients
- Appointments
- Schedule Management
- Prescriptions
- Messages
- Analytics
- Profile Settings

#### **Dashboard Overview**
- **Stats Cards** (4-column grid):
  - Total Patients (with trend arrow)
  - Today's Appointments (number + time)
  - Pending Reviews (count)
  - Monthly Earnings (with chart icon)
  - Each with unique gradient background
  
- **Today's Schedule** (timeline):
  - Chronological appointment list
  - Patient photos, names, reason
  - Start Consultation button (if time is now)
  
- **Recent Patients**:
  - Table with patient name, last visit, condition
  - Quick access to records
  
- **Earnings Chart**:
  - Area chart (Recharts)
  - Monthly breakdown
  - Filters: This Month, Last 3 Months, This Year

---

### **7. Doctor - My Patients** (`/doctor/patients`)

#### **Patient List View**
- **Search & Filters**:
  - Search by name/ID
  - Filter by: Last Visit, Condition, Gender, Age Range
  
- **Table/Card View Toggle**

**Patient Cards**:
- Photo, Name, Age, Blood Group
- Last consultation date
- Total visits count
- Quick actions:
  - View Full History
  - Schedule Follow-up
  - Send Message

**Patient Detail Modal**:
- **Tabs**:
  - Personal Info (contact, emergency contact, insurance)
  - Medical History (conditions, allergies, surgeries)
  - Appointment History (timeline view)
  - Prescriptions (downloadable PDFs)
  - Reports & Scans (image viewer)
  - Notes (doctor's private notes)

---

### **8. Doctor - Appointments** (`/doctor/appointments`)

#### **Views**: Today | Upcoming | Past | Cancelled

**Appointment Cards**:
- Patient name, photo, age
- Scheduled time
- Consultation type
- Reason for visit
- Status
- Actions:
  - Start Consultation
  - Reschedule
  - Cancel
  - Mark as Completed

**Consultation Interface** (Video/In-person):
- Patient info sidebar
- Notes editor (rich text)
- Prescription generator
- Upload reports button
- End consultation (auto-saves to history)

---

### **9. Doctor - Schedule Management** (`/doctor/schedule`)

#### **Calendar Interface**
- Month/Week/Day views
- Drag-and-drop time blocks to set availability
- **Set Recurring Schedule**:
  - Select days of week
  - Set time ranges
  - Break times
  - Duration per consultation (15/30/45/60 min)
  
- **Leave Management**:
  - Mark dates as unavailable
  - Block specific time slots
  
- **Buffer Settings**:
  - Gap between appointments
  - Max appointments per day

---

## **Design Patterns & Animations**

### **GSAP Animations**
1. **Page Transitions**:
   - Fade in with stagger for cards/lists
   - Smooth scroll animations (ScrollTrigger)
   
2. **Hero Section**:
   - Text reveal (SplitText)
   - Floating medical icons (morphSVG)
   - Parallax background layers
   
3. **Dashboard**:
   - Counter animations for stats
   - Chart data entry animations
   
4. **Modals**:
   - Scale + fade entrance
   - Backdrop blur with timeline
   
5. **Buttons**:
   - Ripple effect on click
   - Hover scale (1.05)

### **Micro-interactions** (Framer Motion)
- Input focus: border glow + label float
- Checkbox/radio: checkmark draw animation
- Toggle switches: smooth slide with spring
- Dropdown menus: height animation with opacity
- Toast notifications: slide in from top-right
- Loading states: skeleton screens with shimmer

### **Responsive Design**
- **Desktop** (1280px+): Full sidebar, 3-4 column grids
- **Tablet** (768px-1279px): Collapsible sidebar, 2-column grids
- **Mobile** (<768px): Bottom navigation, single column, full-width cards

---

## **Component Architecture**

### **Shared Components** (`/components/shared`)
```
Button.tsx (variants: primary, secondary, outline, ghost)
Input.tsx
Select.tsx
Checkbox.tsx
Radio.tsx
Switch.tsx
Modal.tsx
Card.tsx
Badge.tsx
Avatar.tsx
Dropdown.tsx
DatePicker.tsx
TimePicker.tsx
Tabs.tsx
Table.tsx
Pagination.tsx
EmptyState.tsx
LoadingSpinner.tsx
Toast.tsx
SearchBar.tsx
```

### **Feature Components** (`/components/features`)
```
/auth
  - LoginForm.tsx
  - SignUpForm.tsx
  - RoleToggle.tsx

/patient
  - DoctorCard.tsx
  - AppointmentCard.tsx
  - FilterSidebar.tsx
  - BookingModal.tsx

/doctor
  - PatientCard.tsx
  - ScheduleCalendar.tsx
  - ConsultationInterface.tsx
  - PrescriptionGenerator.tsx
  - StatsCard.tsx
```

---

## **State Management**
- **Context API** for auth state
- **React Query** for server state (API calls)
- **Zustand** for global UI state (modals, toasts, theme)

---

## **Accessibility (WCAG 2.1 AA)**
- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation (Tab, Enter, Esc)
- Focus visible states (ring-2 ring-offset-2)
- Color contrast ratios ≥ 4.5:1
- Skip to content link
- Screen reader announcements for dynamic updates

---

## **Performance Optimizations**
- Lazy loading routes (React.lazy + Suspense)
- Image optimization (WebP, lazy loading, blur placeholders)
- Code splitting by route
- Memoization (React.memo, useMemo, useCallback)
- Virtual scrolling for long lists (react-window)
- Debounced search inputs

---

## **Additional Features to Consider**
- **Dark Mode** toggle (persistent in localStorage)
- **Multi-language** support (i18n)
- **Push Notifications** (appointment reminders)
- **Chat System** (patient-doctor messaging)
- **Video Call Integration** (WebRTC or Twilio)
- **Payment Gateway** (Razorpay/Stripe)
- **Health Records Upload** (drag-drop with file preview)
- **Prescription PDF Generator**
- **Analytics Dashboard** (for doctors: patient demographics, revenue trends)

---

## **File Structure**
```
src/
├── assets/
│   ├── icons/
│   └── images/
├── components/
│   ├── shared/
│   └── features/
├── pages/
│   ├── auth/
│   ├── patient/
│   └── doctor/
├── hooks/
├── utils/
├── services/
│   └── api/
├── context/
├── styles/
│   └── globals.css
├── types/
└── App.tsx
```

---

## **Design References**
- **Awwwards Winners**: Soft gradients, clean white space, micro-animations
- **Modern SaaS**: Notion, Linear, Stripe dashboards
- **Healthcare**: Calm color palettes, trust-building imagery, accessibility focus

---

This prompt provides a complete blueprint for building a professional, modern healthcare platform with attention to design, UX, and technical implementation. Use this as your guide to create an exclusive, award-worthy web application!