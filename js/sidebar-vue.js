let defaultOptions = [
  {
    text: 'General',
    isHeader: true,
  },
  {
    href: '#',
    text: 'Dashboard',
    iconClass: 'mdi-monitor-dashboard',
    badgeClass: 'badge badge-pill badge-warning',
    badgeText: 'New',
    items: [
      { href: '#', text: 'Dashboard v.1' },
      { href: '#', text: 'Dashboard v.2' },
      {
        href: '#',
        text: 'Dashboard v.3',
        badgeClass: 'badge badge-pill badge-success',
        badgeText: 'Pro',
      },
    ],
  },
  {
    href: '#',
    text: 'E-commerce',
    iconClass: 'mdi-cart',
    items: [
      { href: '#', text: 'Products' },
      { href: '#', text: 'Orders' },
      { href: '#', text: 'Invoices' },
      { href: '#', text: 'Credit' },
    ],
  },
  {
    text: 'Others',
    isHeader: true,
  },
  {
    href: '#',
    text: 'Contacts',
    iconClass: 'mdi-card-account-details-outline',
  },
  {
    href: '#',
    text: 'Projects',
    iconClass: 'mdi-book',
  },
  {
    href: '#',
    text: 'Documents',
    iconClass: 'mdi-folder',
  },
  {
    href: '#',
    text: 'Calendar',
    iconClass: 'mdi-calendar',
    badgeClass: 'badge badge-pill badge-primary',
    badgeText: 'Beta',
  },
];

let defaultNotifications = [
  {
    href: '#',
    iconClass: 'mdi mdi-check-bold text-success border border-success',
    detail: 'Do eiusmod aliqua et amet sit sint proident aliquip proident.',
    time: '6 minutes ago',
  },
  {
    href: '#',
    iconClass: 'mdi mdi-exclamation-thick text-info border border-info',
    detail: 'Eu laboris adipisicing elit consequat nostrud elit nisi.',
    time: 'Today',
  },
  {
    href: '#',
    iconClass: 'mdi mdi-alert text-warning border border-warning',
    detail: 'Mollit quis ex minim Lorem commodo officia voluptate ex aliqua fugiat voluptate occaecat.',
    time: 'Yesterday',
  },
];

let defaultMessages = [
  {
    href: '#',
    userImage: 'img/user.jpg',
    userName: 'Sander Sørensen',
    detail: 'Enim labore consectetur anim non in ullamco ad veniam sint quis fugiat ad.',
  },
  {
    href: '#',
    userImage: 'img/user.jpg',
    userName: 'Jenny Ford',
    detail: 'Occaecat nisi cupidatat nostrud ipsum proident commodo laborum pariatur labore dolore amet do occaecat.',
  },
  {
    href: '#',
    userImage: 'img/user.jpg',
    userName: 'Kayla Wood',
    detail: 'Pariatur incididunt duis ea id do esse magna excepteur ut nostrud eiusmod consequat et reprehenderit.',
  },
];

new Vue({
  el: '#sidebar',
  data: function () {
    return {
      options: [],
      notifications: [],
      messages: [],
    };
  },
  created: function () {
    this.options = defaultOptions;
    this.notifications = defaultNotifications;
    this.messages = defaultMessages;
    /* You could get the options from a URL */
    /*
    axios
      .get('myserver/sidebarOptions')
      .then(function (response) {
        this.options = response.data.options;
        this.notifications = response.data.notifications;
        this.messages = response.data.messages;
      })
      .catch(function (error) {
        console.log(error);
      });
      */
  },
});
