import{A as w}from"./AppLayout-179ccba9.js";import F from"./DeleteUserForm-4f5aa028.js";import{J as y}from"./SectionBorder-d01809bd.js";import $ from"./LogoutOtherBrowserSessionsForm-370ecccc.js";import k from"./TwoFactorAuthenticationForm-1396bc0e.js";import v from"./UpdatePasswordForm-fd31f11c.js";import P from"./UpdateProfileInformationForm-30e3e2ee.js";import b from"./UpdateNotificationPreferencesForm-5f99f715.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{l as t,o as s,c as B,w as p,a as n,t as U,b as o,d as a,e as m,F as x}from"./app-6539473d.js";import"./useAuthorizable-92ac6ada.js";import"./ActionSection-05208fa2.js";import"./SectionTitle-1d886f01.js";import"./DialogModal-6946bb6a.js";import"./Modal-7e6afb68.js";import"./DangerButton-d2f6ffc9.js";import"./Input-b62d2520.js";import"./InputError-5d36f78c.js";import"./SecondaryButton-764b3bff.js";import"./ActionMessage-f2680288.js";import"./Button-047e9640.js";import"./XInput-be515ab6.js";import"./FormSection-cb48e34a.js";import"./PasswordStrengthMeter-5700f401.js";import"./Label-3df0782a.js";import"./index.es-f1848e2f.js";import"./XCheckbox-1018f138.js";import"./XSelect-00ba26d1.js";import"./XTextarea-edf95cce.js";const A={components:{UpdateNotificationPreferencesForm:b,AppLayout:w,DeleteUserForm:F,JetSectionBorder:y,LogoutOtherBrowserSessionsForm:$,TwoFactorAuthenticationForm:k,UpdatePasswordForm:v,UpdateProfileInformationForm:P},props:["sessions"]},S={class:"font-semibold text-xl text-gray-800 leading-tight"},N={class:"max-w-7xl mx-auto py-10 px-2 sm:px-6 lg:px-8"},C={key:0},D={key:1},V={key:2};function I(e,J,i,L,T,q){const c=t("app-head"),_=t("update-profile-information-form"),r=t("jet-section-border"),l=t("update-notification-preferences-form"),f=t("update-password-form"),u=t("two-factor-authentication-form"),d=t("logout-other-browser-sessions-form"),h=t("delete-user-form"),g=t("app-layout");return s(),B(g,null,{header:p(()=>[n("h2",S,U(e.__("Profile")),1)]),default:p(()=>[o(c,{title:e.__("Your Profile Settings")},null,8,["title"]),n("div",null,[n("div",N,[e.$page.props.jetstream.canUpdateProfileInformation?(s(),a("div",C,[o(_,{user:e.$page.props.auth.user},null,8,["user"]),o(r)])):m("",!0),n("div",null,[o(l,{user:e.$page.props.auth.user},null,8,["user"]),o(r)]),e.$page.props.jetstream.canUpdatePassword?(s(),a("div",D,[o(f,{class:"mt-10 sm:mt-0"}),o(r)])):m("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(s(),a("div",V,[o(u,{class:"mt-10 sm:mt-0","requires-confirmation":!0}),o(r)])):m("",!0),o(d,{sessions:i.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(s(),a(x,{key:3},[o(r),o(h,{class:"mt-10 sm:mt-0"})],64)):m("",!0)])])]),_:1})}const go=j(A,[["render",I]]);export{go as default};