export const menuData = [
    {
      name: "System Management",
      children: [
        {
          name: "Systems",
          children: [
            {
              name: "System Code",
              children: [
                { name: "Code Registration" },
                { name: "Code Registration - 2" },
              ],
            },
            { name: "Properties" },
            {
              name: "Menus",
              children: [{ name: "Menu Registration" }],
            },
            {
              name: "API List",
              children: [
                { name: "API Registration" },
                { name: "API Edit" },
              ],
            },
          ],
        },
        {
          name: "Users & Groups",
          children: [
            {
              name: "Users",
              children: [{ name: "User Account Registration" }],
            },
            {
              name: "Groups",
              children: [{ name: "User Group Registration" }],
            },
          ],
        },
        {
          name: "사용자 승인",
          children: [{ name: "사용자 승인 상세" }],
        },
      ],
    },
  ];
  