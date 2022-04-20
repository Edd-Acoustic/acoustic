/* eslint-disable import/prefer-default-export */
export const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export const articleStateMock = {
  id: 'db4930e9-7504-4d9d-ae6c-33facca754d1',
  elements: {
    author: { value: 'John Doe' },
    body: {
      values: [
        '<h2><span style="font-family:&#39;arial&#39; , &#39;helvetica&#39; , sans-serif">Hey there</span></h2>\n',
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      ],
    },
    date: { value: '2020-09-06T22:00:00Z' },
    heading: { value: 'Top article title' },
    mainImage: {
      value: {
        leadImageCaption: { value: 'Listen your voice' },
        leadImage: {
          renditions: {
            card: {
              height: 360,
              width: 640,
              source:
                '/delivery/v1/resources/0874022e-89fe-448e-af2f-d7a88b7baa04',
              url: '/859f2008-a40a-4b92-afd0-24bb44d10124/dxresources/0874/0874022e-89fe-448e-af2f-d7a88b7baa04.jpg?resize=640px%3A470px&crop=640%3A360%3B0%2C55',
            },
            default: {
              height: 1101,
              source:
                '/delivery/v1/resources/0874022e-89fe-448e-af2f-d7a88b7baa04',
              url: '/859f2008-a40a-4b92-afd0-24bb44d10124/dxresources/0874/0874022e-89fe-448e-af2f-d7a88b7baa04.jpg',
              width: 1500,
            },
            lead: {
              height: 624,
              width: 1200,
              url: '/859f2008-a40a-4b92-afd0-24bb44d10124/dxresources/0874/0874022e-89fe-448e-af2f-d7a88b7baa04.jpg?resize=1200px%3A881px&crop=1200%3A624%3B0%2C128',
              source:
                '/delivery/v1/resources/0874022e-89fe-448e-af2f-d7a88b7baa04?resize=1200px:881px&crop=1200:624;0,128',
            },
          },
        },
      },
    },
  },
};
