const NavItems: any = [
  {                        // ---------------------- c-pannel -----------------------
    storeId: 'c-pannel',
    accessType: [
      {
        navId: 'super-user',
        navTree: [{
          navId: 'organization',
          color: '#fda348',
          icon: 'menu',
          text: 'Organization',
          children: [
            {
              navId: 'addOrganization',
              icon: 'org',
              color: '#ccc',
              text: 'Add an Organization',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }, {
          navId: 'employee',
          color: '#fda348',
          icon: 'menu',
          text: 'Employee Information',
          children: [
            {
              navId: 'newEmployee',
              icon: 'emp',
              color: '#ccc',
              text: 'Add New Employee',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }]
      }, {
        navId: 'admin-user',
        navTree: [{
          navId: 'organization',
          color: '#fda348',
          icon: 'menu',
          text: 'Organization',
          children: [
            {
              navId: 'addOrganization',
              icon: 'org',
              color: '#ccc',
              text: 'Add an Organization',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }, {
          navId: 'employee',
          color: '#fda348',
          icon: 'menu',
          text: 'Employee Information',
          children: [
            {
              navId: 'newEmployee',
              icon: 'emp',
              color: '#ccc',
              text: 'Add New Employee',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }]
      }
    ]
  }, {                    // ---------------------- web-store -----------------------
    storeId: 'web-store',
    accessType: [
      {
        navId: 'general_user',
        navTree: [{
          navId: 'tracking',
          color: '#fda348',
          icon: 'menu',
          text: 'Tracking',
          children: [
            {
              navId: 'track',
              icon: 'org',
              color: '#ccc',
              text: 'Track',
              route: '/tracking/track'
            },
          ]
        }, {
          navId: 'reports',
          color: '#fda348',
          icon: 'menu',
          text: 'Reports',
          children: [
            {
              navId: 'dashboard',
              icon: 'emp',
              color: '#ccc',
              text: 'Dashboard',
              route: '/reports/dashboard'
            }
          ]
        }]
      }, {
        navId: 'super-incharge',
        navTree: [{
          navId: 'organization',
          color: '#fda348',
          icon: 'menu',
          text: 'Organization',
          children: [
            {
              navId: 'addOrganization',
              icon: 'org',
              color: '#ccc',
              text: 'Add an Organization',
              route: '/webstore/organization/add-organization'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }, {
          navId: 'employee',
          color: '#fda348',
          icon: 'menu',
          text: 'Employee Information',
          children: [
            {
              navId: 'newEmployee',
              icon: 'emp',
              color: '#ccc',
              text: 'Add New Employee',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }]
      }, {
        navId: 'incharge',
        navTree: [{
          navId: 'organization',
          color: '#fda348',
          icon: 'menu',
          text: 'Organization',
          children: [
            {
              navId: 'addOrganization',
              icon: 'org',
              color: '#ccc',
              text: 'Add an Organization',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }, {
          navId: 'employee',
          color: '#fda348',
          icon: 'menu',
          text: 'Employee Information',
          children: [
            {
              navId: 'newEmployee',
              icon: 'emp',
              color: '#ccc',
              text: 'Add New Employee',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }]
      }, {
        navId: 'end-user',
        navTree: [{
          navId: 'organization',
          color: '#fda348',
          icon: 'menu',
          text: 'Organization',
          children: [
            {
              navId: 'addOrganization',
              icon: 'org',
              color: '#ccc',
              text: 'Add an Organization',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }, {
          navId: 'employee',
          color: '#fda348',
          icon: 'menu',
          text: 'Employee Information',
          children: [
            {
              navId: 'newEmployee',
              icon: 'emp',
              color: '#ccc',
              text: 'Add New Employee',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }]
      }
    ]
  }
];

export default NavItems;
