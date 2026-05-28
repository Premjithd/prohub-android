import {
  MatTooltipModule
} from "./chunk-XQNZX362.js";
import {
  MatTooltip
} from "./chunk-X2U3U5BY.js";
import {
  JobService
} from "./chunk-K4TKB7U5.js";
import {
  MatBadge,
  MatBadgeModule,
  MatDivider,
  MatDividerModule,
  MatListModule
} from "./chunk-ZHNVQCHZ.js";
import "./chunk-SCUIT22V.js";
import "./chunk-IQQAMAZF.js";
import "./chunk-ZIGP4DPN.js";
import "./chunk-KOQ7ZT3J.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-WDBRP2V4.js";
import {
  MatCardModule
} from "./chunk-OCV7UR27.js";
import {
  MatFormField,
  MatLabel
} from "./chunk-XYJWITZW.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-XDOJRKTW.js";
import {
  MatButtonModule,
  MatIconButton
} from "./chunk-KQMSNT2S.js";
import "./chunk-XBTNCZLM.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-Z4HON7ZA.js";
import "./chunk-24VDEUMT.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-DLR4BDQH.js";
import {
  Auth
} from "./chunk-MJ2Z243I.js";
import "./chunk-UGJKRHBV.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-Z7MI56JG.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  SlicePipe,
  Subject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-STXT6R65.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/messages/messages.ts
function MessagesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading conversations...");
    \u0275\u0275elementEnd()();
  }
}
function MessagesComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon");
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function MessagesComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function MessagesComponent_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-icon");
    \u0275\u0275text(2, "mail_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No conversations yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6, "Start a conversation to begin messaging");
    \u0275\u0275elementEnd()();
  }
}
function MessagesComponent_div_4_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function MessagesComponent_div_4_div_9_div_1_Template_div_click_0_listener() {
      const conversation_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectConversation(conversation_r3));
    });
    \u0275\u0275elementStart(1, "div", 22)(2, "mat-icon", 23);
    \u0275\u0275text(3, " person ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 24)(5, "div", 25)(6, "span", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 27);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 28);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "slice");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const conversation_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", (ctx_r0.selectedConversation == null ? null : ctx_r0.selectedConversation.userId) === conversation_r3.userId);
    \u0275\u0275advance(2);
    \u0275\u0275property("matBadge", conversation_r3.unreadCount)("matBadgeHidden", conversation_r3.unreadCount === 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(conversation_r3.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getFormattedTime(conversation_r3.lastMessageTime));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(12, 8, conversation_r3.lastMessage, 0, 50), "", conversation_r3.lastMessage.length > 50 ? "..." : "");
  }
}
function MessagesComponent_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, MessagesComponent_div_4_div_9_div_1_Template, 13, 12, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.conversations);
  }
}
function MessagesComponent_div_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "button", 30);
    \u0275\u0275listener("click", function MessagesComponent_div_4_div_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.prevPage());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 30);
    \u0275\u0275listener("click", function MessagesComponent_div_4_div_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.nextPage());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.page === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.page, " / ", ctx_r0.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.page >= ctx_r0.totalPages);
  }
}
function MessagesComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "mat-icon");
    \u0275\u0275text(2, "mail_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Select a conversation to view messages");
    \u0275\u0275elementEnd()();
  }
}
function MessagesComponent_div_4_div_13_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.selectedConversation.userEmail);
  }
}
function MessagesComponent_div_4_div_13_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "mat-spinner", 42);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading messages...");
    \u0275\u0275elementEnd()();
  }
}
function MessagesComponent_div_4_div_13_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "p");
    \u0275\u0275text(2, "No messages yet. Start the conversation!");
    \u0275\u0275elementEnd()();
  }
}
function MessagesComponent_div_4_div_13_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "div", 49)(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const message_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("sent", ctx_r0.isSentByCurrentUser(message_r6));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(message_r6.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getFormattedTime(message_r6.sentAt));
  }
}
function MessagesComponent_div_4_div_13_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, MessagesComponent_div_4_div_13_div_11_div_1_Template, 3, 0, "div", 44)(2, MessagesComponent_div_4_div_13_div_11_div_2_Template, 7, 4, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.messages.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.messages);
  }
}
function MessagesComponent_div_4_div_13_div_12_mat_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
  }
}
function MessagesComponent_div_4_div_13_div_12_mat_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 57);
    \u0275\u0275text(1, "schedule");
    \u0275\u0275elementEnd();
  }
}
function MessagesComponent_div_4_div_13_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "mat-form-field", 52)(2, "mat-label");
    \u0275\u0275text(3, "Type a message...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function MessagesComponent_div_4_div_13_div_12_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.messageText, $event) || (ctx_r0.messageText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function MessagesComponent_div_4_div_13_div_12_Template_input_keyup_enter_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.sendMessage());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 54);
    \u0275\u0275listener("click", function MessagesComponent_div_4_div_13_div_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.sendMessage());
    });
    \u0275\u0275template(6, MessagesComponent_div_4_div_13_div_12_mat_icon_6_Template, 2, 0, "mat-icon", 55)(7, MessagesComponent_div_4_div_13_div_12_mat_icon_7_Template, 2, 0, "mat-icon", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.messageText);
    \u0275\u0275property("disabled", ctx_r0.messageSending);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.messageText.trim() || ctx_r0.messageSending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.messageSending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.messageSending);
  }
}
function MessagesComponent_div_4_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "button", 34);
    \u0275\u0275listener("click", function MessagesComponent_div_4_div_13_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeConversation());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 35)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MessagesComponent_div_4_div_13_p_8_Template, 2, 1, "p", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "mat-divider");
    \u0275\u0275template(10, MessagesComponent_div_4_div_13_div_10_Template, 4, 0, "div", 37)(11, MessagesComponent_div_4_div_13_div_11_Template, 3, 2, "div", 38)(12, MessagesComponent_div_4_div_13_div_12_Template, 8, 5, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.selectedConversation.userName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedConversation.userEmail);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.loadingMessages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingMessages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingMessages);
  }
}
function MessagesComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "h2")(4, "mat-icon");
    \u0275\u0275text(5, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Messages ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "mat-divider");
    \u0275\u0275template(8, MessagesComponent_div_4_div_8_Template, 7, 0, "div", 11)(9, MessagesComponent_div_4_div_9_Template, 2, 1, "div", 12)(10, MessagesComponent_div_4_div_10_Template, 9, 4, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 14);
    \u0275\u0275template(12, MessagesComponent_div_4_div_12_Template, 5, 0, "div", 15)(13, MessagesComponent_div_4_div_13_Template, 13, 5, "div", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.conversations.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.conversations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.totalPages > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.selectedConversation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedConversation);
  }
}
var MessagesComponent = class _MessagesComponent {
  jobService;
  auth;
  cdr;
  router;
  activatedRoute;
  conversations = [];
  selectedConversation = null;
  messages = [];
  loading = true;
  loadingMessages = false;
  errorMessage = "";
  successMessage = "";
  messageText = "";
  messageSending = false;
  // Pagination for conversations list
  page = 1;
  pageSize = 20;
  total = 0;
  get totalPages() {
    return Math.max(1, Math.ceil(this.total / this.pageSize));
  }
  currentUserId = 0;
  destroy$ = new Subject();
  highlightPartnerId = null;
  constructor(jobService, auth, cdr, router, activatedRoute) {
    this.jobService = jobService;
    this.auth = auth;
    this.cdr = cdr;
    this.router = router;
    this.activatedRoute = activatedRoute;
    const userId = this.auth.getUserId();
    this.currentUserId = typeof userId === "string" ? parseInt(userId, 10) : userId || 0;
  }
  ngOnInit() {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(["/auth/login"]);
      return;
    }
    this.activatedRoute.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      if (params["partnerId"]) {
        this.highlightPartnerId = parseInt(params["partnerId"], 10);
        console.log("Query param partnerId found:", this.highlightPartnerId);
        this.loadConversations();
      } else if (!this.conversations.length && this.loading === false) {
        this.loadConversations();
      }
    });
    if (!this.activatedRoute.snapshot.queryParams["partnerId"]) {
      this.loadConversations();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadConversations() {
    this.loading = true;
    this.errorMessage = "";
    const userType = this.auth.getUserType() || "User";
    this.jobService.getConversationPartners(userType, this.page, this.pageSize).pipe(takeUntil(this.destroy$)).subscribe({
      next: (result) => {
        this.conversations = result.items;
        this.total = result.total;
        this.loading = false;
        this.cdr.markForCheck();
        if (this.highlightPartnerId) {
          const targetConversation = result.items.find((p) => p.userId === this.highlightPartnerId);
          if (targetConversation) {
            this.selectConversation(targetConversation);
          }
        }
      },
      error: (error) => {
        console.error("Error loading conversations:", error);
        this.errorMessage = "Failed to load conversations. Please try again.";
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
  selectConversation(conversation) {
    this.selectedConversation = conversation;
    this.loadMessagesForConversation(conversation.userId);
    conversation.unreadCount = 0;
  }
  loadMessagesForConversation(userId) {
    this.loadingMessages = true;
    this.errorMessage = "";
    this.jobService.getMessagesWithUser(userId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (messages) => {
        this.messages = messages;
        this.markMessagesAsRead(messages);
        this.loadingMessages = false;
        this.cdr.markForCheck();
        setTimeout(() => this.scrollToBottom(), 100);
      },
      error: (error) => {
        console.error("Error loading messages:", error);
        this.errorMessage = "Failed to load messages.";
        this.loadingMessages = false;
        this.cdr.markForCheck();
      }
    });
  }
  sendMessage() {
    if (!this.messageText.trim() || !this.selectedConversation) {
      return;
    }
    this.messageSending = true;
    this.errorMessage = "";
    const message = {
      id: 0,
      senderId: this.currentUserId,
      recipientId: this.selectedConversation.userId,
      senderType: this.auth.getUserType() || "User",
      content: this.messageText,
      sentAt: (/* @__PURE__ */ new Date()).toISOString(),
      isRead: false
    };
    this.jobService.sendDirectMessage(message).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.messages.push(message);
        this.messageText = "";
        this.messageSending = false;
        this.cdr.markForCheck();
        setTimeout(() => this.scrollToBottom(), 100);
        this.loadConversations();
      },
      error: (error) => {
        console.error("Error sending message:", error);
        this.errorMessage = "Failed to send message.";
        this.messageSending = false;
        this.cdr.markForCheck();
      }
    });
  }
  markMessagesAsRead(messages) {
    messages.filter((msg) => msg.recipientId === this.currentUserId && !msg.isRead).forEach((msg) => {
      this.jobService.markMessageAsRead(msg.id).pipe(takeUntil(this.destroy$)).subscribe({
        error: (error) => console.error("Error marking message as read:", error)
      });
    });
  }
  scrollToBottom() {
    const messagesContainer = document.querySelector(".messages-list");
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }
  getFormattedTime(dateString) {
    const date = new Date(dateString);
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 6e4);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    if (diffMins < 1)
      return "now";
    if (diffMins < 60)
      return `${diffMins}m ago`;
    if (diffHours < 24)
      return `${diffHours}h ago`;
    if (diffDays < 7)
      return `${diffDays}d ago`;
    return date.toLocaleDateString();
  }
  getSenderName(message) {
    return message.senderId === this.currentUserId ? "You" : message.senderType;
  }
  isSentByCurrentUser(message) {
    return message.senderId === this.currentUserId;
  }
  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadConversations();
    }
  }
  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadConversations();
    }
  }
  closeConversation() {
    this.selectedConversation = null;
    this.messages = [];
  }
  static \u0275fac = function MessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessagesComponent)(\u0275\u0275directiveInject(JobService), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessagesComponent, selectors: [["app-messages"]], decls: 5, vars: 4, consts: [[1, "messages-container"], ["class", "loading-container", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "messages-main", 4, "ngIf"], [1, "loading-container"], [1, "alert", "alert-error"], [1, "alert", "alert-success"], [1, "messages-main"], [1, "conversations-panel"], [1, "conversations-header"], ["class", "no-conversations", 4, "ngIf"], ["class", "conversations-list", 4, "ngIf"], ["class", "conv-pagination", 4, "ngIf"], [1, "messages-panel"], ["class", "no-conversation-selected", 4, "ngIf"], ["class", "conversation-view", 4, "ngIf"], [1, "no-conversations"], [1, "subtitle"], [1, "conversations-list"], ["class", "conversation-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "conversation-item", 3, "click"], [1, "conversation-avatar"], ["matBadgeColor", "accent", 3, "matBadge", "matBadgeHidden"], [1, "conversation-details"], [1, "conversation-header-row"], [1, "conversation-name"], [1, "conversation-time"], [1, "conversation-last-message"], [1, "conv-pagination"], ["mat-icon-button", "", 3, "click", "disabled"], [1, "no-conversation-selected"], [1, "conversation-view"], [1, "conversation-header-bar"], ["mat-icon-button", "", "matTooltip", "Back to conversations", 1, "close-button", 3, "click"], [1, "header-info"], ["class", "user-email", 4, "ngIf"], ["class", "messages-loading", 4, "ngIf"], ["class", "messages-list", 4, "ngIf"], ["class", "message-input-section", 4, "ngIf"], [1, "user-email"], [1, "messages-loading"], ["diameter", "30"], [1, "messages-list"], ["class", "no-messages", 4, "ngIf"], ["class", "message-item", 3, "sent", 4, "ngFor", "ngForOf"], [1, "no-messages"], [1, "message-item"], [1, "message-content"], [1, "message-bubble"], [1, "message-time"], [1, "message-input-section"], [1, "message-input-field"], ["matInput", "", "placeholder", "Type your message...", 3, "ngModelChange", "keyup.enter", "ngModel", "disabled"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Send message", 3, "click", "disabled"], [4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "spinner"]], template: function MessagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, MessagesComponent_div_1_Template, 4, 0, "div", 1)(2, MessagesComponent_div_2_Template, 5, 1, "div", 2)(3, MessagesComponent_div_3_Template, 5, 1, "div", 3)(4, MessagesComponent_div_4_Template, 14, 5, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    MatCardModule,
    MatButtonModule,
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatListModule,
    MatDivider,
    MatDividerModule,
    MatInputModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatTooltipModule,
    MatTooltip,
    MatBadgeModule,
    MatBadge,
    SlicePipe
  ], styles: ["\n\n.messages-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: #f5f5f5;\n  padding: 20px;\n}\n.messages-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%], \n.messages-container[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  margin-bottom: 20px;\n  border-radius: 4px;\n  background: white;\n}\n.messages-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.messages-container[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.messages-container[_ngcontent-%COMP%]   .alert.alert-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.messages-container[_ngcontent-%COMP%]   .alert.alert-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n.messages-container[_ngcontent-%COMP%]   .alert.alert-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.messages-container[_ngcontent-%COMP%]   .alert.alert-success[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.messages-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  justify-content: center;\n  flex-direction: column;\n  height: 300px;\n}\n.messages-main[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  height: calc(100vh - 120px);\n  background: white;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.conversations-panel[_ngcontent-%COMP%] {\n  width: 280px;\n  min-width: 280px;\n  border-right: 1px solid #e0e0e0;\n  display: flex;\n  flex-direction: column;\n  background: white;\n  overflow: hidden;\n}\n.conversations-panel[_ngcontent-%COMP%]   .conversations-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.conversations-panel[_ngcontent-%COMP%]   .conversations-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.conversations-panel[_ngcontent-%COMP%]   .conversations-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.conversations-panel[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.conversations-panel[_ngcontent-%COMP%]   .no-conversations[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 16px;\n  text-align: center;\n  color: #999;\n}\n.conversations-panel[_ngcontent-%COMP%]   .no-conversations[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #ddd;\n  margin-bottom: 12px;\n}\n.conversations-panel[_ngcontent-%COMP%]   .no-conversations[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 16px;\n  font-weight: 500;\n}\n.conversations-panel[_ngcontent-%COMP%]   .no-conversations[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #bbb;\n}\n.conversations-panel[_ngcontent-%COMP%]   .conversations-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n.conversations-panel[_ngcontent-%COMP%]   .conversations-list[_ngcontent-%COMP%]   .conversation-item[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid #f0f0f0;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  min-height: 68px;\n  box-sizing: border-box;\n  flex-shrink: 0;\n}\n.conversations-panel[_ngcontent-%COMP%]   .conversations-list[_ngcontent-%COMP%]   .conversation-item[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n.conversations-panel[_ngcontent-%COMP%]   .conversations-list[_ngcontent-%COMP%]   .conversation-item.selected[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-left: 4px solid #1976d2;\n  padding-left: 12px;\n}\n.conversations-panel[_ngcontent-%COMP%]   .conversations-list[_ngcontent-%COMP%]   .conversation-item[_ngcontent-%COMP%]   .conversation-avatar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n}\n.conversations-panel[_ngcontent-%COMP%]   .conversations-list[_ngcontent-%COMP%]   .conversation-item[_ngcontent-%COMP%]   .conversation-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  color: #1976d2;\n}\n.conversations-panel[_ngcontent-%COMP%]   .conversations-list[_ngcontent-%COMP%]   .conversation-item[_ngcontent-%COMP%]   .conversation-details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.conversations-panel[_ngcontent-%COMP%]   .conversations-list[_ngcontent-%COMP%]   .conversation-item[_ngcontent-%COMP%]   .conversation-details[_ngcontent-%COMP%]   .conversation-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 8px;\n}\n.conversations-panel[_ngcontent-%COMP%]   .conversations-list[_ngcontent-%COMP%]   .conversation-item[_ngcontent-%COMP%]   .conversation-details[_ngcontent-%COMP%]   .conversation-header-row[_ngcontent-%COMP%]   .conversation-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n}\n.conversations-panel[_ngcontent-%COMP%]   .conversations-list[_ngcontent-%COMP%]   .conversation-item[_ngcontent-%COMP%]   .conversation-details[_ngcontent-%COMP%]   .conversation-header-row[_ngcontent-%COMP%]   .conversation-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #999;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.conversations-panel[_ngcontent-%COMP%]   .conversations-list[_ngcontent-%COMP%]   .conversation-item[_ngcontent-%COMP%]   .conversation-details[_ngcontent-%COMP%]   .conversation-last-message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #666;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 1.3;\n}\n.messages-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: white;\n}\n.no-conversation-selected[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #999;\n  text-align: center;\n}\n.no-conversation-selected[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: #ddd;\n  margin-bottom: 16px;\n}\n.no-conversation-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #bbb;\n}\n.conversation-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.conversation-header-bar[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: white;\n}\n.conversation-header-bar[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.conversation-header-bar[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.conversation-header-bar[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 18px;\n  font-weight: 500;\n  color: #333;\n}\n.conversation-header-bar[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #999;\n}\n.messages-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  gap: 12px;\n}\n.messages-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #999;\n  margin: 0;\n}\n.messages-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.messages-list[_ngcontent-%COMP%]   .no-messages[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  color: #999;\n  text-align: center;\n}\n.messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 8px;\n}\n.messages-list[_ngcontent-%COMP%]   .message-item.sent[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.messages-list[_ngcontent-%COMP%]   .message-item.sent[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  background: #1976d2;\n  color: white;\n  border-bottom-right-radius: 4px;\n}\n.messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]:not(.sent) {\n  justify-content: flex-start;\n}\n.messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]:not(.sent)   .message-bubble[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  color: #333;\n  border-bottom-left-radius: 4px;\n}\n.messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  max-width: 70%;\n}\n.messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 8px;\n  word-wrap: break-word;\n  word-break: break-word;\n}\n.messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.4;\n}\n.messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #999;\n  padding: 0 8px;\n}\n.message-input-section[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  gap: 8px;\n  align-items: flex-end;\n}\n.message-input-section[_ngcontent-%COMP%]   .message-input-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.conversations-list[_ngcontent-%COMP%]::-webkit-scrollbar, \n.messages-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.conversations-list[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.messages-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.conversations-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.messages-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 3px;\n}\n.conversations-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.messages-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #999;\n}\n@media (max-width: 768px) {\n  .messages-main[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .conversations-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    border-right: none;\n    border-bottom: 1px solid #e0e0e0;\n    min-height: 100px;\n  }\n  .messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n    max-width: 90%;\n  }\n}\n/*# sourceMappingURL=messages.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessagesComponent, [{
    type: Component,
    args: [{ selector: "app-messages", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatListModule,
      MatDividerModule,
      MatInputModule,
      MatFormFieldModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      MatBadgeModule
    ], template: `<div class="messages-container">\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="loading-container">\r
    <mat-spinner></mat-spinner>\r
    <p>Loading conversations...</p>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="errorMessage && !loading" class="alert alert-error">\r
    <mat-icon>error</mat-icon>\r
    <span>{{ errorMessage }}</span>\r
  </div>\r
\r
  <!-- Success Message -->\r
  <div *ngIf="successMessage" class="alert alert-success">\r
    <mat-icon>check_circle</mat-icon>\r
    <span>{{ successMessage }}</span>\r
  </div>\r
\r
  <!-- Main Messages Layout -->\r
  <div *ngIf="!loading" class="messages-main">\r
    <!-- Conversations List -->\r
    <div class="conversations-panel">\r
      <div class="conversations-header">\r
        <h2>\r
          <mat-icon>mail</mat-icon>\r
          Messages\r
        </h2>\r
      </div>\r
\r
      <mat-divider></mat-divider>\r
\r
      <!-- No Conversations State -->\r
      <div *ngIf="conversations.length === 0" class="no-conversations">\r
        <mat-icon>mail_outline</mat-icon>\r
        <p>No conversations yet</p>\r
        <span class="subtitle">Start a conversation to begin messaging</span>\r
      </div>\r
\r
      <!-- Conversations List -->\r
      <div *ngIf="conversations.length > 0" class="conversations-list">\r
        <div\r
          *ngFor="let conversation of conversations"\r
          (click)="selectConversation(conversation)"\r
          [class.selected]="selectedConversation?.userId === conversation.userId"\r
          class="conversation-item">\r
\r
          <div class="conversation-avatar">\r
            <mat-icon [matBadge]="conversation.unreadCount" matBadgeColor="accent" [matBadgeHidden]="conversation.unreadCount === 0">\r
              person\r
            </mat-icon>\r
          </div>\r
\r
          <div class="conversation-details">\r
            <div class="conversation-header-row">\r
              <span class="conversation-name">{{ conversation.userName }}</span>\r
              <span class="conversation-time">{{ getFormattedTime(conversation.lastMessageTime) }}</span>\r
            </div>\r
            <p class="conversation-last-message">{{ conversation.lastMessage | slice:0:50 }}{{ conversation.lastMessage.length > 50 ? '...' : '' }}</p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Conversation Pagination -->\r
      <div class="conv-pagination" *ngIf="totalPages > 1">\r
        <button mat-icon-button (click)="prevPage()" [disabled]="page === 1">\r
          <mat-icon>chevron_left</mat-icon>\r
        </button>\r
        <span>{{ page }} / {{ totalPages }}</span>\r
        <button mat-icon-button (click)="nextPage()" [disabled]="page >= totalPages">\r
          <mat-icon>chevron_right</mat-icon>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Messages Panel -->\r
    <div class="messages-panel">\r
      <!-- No Conversation Selected State -->\r
      <div *ngIf="!selectedConversation" class="no-conversation-selected">\r
        <mat-icon>mail_outline</mat-icon>\r
        <p>Select a conversation to view messages</p>\r
      </div>\r
\r
      <!-- Conversation Messages -->\r
      <div *ngIf="selectedConversation" class="conversation-view">\r
        <!-- Conversation Header -->\r
        <div class="conversation-header-bar">\r
          <button mat-icon-button (click)="closeConversation()" class="close-button" matTooltip="Back to conversations">\r
            <mat-icon>arrow_back</mat-icon>\r
          </button>\r
          <div class="header-info">\r
            <h3>{{ selectedConversation.userName }}</h3>\r
            <p *ngIf="selectedConversation.userEmail" class="user-email">{{ selectedConversation.userEmail }}</p>\r
          </div>\r
        </div>\r
\r
        <mat-divider></mat-divider>\r
\r
        <!-- Messages Loading -->\r
        <div *ngIf="loadingMessages" class="messages-loading">\r
          <mat-spinner diameter="30"></mat-spinner>\r
          <p>Loading messages...</p>\r
        </div>\r
\r
        <!-- Messages List -->\r
        <div *ngIf="!loadingMessages" class="messages-list">\r
          <div *ngIf="messages.length === 0" class="no-messages">\r
            <p>No messages yet. Start the conversation!</p>\r
          </div>\r
\r
          <div *ngFor="let message of messages" [class.sent]="isSentByCurrentUser(message)" class="message-item">\r
            <div class="message-content">\r
              <div class="message-bubble">\r
                <p>{{ message.content }}</p>\r
              </div>\r
              <span class="message-time">{{ getFormattedTime(message.sentAt) }}</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Message Input -->\r
        <div class="message-input-section" *ngIf="!loadingMessages">\r
          <mat-form-field class="message-input-field">\r
            <mat-label>Type a message...</mat-label>\r
            <input \r
              matInput \r
              [(ngModel)]="messageText"\r
              (keyup.enter)="sendMessage()"\r
              [disabled]="messageSending"\r
              placeholder="Type your message...">\r
          </mat-form-field>\r
          <button \r
            mat-icon-button \r
            (click)="sendMessage()"\r
            [disabled]="!messageText.trim() || messageSending"\r
            color="primary"\r
            matTooltip="Send message">\r
            <mat-icon *ngIf="!messageSending">send</mat-icon>\r
            <mat-icon *ngIf="messageSending" class="spinner">schedule</mat-icon>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/messages/messages.scss */\n.messages-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: #f5f5f5;\n  padding: 20px;\n}\n.messages-container .loading-container,\n.messages-container .alert {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  margin-bottom: 20px;\n  border-radius: 4px;\n  background: white;\n}\n.messages-container .loading-container mat-icon,\n.messages-container .alert mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.messages-container .alert.alert-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.messages-container .alert.alert-error mat-icon {\n  color: #c62828;\n}\n.messages-container .alert.alert-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.messages-container .alert.alert-success mat-icon {\n  color: #2e7d32;\n}\n.messages-container .loading-container {\n  justify-content: center;\n  flex-direction: column;\n  height: 300px;\n}\n.messages-main {\n  display: flex;\n  gap: 16px;\n  height: calc(100vh - 120px);\n  background: white;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.conversations-panel {\n  width: 280px;\n  min-width: 280px;\n  border-right: 1px solid #e0e0e0;\n  display: flex;\n  flex-direction: column;\n  background: white;\n  overflow: hidden;\n}\n.conversations-panel .conversations-header {\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.conversations-panel .conversations-header h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.conversations-panel .conversations-header h2 mat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.conversations-panel mat-divider {\n  flex-shrink: 0;\n}\n.conversations-panel .no-conversations {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 16px;\n  text-align: center;\n  color: #999;\n}\n.conversations-panel .no-conversations mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #ddd;\n  margin-bottom: 12px;\n}\n.conversations-panel .no-conversations p {\n  margin: 0 0 8px 0;\n  font-size: 16px;\n  font-weight: 500;\n}\n.conversations-panel .no-conversations .subtitle {\n  font-size: 14px;\n  color: #bbb;\n}\n.conversations-panel .conversations-list {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n.conversations-panel .conversations-list .conversation-item {\n  padding: 12px 16px;\n  border-bottom: 1px solid #f0f0f0;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  min-height: 68px;\n  box-sizing: border-box;\n  flex-shrink: 0;\n}\n.conversations-panel .conversations-list .conversation-item:hover {\n  background-color: #f5f5f5;\n}\n.conversations-panel .conversations-list .conversation-item.selected {\n  background-color: #e3f2fd;\n  border-left: 4px solid #1976d2;\n  padding-left: 12px;\n}\n.conversations-panel .conversations-list .conversation-item .conversation-avatar {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n}\n.conversations-panel .conversations-list .conversation-item .conversation-avatar mat-icon {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  color: #1976d2;\n}\n.conversations-panel .conversations-list .conversation-item .conversation-details {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.conversations-panel .conversations-list .conversation-item .conversation-details .conversation-header-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 8px;\n}\n.conversations-panel .conversations-list .conversation-item .conversation-details .conversation-header-row .conversation-name {\n  font-weight: 600;\n  color: #333;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n}\n.conversations-panel .conversations-list .conversation-item .conversation-details .conversation-header-row .conversation-time {\n  font-size: 11px;\n  color: #999;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.conversations-panel .conversations-list .conversation-item .conversation-details .conversation-last-message {\n  margin: 0;\n  font-size: 12px;\n  color: #666;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 1.3;\n}\n.messages-panel {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: white;\n}\n.no-conversation-selected {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #999;\n  text-align: center;\n}\n.no-conversation-selected mat-icon {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: #ddd;\n  margin-bottom: 16px;\n}\n.no-conversation-selected p {\n  font-size: 16px;\n  color: #bbb;\n}\n.conversation-view {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.conversation-header-bar {\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: white;\n}\n.conversation-header-bar .close-button {\n  margin-right: 8px;\n}\n.conversation-header-bar .header-info {\n  flex: 1;\n  min-width: 0;\n}\n.conversation-header-bar .header-info h3 {\n  margin: 0 0 4px 0;\n  font-size: 18px;\n  font-weight: 500;\n  color: #333;\n}\n.conversation-header-bar .header-info .user-email {\n  margin: 0;\n  font-size: 12px;\n  color: #999;\n}\n.messages-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  gap: 12px;\n}\n.messages-loading p {\n  color: #999;\n  margin: 0;\n}\n.messages-list {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.messages-list .no-messages {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  color: #999;\n  text-align: center;\n}\n.messages-list .message-item {\n  display: flex;\n  margin-bottom: 8px;\n}\n.messages-list .message-item.sent {\n  justify-content: flex-end;\n}\n.messages-list .message-item.sent .message-bubble {\n  background: #1976d2;\n  color: white;\n  border-bottom-right-radius: 4px;\n}\n.messages-list .message-item:not(.sent) {\n  justify-content: flex-start;\n}\n.messages-list .message-item:not(.sent) .message-bubble {\n  background: #e0e0e0;\n  color: #333;\n  border-bottom-left-radius: 4px;\n}\n.messages-list .message-item .message-content {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  max-width: 70%;\n}\n.messages-list .message-item .message-content .message-bubble {\n  padding: 12px 16px;\n  border-radius: 8px;\n  word-wrap: break-word;\n  word-break: break-word;\n}\n.messages-list .message-item .message-content .message-bubble p {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.4;\n}\n.messages-list .message-item .message-content .message-time {\n  font-size: 11px;\n  color: #999;\n  padding: 0 8px;\n}\n.message-input-section {\n  padding: 16px;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  gap: 8px;\n  align-items: flex-end;\n}\n.message-input-section .message-input-field {\n  flex: 1;\n}\n.conversations-list::-webkit-scrollbar,\n.messages-list::-webkit-scrollbar {\n  width: 6px;\n}\n.conversations-list::-webkit-scrollbar-track,\n.messages-list::-webkit-scrollbar-track {\n  background: transparent;\n}\n.conversations-list::-webkit-scrollbar-thumb,\n.messages-list::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 3px;\n}\n.conversations-list::-webkit-scrollbar-thumb:hover,\n.messages-list::-webkit-scrollbar-thumb:hover {\n  background: #999;\n}\n@media (max-width: 768px) {\n  .messages-main {\n    flex-direction: column;\n  }\n  .conversations-panel {\n    width: 100%;\n    border-right: none;\n    border-bottom: 1px solid #e0e0e0;\n    min-height: 100px;\n  }\n  .messages-list .message-item .message-content {\n    max-width: 90%;\n  }\n}\n/*# sourceMappingURL=messages.css.map */\n"] }]
  }], () => [{ type: JobService }, { type: Auth }, { type: ChangeDetectorRef }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessagesComponent, { className: "MessagesComponent", filePath: "src/app/features/messages/messages.ts", lineNumber: 51 });
})();
export {
  MessagesComponent
};
//# sourceMappingURL=chunk-IPROWAI6.js.map

