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
      route: '/my-favourite-meditations'
    },
    {
      id: 2,
      title: 'Preferences',
      icon: 'gear',
      route: '/preferences'
    },
    {
      id: 3,
      title: 'Help',
      icon: 'question',
      route: '/help'
    },
    {
      id: 4,
      title: 'Change Password',
      icon: 'lock',
      route: '/change-password'
    },
    {
      id: 5,
      title: 'Logout',
      icon: 'external-link',
      route: 'logout'
    }
  ];
  