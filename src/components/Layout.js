import React from 'react';
import { Helmet } from 'react-helmet';
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';
import { Layout, Menu, Breadcrumb, Button } from 'antd';

const { Header, Content, Footer } = Layout;

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div id="layout">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
      </Helmet>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo ultricies nulla
            vel fermentum. Morbi malesuada augue eget magna porttitor, eu elementum dolor
            pellentesque. Suspendisse ut luctus augue. Nam posuere risus mi, eu auctor leo tincidunt
            in. In suscipit finibus quam. Duis porttitor pharetra metus, quis rhoncus ligula
            vulputate dictum. Vestibulum quis eros at mauris fringilla pretium.

            Sed nec neque
            sodales, mollis purus mollis, hendrerit risus. Maecenas luctus eleifend tortor et
            mattis. Aliquam fermentum lectus nulla, vitae semper neque elementum id. Quisque vel dui
            quis erat dapibus finibus. Mauris semper eget purus eget volutpat. Donec tincidunt
            turpis non ex auctor, porta ornare nisi condimentum. Ut a metus quis dolor tempor
            fringilla. Duis dignissim nibh non velit maximus mollis. Proin egestas nec leo eget
            tristique. Morbi gravida, ligula sed semper porta, urna nisl scelerisque erat, ac
            molestie eros enim vitae erat. Etiam in felis in enim luctus vulputate. Fusce ex lorem,
            tincidunt a tincidunt at, fringilla consequat neque. Mauris hendrerit eget nisi sed
            aliquam. Aliquam eget auctor turpis. Nam id accumsan tortor, vitae tempor felis. Nullam
            ullamcorper, nulla nec fringilla interdum, lacus arcu varius dui, et porttitor enim
            magna sit amet lorem. Ut placerat lectus ut nisl blandit egestas sed eu tortor. Proin
            cursus nunc massa. Phasellus iaculis, purus ac dapibus bibendum, justo sapien tempus
            mauris, eget pulvinar ante tellus quis nisi. Vestibulum porta vitae sapien at mattis.
            Nulla mattis sodales vehicula. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Suspendisse eu auctor sem. Nulla vel condimentum
            nibh. Phasellus venenatis dapibus pharetra. Sed tincidunt posuere odio, sit amet
            volutpat ipsum lobortis id. Integer ac nulla dapibus, egestas est quis, bibendum dui.
            Aenean a tortor suscipit, dignissim ipsum pharetra, aliquam orci. Maecenas arcu turpis,
            luctus non metus a, imperdiet condimentum augue. Phasellus a purus at nisi mollis
            lobortis ac at purus. Cras ut faucibus velit. Aliquam mollis ipsum vel lorem aliquet, in
            dictum lorem pulvinar. Fusce nulla sapien, volutpat sit amet pharetra eu, pulvinar eu
            massa. Nam aliquet justo ut libero ullamcorper pretium. Fusce non euismod orci. Mauris
            id tortor lacinia, convallis ante eget, accumsan ligula. Praesent quis nibh nec sapien
            pharetra mollis. Phasellus orci lectus, volutpat et interdum non, egestas sed nisl.
            Proin sit amet dui et lacus faucibus malesuada. Vestibulum magna arcu, hendrerit nec
            sapien ut, condimentum lacinia enim. Sed non sodales velit, in efficitur magna.
            Vestibulum aliquam euismod mollis. Donec viverra arcu pellentesque libero porta mollis.
            Integer quam sapien, imperdiet sed nulla nec, accumsan luctus augue. Fusce scelerisque
            vehicula nisl, a posuere ante ultricies ut. Praesent vitae vehicula justo, quis
            efficitur nibh. Morbi euismod quam orci, quis accumsan purus commodo eu. Proin
            consectetur vulputate iaculis. Nunc quis tincidunt tortor. Nulla in nisi nisl. Nulla
            aliquet neque aliquet dui mattis gravida. Fusce condimentum est nulla, sit amet ornare
            quam vulputate eget. Vestibulum a tristique orci. Nullam dignissim vitae leo ut
            condimentum. Cras blandit aliquet erat quis fringilla. Curabitur blandit maximus nunc,
            eu sagittis odio rhoncus lacinia. Vestibulum at fringilla mauris. Quisque ut arcu ut
            lorem vestibulum sagittis vitae eget ipsum. Sed sit amet aliquam lectus. Proin tempus
            rhoncus neque eu hendrerit. Quisque tempus tortor id fringilla aliquam. Suspendisse
            facilisis odio tortor, ac hendrerit elit commodo ut. Praesent lacinia vestibulum
            vestibulum. Duis vel efficitur sem. Nam tempus, quam sed pharetra facilisis, erat risus
            rhoncus orci, nec porttitor turpis orci eget est. Morbi gravida accumsan enim eget
            iaculis. Ut et dui leo. Aliquam imperdiet sem eget condimentum semper. Praesent eu enim
            lacinia, finibus tellus in, tincidunt felis.
          </div>
            <Button type="primary">Test</Button>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
      <div>{children}</div>
      {/*<Footer />*/}
    </div>
  );
};

export default TemplateWrapper;
