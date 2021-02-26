import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Menu, Layout } from 'antd';
import CustomLink from '../CustomLink';

const { Header } = Layout;
const { SubMenu } = Menu;

const Navbar = ({ data }) => {
  const navData = data.allMarkdownRemark.edges[0].node.frontmatter.menuItems;

  return (
    <nav role="navigation" aria-label="main-navigation">
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          {navData.map((menuItem) => {
            console.log(menuItem);
            if (!menuItem.subNav) {
              return (
                <Menu.Item key={menuItem.label}>
                  <CustomLink linkType={menuItem.linkType} linkURL={`${menuItem.linkURL}`}>
                    {menuItem.label}
                  </CustomLink>
                </Menu.Item>
              );
            }
            return (
              <SubMenu
                key="SubMenu"
                title={
                  <CustomLink linkType={menuItem.linkType} linkURL={`${menuItem.linkURL}`}>
                    {menuItem.label}
                  </CustomLink>
                }
              >
                {menuItem.subNav.map((subNavItem) => (
                  <Menu.Item key={subNavItem.label}>
                    <CustomLink
                      linkType={subNavItem.linkType}
                      linkURL={`${menuItem.linkURL}/${subNavItem.linkURL}`}
                    >
                      {subNavItem.label}
                    </CustomLink>
                  </Menu.Item>
                ))}
              </SubMenu>
            );
          })}
        </Menu>
      </Header>
    </nav>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query NavBarQuery {
        allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
          edges {
            node {
              id
              frontmatter {
                menuItems {
                  label
                  linkType
                  linkURL
                  subNav {
                    label
                    linkType
                    linkURL
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <Navbar data={data} />}
  />
);
