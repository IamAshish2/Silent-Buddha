type Option = {
    id: number;
    title: string;
    icon: string;
    route: string;
  };

export const Options:Option[] = [
    {
      id: 1,
      title: 'My Favourite Meditations',
      icon: 'heart',
      route: 'profile/my-favourite-meditations'
    },
    {
      id: 2,
      title: 'Preferences',
      icon: 'gear',
      route: 'profile/preferences'
    },
    {
      id: 3,
      title: 'Help',
      icon: 'question',
      route: 'profile/help'
    },
    {
      id: 4,
      title: 'Change Password',
      icon: 'lock',
      route: 'profile/change-password'
    },
  ];

  // {
  //   id: 5,
  //   title: 'Logout',
  //   icon: 'external-link',
  //   route: '/profile/logout'
  // }
  