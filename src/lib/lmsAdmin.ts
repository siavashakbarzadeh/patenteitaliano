// ─── LMS Admin Data Layer ──────────────────────────────────────────────────────
// localStorage-based CRUD for all admin modules migrated from Laravel + LMS Ali

const KEY = (mod: string) => `lmsadmin_${mod}`;

function load<T>(mod: string, fallback: T[] = []): T[] {
  try { return JSON.parse(localStorage.getItem(KEY(mod)) || "null") ?? fallback; }
  catch { return fallback; }
}
function save<T>(mod: string, data: T[]) {
  localStorage.setItem(KEY(mod), JSON.stringify(data));
}
function loadObj<T>(mod: string, fallback: T): T {
  try { return JSON.parse(localStorage.getItem(KEY(mod)) || "null") ?? fallback; }
  catch { return fallback; }
}
function saveObj<T>(mod: string, data: T) {
  localStorage.setItem(KEY(mod), JSON.stringify(data));
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Role {
  id: string; name: string; permissions: string[]; description: string; createdAt: string;
}

export interface Category {
  id: string; title: string; icon: string; slug: string; parentId: string | null;
  order: number; status: "active" | "inactive"; description: string;
}

export interface LmsWebinar {
  id: string; title: string; slug: string; type: "course" | "webinar" | "text_lesson";
  price: number; status: "active" | "pending" | "draft" | "inactive";
  teacher: string; categoryId: string; description: string; color: string;
  chaptersCount: number; studentsCount: number; createdAt: string;
}

export interface LmsQuiz {
  id: string; title: string; webinarId: string; chapterId: string;
  totalMark: number; passMark: number; timeLimit: number; // minutes
  attempts: number; status: "active" | "inactive"; questionsCount: number;
  createdAt: string;
}

export interface LmsOrder {
  id: string; username: string; amount: number; status: "paid" | "pending" | "refunded" | "failed";
  items: { title: string; price: number; type: string }[];
  paymentMethod: string; createdAt: string;
}

export interface SaleRecord {
  id: string; webinarId: string; webinarTitle: string; username: string;
  amount: number; commission: number; status: "completed" | "refunded" | "pending";
  createdAt: string;
}

export interface MeetingRecord {
  id: string; title: string; instructor: string; date: string; time: string;
  duration: number; type: "zoom" | "bbb" | "agora" | "in_person";
  capacity: number; price: number; status: "scheduled" | "completed" | "cancelled";
  link: string; description: string;
}

export interface BlogPost {
  id: string; title: string; slug: string; author: string;
  category: string; content: string; status: "published" | "draft" | "pending";
  image: string; tags: string[]; createdAt: string;
}

export interface ForumTopic {
  id: string; title: string; category: string; author: string;
  postsCount: number; status: "open" | "closed" | "pinned" | "solved";
  createdAt: string;
}

export interface ProductItem {
  id: string; title: string; type: "digital" | "physical";
  price: number; inventory: number; status: "active" | "inactive";
  category: string; description: string; downloads: number; createdAt: string;
}

export interface BundleItem {
  id: string; title: string; courses: string[]; price: number;
  originalPrice: number; status: "active" | "inactive"; description: string;
  createdAt: string;
}

export interface FormItem {
  id: string; title: string; fieldsCount: number; submissionsCount: number;
  status: "active" | "inactive"; createdAt: string;
}

export interface InstallmentPlan {
  id: string; title: string; steps: number; upfront: number;
  targetItems: string[]; status: "active" | "inactive"; createdAt: string;
}

export interface RewardItem {
  id: string; title: string; type: "score" | "badge" | "certificate";
  condition: string; score: number; status: "active" | "inactive";
}

export interface NewsletterEntry {
  id: string; email: string; subscribedAt: string; status: "active" | "unsubscribed";
}

export interface PageItem {
  id: string; title: string; slug: string; content: string;
  status: "published" | "draft"; seoTitle: string; seoDescription: string;
  createdAt: string;
}

export interface ContactEntry {
  id: string; name: string; email: string; phone: string;
  subject: string; message: string; status: "new" | "replied" | "closed";
  reply: string; createdAt: string;
}

export interface GiftEntry {
  id: string; sender: string; recipient: string; recipientEmail: string;
  itemTitle: string; itemType: "course" | "bundle" | "product";
  message: string; status: "pending" | "delivered" | "claimed";
  createdAt: string;
}

export interface CurrencyItem {
  id: string; code: string; name: string; symbol: string; exchangeRate: number;
  status: "active" | "inactive";
}

export interface UpcomingCourse {
  id: string; title: string; category: string; instructor: string;
  releaseDate: string; followers: number; status: "upcoming" | "released";
  description: string;
}

export interface InstructorRequest {
  id: string; username: string; displayName: string; specialty: string;
  experience: string; status: "pending" | "approved" | "rejected";
  createdAt: string;
}

export interface PromotionItem {
  id: string; title: string; type: "banner" | "popup" | "special_offer";
  targetUrl: string; position: string; startDate: string; endDate: string;
  status: "active" | "inactive"; impressions: number; clicks: number;
}

export interface PaymentChannel {
  id: string; name: string; type: "stripe" | "paypal" | "bank" | "crypto" | "manual";
  status: "active" | "inactive"; isDefault: boolean; credentials: string;
}

export interface CashbackRule {
  id: string; title: string; percent: number; minPurchase: number;
  maxCashback: number; targetType: "all" | "course" | "bundle" | "product";
  status: "active" | "inactive"; startDate: string; endDate: string;
}

export interface AiTemplate {
  id: string; title: string; prompt: string; category: string;
  usageCount: number; status: "active" | "inactive"; createdAt: string;
}

export interface RegionItem {
  id: string; name: string; type: "country" | "province" | "city";
  parentId: string | null; code: string; status: "active" | "inactive";
}

export interface FloatingBarItem {
  id: string; title: string; content: string; position: "top" | "bottom";
  btnText: string; btnUrl: string; bgColor: string; textColor: string;
  status: "active" | "inactive"; startDate: string; endDate: string;
}

export interface CommentItem {
  id: string; author: string; content: string; webinarTitle: string;
  status: "approved" | "pending" | "rejected"; createdAt: string;
}

export interface ReviewItem {
  id: string; author: string; webinarTitle: string; rating: number;
  content: string; status: "published" | "pending" | "hidden"; createdAt: string;
}

export interface DocumentVerification {
  id: string; username: string; documentType: string; status: "pending" | "approved" | "rejected";
  submittedAt: string; note: string;
}

export interface DeleteAccountReq {
  id: string; username: string; reason: string; status: "pending" | "approved" | "rejected";
  createdAt: string;
}

export interface NotificationTemplate {
  id: string; title: string; type: "email" | "sms" | "push";
  subject: string; body: string; variables: string[];
  status: "active" | "inactive";
}

export interface SystemSettings {
  siteName: string; siteUrl: string; logo: string;
  timezone: string; language: string; currency: string;
  registrationEnabled: boolean; emailVerification: boolean;
  maintenanceMode: boolean; maxLoginAttempts: number;
  seoTitle: string; seoDescription: string; seoKeywords: string;
  googleAnalytics: string; customHeaderCode: string; customFooterCode: string;
  smtpHost: string; smtpPort: string; smtpUser: string;
  socialLinks: { facebook: string; twitter: string; instagram: string; telegram: string; linkedin: string };
}

// ─── Default Data ─────────────────────────────────────────────────────────────

const DEFAULT_SETTINGS: SystemSettings = {
  siteName: "Patente Italiana", siteUrl: "https://patenteitaliano.ir", logo: "",
  timezone: "Asia/Tehran", language: "fa", currency: "EUR",
  registrationEnabled: true, emailVerification: false,
  maintenanceMode: false, maxLoginAttempts: 5,
  seoTitle: "آموزش گواهینامه ایتالیایی", seoDescription: "آزمون تمرینی و آموزشی گواهینامه رانندگی ایتالیا",
  seoKeywords: "patente,italiano,gواهینامه,ایتالیا",
  googleAnalytics: "", customHeaderCode: "", customFooterCode: "",
  smtpHost: "", smtpPort: "587", smtpUser: "",
  socialLinks: { facebook: "", twitter: "", instagram: "", telegram: "", linkedin: "" },
};

const DEFAULT_ROLES: Role[] = [
  { id: "1", name: "مدیر ارشد", permissions: ["*"], description: "دسترسی کامل به تمام بخش‌ها", createdAt: new Date().toISOString() },
  { id: "2", name: "مدیر محتوا", permissions: ["courses","blogs","pages","forums","categories"], description: "مدیریت محتوای آموزشی", createdAt: new Date().toISOString() },
  { id: "3", name: "مدیر مالی", permissions: ["orders","sales","installments","subscriptions","discounts"], description: "مدیریت مالی و فروش", createdAt: new Date().toISOString() },
  { id: "4", name: "مدرس", permissions: ["courses","quizzes","assignments","meetings","students"], description: "مدیریت دوره و دانش‌آموزان", createdAt: new Date().toISOString() },
  { id: "5", name: "پشتیبان", permissions: ["support","contacts","requests","messages"], description: "پشتیبانی و ارتباط با کاربران", createdAt: new Date().toISOString() },
];

const DEFAULT_CATEGORIES: Category[] = [
  { id: "1", title: "زبان ایتالیایی", icon: "🇮🇹", slug: "italian", parentId: null, order: 1, status: "active", description: "دوره‌های آموزش زبان ایتالیایی" },
  { id: "2", title: "گواهینامه رانندگی", icon: "🚗", slug: "patente", parentId: null, order: 2, status: "active", description: "آمادگی آزمون گواهینامه" },
  { id: "3", title: "فرهنگ و جامعه", icon: "🏛️", slug: "culture", parentId: null, order: 3, status: "active", description: "آشنایی با فرهنگ ایتالیا" },
  { id: "4", title: "کسب‌وکار", icon: "💼", slug: "business", parentId: null, order: 4, status: "active", description: "ایتالیایی تجاری" },
];

const DEFAULT_PERMISSIONS = [
  "dashboard","users","roles","categories","courses","webinars","quizzes","assignments",
  "orders","sales","installments","subscriptions","discounts","meetings","blogs",
  "forums","products","bundles","forms","rewards","newsletters","pages","contacts",
  "gifts","currencies","upcoming","instructor-requests","settings","reports",
  "promotions","payment-channels","cashback","ai-content","regions","floating-bars",
  "comments","reviews","documents","delete-requests","notification-templates",
  "certificates","badges","gamification","notifications","announcements","messages",
  "schedule","videos","support","students","access","activitylog","feedback","requests","tags",
];

// ─── CRUD Functions ───────────────────────────────────────────────────────────

// Roles
export function getRoles(): Role[] { return load<Role>("roles", DEFAULT_ROLES); }
export function saveRole(role: Role) { const list = getRoles(); const idx = list.findIndex(r => r.id === role.id); if (idx >= 0) list[idx] = role; else list.push(role); save("roles", list); }
export function deleteRole(id: string) { save("roles", getRoles().filter(r => r.id !== id)); }
export function getAllPermissions() { return DEFAULT_PERMISSIONS; }

// Categories
export function getCategories(): Category[] { return load<Category>("categories", DEFAULT_CATEGORIES); }
export function saveCategory(cat: Category) { const list = getCategories(); const idx = list.findIndex(c => c.id === cat.id); if (idx >= 0) list[idx] = cat; else list.push(cat); save("categories", list); }
export function deleteCategory(id: string) { save("categories", getCategories().filter(c => c.id !== id)); }

// Webinars
export function getWebinars(): LmsWebinar[] { return load<LmsWebinar>("webinars"); }
export function saveWebinar(w: LmsWebinar) { const list = getWebinars(); const idx = list.findIndex(x => x.id === w.id); if (idx >= 0) list[idx] = w; else list.push(w); save("webinars", list); }
export function deleteWebinar(id: string) { save("webinars", getWebinars().filter(w => w.id !== id)); }

// Quizzes
export function getQuizzes(): LmsQuiz[] { return load<LmsQuiz>("quizzes"); }
export function saveQuiz(q: LmsQuiz) { const list = getQuizzes(); const idx = list.findIndex(x => x.id === q.id); if (idx >= 0) list[idx] = q; else list.push(q); save("quizzes", list); }
export function deleteQuiz(id: string) { save("quizzes", getQuizzes().filter(q => q.id !== id)); }

// Orders
export function getOrders(): LmsOrder[] { return load<LmsOrder>("orders"); }
export function saveOrder(o: LmsOrder) { const list = getOrders(); const idx = list.findIndex(x => x.id === o.id); if (idx >= 0) list[idx] = o; else list.push(o); save("orders", list); }

// Sales
export function getSales(): SaleRecord[] { return load<SaleRecord>("sales"); }
export function saveSale(s: SaleRecord) { const list = getSales(); const idx = list.findIndex(x => x.id === s.id); if (idx >= 0) list[idx] = s; else list.push(s); save("sales", list); }

// Meetings
export function getMeetings(): MeetingRecord[] { return load<MeetingRecord>("meetings"); }
export function saveMeeting(m: MeetingRecord) { const list = getMeetings(); const idx = list.findIndex(x => x.id === m.id); if (idx >= 0) list[idx] = m; else list.push(m); save("meetings", list); }
export function deleteMeeting(id: string) { save("meetings", getMeetings().filter(m => m.id !== id)); }

// Blogs
export function getBlogs(): BlogPost[] { return load<BlogPost>("blogs"); }
export function saveBlog(b: BlogPost) { const list = getBlogs(); const idx = list.findIndex(x => x.id === b.id); if (idx >= 0) list[idx] = b; else list.push(b); save("blogs", list); }
export function deleteBlog(id: string) { save("blogs", getBlogs().filter(b => b.id !== id)); }

// Forums
export function getForums(): ForumTopic[] { return load<ForumTopic>("forums"); }
export function saveForum(f: ForumTopic) { const list = getForums(); const idx = list.findIndex(x => x.id === f.id); if (idx >= 0) list[idx] = f; else list.push(f); save("forums", list); }
export function deleteForum(id: string) { save("forums", getForums().filter(f => f.id !== id)); }

// Products
export function getProducts(): ProductItem[] { return load<ProductItem>("products"); }
export function saveProduct(p: ProductItem) { const list = getProducts(); const idx = list.findIndex(x => x.id === p.id); if (idx >= 0) list[idx] = p; else list.push(p); save("products", list); }
export function deleteProduct(id: string) { save("products", getProducts().filter(p => p.id !== id)); }

// Bundles
export function getBundles(): BundleItem[] { return load<BundleItem>("bundles"); }
export function saveBundle(b: BundleItem) { const list = getBundles(); const idx = list.findIndex(x => x.id === b.id); if (idx >= 0) list[idx] = b; else list.push(b); save("bundles", list); }
export function deleteBundle(id: string) { save("bundles", getBundles().filter(b => b.id !== id)); }

// Forms
export function getForms(): FormItem[] { return load<FormItem>("forms"); }
export function saveForm(f: FormItem) { const list = getForms(); const idx = list.findIndex(x => x.id === f.id); if (idx >= 0) list[idx] = f; else list.push(f); save("forms", list); }
export function deleteForm(id: string) { save("forms", getForms().filter(f => f.id !== id)); }

// Installments
export function getInstallments(): InstallmentPlan[] { return load<InstallmentPlan>("installments"); }
export function saveInstallment(i: InstallmentPlan) { const list = getInstallments(); const idx = list.findIndex(x => x.id === i.id); if (idx >= 0) list[idx] = i; else list.push(i); save("installments", list); }
export function deleteInstallment(id: string) { save("installments", getInstallments().filter(i => i.id !== id)); }

// Rewards
export function getRewards(): RewardItem[] { return load<RewardItem>("rewards"); }
export function saveReward(r: RewardItem) { const list = getRewards(); const idx = list.findIndex(x => x.id === r.id); if (idx >= 0) list[idx] = r; else list.push(r); save("rewards", list); }
export function deleteReward(id: string) { save("rewards", getRewards().filter(r => r.id !== id)); }

// Newsletters
export function getNewsletters(): NewsletterEntry[] { return load<NewsletterEntry>("newsletters"); }
export function saveNewsletter(n: NewsletterEntry) { const list = getNewsletters(); const idx = list.findIndex(x => x.id === n.id); if (idx >= 0) list[idx] = n; else list.push(n); save("newsletters", list); }
export function deleteNewsletter(id: string) { save("newsletters", getNewsletters().filter(n => n.id !== id)); }

// Pages
export function getPages(): PageItem[] { return load<PageItem>("pages"); }
export function savePage(p: PageItem) { const list = getPages(); const idx = list.findIndex(x => x.id === p.id); if (idx >= 0) list[idx] = p; else list.push(p); save("pages", list); }
export function deletePage(id: string) { save("pages", getPages().filter(p => p.id !== id)); }

// Contacts
export function getContacts(): ContactEntry[] { return load<ContactEntry>("contacts"); }
export function saveContact(c: ContactEntry) { const list = getContacts(); const idx = list.findIndex(x => x.id === c.id); if (idx >= 0) list[idx] = c; else list.push(c); save("contacts", list); }
export function deleteContact(id: string) { save("contacts", getContacts().filter(c => c.id !== id)); }

// Gifts
export function getGifts(): GiftEntry[] { return load<GiftEntry>("gifts"); }
export function saveGift(g: GiftEntry) { const list = getGifts(); const idx = list.findIndex(x => x.id === g.id); if (idx >= 0) list[idx] = g; else list.push(g); save("gifts", list); }
export function deleteGift(id: string) { save("gifts", getGifts().filter(g => g.id !== id)); }

// Currencies
export function getCurrencies(): CurrencyItem[] { return load<CurrencyItem>("currencies", [
  { id: "1", code: "EUR", name: "یورو", symbol: "€", exchangeRate: 1, status: "active" },
  { id: "2", code: "USD", name: "دلار", symbol: "$", exchangeRate: 1.08, status: "active" },
  { id: "3", code: "IRR", name: "ریال", symbol: "﷼", exchangeRate: 58000, status: "active" },
]); }
export function saveCurrency(c: CurrencyItem) { const list = getCurrencies(); const idx = list.findIndex(x => x.id === c.id); if (idx >= 0) list[idx] = c; else list.push(c); save("currencies", list); }
export function deleteCurrency(id: string) { save("currencies", getCurrencies().filter(c => c.id !== id)); }

// Upcoming Courses
export function getUpcomingCourses(): UpcomingCourse[] { return load<UpcomingCourse>("upcoming"); }
export function saveUpcomingCourse(u: UpcomingCourse) { const list = getUpcomingCourses(); const idx = list.findIndex(x => x.id === u.id); if (idx >= 0) list[idx] = u; else list.push(u); save("upcoming", list); }
export function deleteUpcomingCourse(id: string) { save("upcoming", getUpcomingCourses().filter(u => u.id !== id)); }

// Instructor Requests
export function getInstructorRequests(): InstructorRequest[] { return load<InstructorRequest>("instructorReqs"); }
export function saveInstructorRequest(r: InstructorRequest) { const list = getInstructorRequests(); const idx = list.findIndex(x => x.id === r.id); if (idx >= 0) list[idx] = r; else list.push(r); save("instructorReqs", list); }

// Promotions
export function getPromotions(): PromotionItem[] { return load<PromotionItem>("promotions"); }
export function savePromotion(p: PromotionItem) { const list = getPromotions(); const idx = list.findIndex(x => x.id === p.id); if (idx >= 0) list[idx] = p; else list.push(p); save("promotions", list); }
export function deletePromotion(id: string) { save("promotions", getPromotions().filter(p => p.id !== id)); }

// Payment Channels
export function getPaymentChannels(): PaymentChannel[] { return load<PaymentChannel>("payChannels", [
  { id: "1", name: "Stripe", type: "stripe", status: "active", isDefault: true, credentials: "" },
  { id: "2", name: "PayPal", type: "paypal", status: "inactive", isDefault: false, credentials: "" },
]); }
export function savePaymentChannel(p: PaymentChannel) { const list = getPaymentChannels(); const idx = list.findIndex(x => x.id === p.id); if (idx >= 0) list[idx] = p; else list.push(p); save("payChannels", list); }
export function deletePaymentChannel(id: string) { save("payChannels", getPaymentChannels().filter(p => p.id !== id)); }

// Cashback Rules
export function getCashbackRules(): CashbackRule[] { return load<CashbackRule>("cashback"); }
export function saveCashbackRule(c: CashbackRule) { const list = getCashbackRules(); const idx = list.findIndex(x => x.id === c.id); if (idx >= 0) list[idx] = c; else list.push(c); save("cashback", list); }
export function deleteCashbackRule(id: string) { save("cashback", getCashbackRules().filter(c => c.id !== id)); }

// AI Templates
export function getAiTemplates(): AiTemplate[] { return load<AiTemplate>("aiTemplates"); }
export function saveAiTemplate(t: AiTemplate) { const list = getAiTemplates(); const idx = list.findIndex(x => x.id === t.id); if (idx >= 0) list[idx] = t; else list.push(t); save("aiTemplates", list); }
export function deleteAiTemplate(id: string) { save("aiTemplates", getAiTemplates().filter(t => t.id !== id)); }

// Regions
export function getRegions(): RegionItem[] { return load<RegionItem>("regions"); }
export function saveRegion(r: RegionItem) { const list = getRegions(); const idx = list.findIndex(x => x.id === r.id); if (idx >= 0) list[idx] = r; else list.push(r); save("regions", list); }
export function deleteRegion(id: string) { save("regions", getRegions().filter(r => r.id !== id)); }

// Floating Bars
export function getFloatingBars(): FloatingBarItem[] { return load<FloatingBarItem>("floatingBars"); }
export function saveFloatingBar(f: FloatingBarItem) { const list = getFloatingBars(); const idx = list.findIndex(x => x.id === f.id); if (idx >= 0) list[idx] = f; else list.push(f); save("floatingBars", list); }
export function deleteFloatingBar(id: string) { save("floatingBars", getFloatingBars().filter(f => f.id !== id)); }

// Comments Moderation
export function getComments(): CommentItem[] { return load<CommentItem>("comments"); }
export function saveComment(c: CommentItem) { const list = getComments(); const idx = list.findIndex(x => x.id === c.id); if (idx >= 0) list[idx] = c; else list.push(c); save("comments", list); }
export function deleteComment(id: string) { save("comments", getComments().filter(c => c.id !== id)); }

// Reviews Moderation
export function getReviews(): ReviewItem[] { return load<ReviewItem>("reviews"); }
export function saveReview(r: ReviewItem) { const list = getReviews(); const idx = list.findIndex(x => x.id === r.id); if (idx >= 0) list[idx] = r; else list.push(r); save("reviews", list); }
export function deleteReview(id: string) { save("reviews", getReviews().filter(r => r.id !== id)); }

// Document Verification
export function getDocuments(): DocumentVerification[] { return load<DocumentVerification>("documents"); }
export function saveDocument(d: DocumentVerification) { const list = getDocuments(); const idx = list.findIndex(x => x.id === d.id); if (idx >= 0) list[idx] = d; else list.push(d); save("documents", list); }

// Delete Account Requests
export function getDeleteRequests(): DeleteAccountReq[] { return load<DeleteAccountReq>("deleteReqs"); }
export function saveDeleteRequest(d: DeleteAccountReq) { const list = getDeleteRequests(); const idx = list.findIndex(x => x.id === d.id); if (idx >= 0) list[idx] = d; else list.push(d); save("deleteReqs", list); }

// Notification Templates
export function getNotificationTemplates(): NotificationTemplate[] { return load<NotificationTemplate>("notifTemplates"); }
export function saveNotificationTemplate(t: NotificationTemplate) { const list = getNotificationTemplates(); const idx = list.findIndex(x => x.id === t.id); if (idx >= 0) list[idx] = t; else list.push(t); save("notifTemplates", list); }
export function deleteNotificationTemplate(id: string) { save("notifTemplates", getNotificationTemplates().filter(t => t.id !== id)); }

// System Settings
export function getSystemSettings(): SystemSettings { return loadObj<SystemSettings>("systemSettings", DEFAULT_SETTINGS); }
export function saveSystemSettings(s: SystemSettings) { saveObj("systemSettings", s); }
