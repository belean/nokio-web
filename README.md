# Nokio web site

```yaml
by: Mikael Backlund
at: 2024-12-01
```

Nokio web site is a landing page for Nokio. It contains information, offers and a contact form for sending a message.

The landing page is a react web app and built with Creative Tim package built on Material-UI. It uses Amplify to simplify the serverless instrumenting in AWS.

It use the following Amplify environment, amplify user and configlevel

```json
{
  "master": {
    "configLevel": "project",
    "useProfile": true,
    "profileName": "amplify-nokio"
  }
}
```

The code is stored in GitHub with the following status: (as seen from Macbook Pro)

```
❯ gh auth status
github.com
  ✓ Logged in to github.com account scipleai (keyring)
  - Active account: true
  - Git operations protocol: https
  - Token: gho_************************************
  - Token scopes: 'gist', 'read:org', 'repo', 'workflow'

  ✓ Logged in to github.com account belean (keyring)
  - Active account: false
  - Git operations protocol: https
  - Token: gho_************************************
  - Token scopes: 'gist', 'read:org', 'repo', 'workflow'
```

To develop or fix bugs follow this list

1. Clone the Github repository
1. Pull the amplify project from AWS:Amplify
   ![AWS Console login](./public/AWSConsoleLogin.png "AWS Login")
   and connect your app to this backend environment using the Amplify CLI by running the following command from your project root folder.

   ```bash
   amplify pull --appId dipnm9dskg0l0 --envName master
   ```

1. Initialize the amplify project with

   ```bash
   amplify configure  # Configure the CLI to work with your AWS profile
   #amplify init  # Initialize a new Amplify project
   ```

1. Amplify status should show this

```bash
 ❯ amplify status

  Current Environment: master

┌──────────┬──────────────────┬───────────┬───────────────────┐
│ Category │ Resource name    │ Operation │ Provider plugin   │
├──────────┼──────────────────┼───────────┼───────────────────┤
│ Api      │ apiSendEmail2    │ No Change │ awscloudformation │
├──────────┼──────────────────┼───────────┼───────────────────┤
│ Auth     │ WebsiteNokioAuth │ No Change │ awscloudformation │
├──────────┼──────────────────┼───────────┼───────────────────┤
│ Function │ sendemail2       │ No Change │ awscloudformation │
├──────────┼──────────────────┼───────────┼───────────────────┤
│ Hosting  │ amplifyhosting   │ No Change │ awscloudformation │
└──────────┴──────────────────┴───────────┴───────────────────┘

REST API endpoint: https://jbti02jtw9.execute-api.eu-west-1.amazonaws.com/master

Amplify hosting urls:
┌──────────────┬─────────────────────────────────────────────┐
│ FrontEnd Env │ Domain                                      │
├──────────────┼─────────────────────────────────────────────┤
│ master       │ https://master.dipnm9dskg0l0.amplifyapp.com │
│              ├─────────────────────────────────────────────┤
│              │ https://nokio.org                           │
│              ├─────────────────────────────────────────────┤
│              │ https://www.nokio.org                       │
└──────────────┴─────────────────────────────────────────────┘
```

1. To build a local copy

   ```
   yarn && yarn run build && serve -s build
   ```

   **Now, if you go to localhost:3000 you can access the web app**

1. Push to Github to deploy

## AWS Cognito

Sciple web app is using AWS cognito to authorize web users to send messages to gmail. Sciple is using

| Identity pools                                       | User pools                                    |
| ---------------------------------------------------- | --------------------------------------------- |
| websitenokio59aa4c71_identitypool_59aa4c71\_\_master | websitenokio59aa4c71_userpool_59aa4c71-master |

## Trouble shooting

1. Make sure to check errors in the web browser development tools
1. Beware of users and their permission especially since cognito is involved
   - Trust relationship
   - Permissions like ses:SendEmail
1. Check in Cloudwatch if errors (AWS Lambda)

https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/api-gateway-invoking-lambda-example.html

https://dev.to/focusotter/aws-amplify-using-existing-auth-and-api-resources-30pg

# [Sciple Maps](https://demos.creative-tim.com/material-kit-pro-react) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/home?status=Material%20Kit%20PRO%20is%20a%20Bootstrap%20UI%20Kit%20with%20a%20fresh,%20new%20design%20inspired%20by%20Google's%20Material%20Design%20%E2%9D%A4%EF%B8%8Fhttps%3A//demos.creative-tim.com/material-kit-pro/presentation.html%20%23bootstrap%20%23material%20%23design%20%23uikit%20%23premium%20%20via%20%40CreativeTim)

![version](https://img.shields.io/badge/version-1.9.0-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/ct-material-kit-pro-react.svg?maxAge=2592000)](https://github.com/creativetimofficial/ct-material-kit-pro-react/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/ct-material-kit-pro-react.svg?maxAge=2592000)](https://github.com/creativetimofficial/ct-material-kit-pro-react/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

![Product Presentation Image](https://s3.amazonaws.com/creativetim_bucket/products/89/original/opt_mkp_react_thumbnail.jpg)

**[Sciple Maps](https://demos.creative-tim.com/material-kit-pro-react/#/components)** is a beautiful resource built for Material Design. It was made over the powerful Material-UI. We used and have redesigned all components to make it look flat, minimalist and easy to use. We are proud of this new Material-UI skin and the possibilities for customisation.

Using it is very simple and it will enable you to refresh you classic looking application. To get the desired effect you will also need to integrate ReactJS plugins that take a little bit more effort. In the end the result will be worth it.

**[Sciple Maps](https://demos.creative-tim.com/material-kit-pro-react/#/components)** uses a framework built by our friend Olivier and his team - [Material-UI](https://material-ui.com/) and was created starting with [create-react-app](https://github.com/facebook/create-react-app), who did an amazing job creating the backbone for the material effects, animations, ripples and transitions. Big thanks to his team for the effort and forward thinking they put into it.

## Table of Contents

- [Demo](#demo)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [File Structure](#file-structure)
- [Browser Support](#browser-support)
- [Resources](#resources)
- [Reporting Issues](#reporting-issues)
- [Technical Support or Questions](#technical-support-or-questions)
- [Licensing](#licensing)
- [Useful Links](#useful-links)

## Demo

- [Index Page](https://demos.creative-tim.com/material-kit-pro-react/#/components)
- [Buttons Section](https://demos.creative-tim.com/material-kit-pro-react/#/components#buttons)
- [Navigation Section](https://demos.creative-tim.com/material-kit-pro-react/#/components#navigation)
- [Notifications Section](https://demos.creative-tim.com/material-kit-pro-react/#/components#notifications)
- [User profile page](https://demos.creative-tim.com/material-kit-pro-react/#/profile-page)
- [Landing page](https://demos.creative-tim.com/material-kit-pro-react/#/landing-page)

[View More](https://demos.creative-tim.com/material-kit-pro-react/#/components).

## Quick start

- Buy from [Creative Tim](https://www.creative-tim.com/product/material-kit-pro-react)

## Documentation

The documentation for the Sciple Maps is hosted at our [website](https://demos.creative-tim.com/material-kit-pro-react/#/documentation/tutorial).

## File Structure

Within the download you'll find the following directories and files:

```
material-kit-pro
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── README.md
├── gulpfile.js
├── jsconfig.json
├── package.json
├── Documentation
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   │   └── faces
│   │   └── js
│   └── tutorial-components.html
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    │   ├── css
    │   │   ├── material-kit-pro-react.css
    │   │   ├── material-kit-pro-react.css.map
    │   │   └── material-kit-pro-react.min.css
    │   ├── img
    │   │   ├── arrow-left.cur
    │   │   ├── arrow-right.cur
    │   │   ├── assets-for-demo
    │   │   │   ├── example-pages
    │   │   │   ├── ourClients
    │   │   │   ├── presentationViewSectionComponent
    │   │   │   └── sections
    │   │   │       └── imgs.js
    │   │   ├── examples
    │   │   ├── faces
    │   │   ├── flags
    │   │   ├── loading-bubbles.svg
    │   │   └── sections
    │   ├── jss
    │   │   ├── material-kit-pro-react
    │   │   │   ├── components
    │   │   │   └── views
    │   │   │       ├── aboutUsSections
    │   │   │       ├── blogPostSections
    │   │   │       ├── blogPostsSections
    │   │   │       ├── componentsSections
    │   │   │       ├── ecommerceSections
    │   │   │       ├── landingPageSections
    │   │   │       ├── presentationSections
    │   │   │       ├── pricingSections
    │   │   │       ├── sectionsSections
    │   │   └── material-kit-pro-react.js
    │   └── scss
    │       ├── core
    │       │   ├── mixins
    │       │   └── variables
    │       ├── plugins
    │       └── material-kit-pro-react.scss
    ├── components
    │   ├── Accordion
    │   │   └── Accordion.js
    │   ├── Badge
    │   │   └── Badge.js
    │   ├── Card
    │   │   ├── Card.js
    │   │   ├── CardAvatar.js
    │   │   ├── CardBody.js
    │   │   ├── CardFooter.js
    │   │   └── CardHeader.js
    │   ├── Clearfix
    │   │   └── Clearfix.js
    │   ├── CustomButtons
    │   │   └── Button.js
    │   ├── CustomDropdown
    │   │   └── CustomDropdown.js
    │   ├── CustomFileInput
    │   │   └── CustomFileInput.js
    │   ├── CustomInput
    │   │   └── CustomInput.js
    │   ├── CustomLinearProgress
    │   │   └── CustomLinearProgress.js
    │   ├── CustomTabs
    │   │   └── CustomTabs.js
    │   ├── CustomUpload
    │   │   └── ImageUpload.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Grid
    │   │   ├── GridContainer.js
    │   │   └── GridItem.js
    │   ├── Header
    │   │   ├── Header.js
    │   │   └── HeaderLinks.js
    │   ├── InfoArea
    │   │   └── InfoArea.js
    │   ├── Instruction
    │   │   └── Instruction.js
    │   ├── Media
    │   │   └── Media.js
    │   ├── NavPills
    │   │   └── NavPills.js
    │   ├── Pagination
    │   │   └── Pagination.js
    │   ├── Parallax
    │   │   └── Parallax.js
    │   ├── Snackbar
    │   │   └── SnackbarContent.js
    │   ├── Table
    │   │   └── Table.js
    │   └── Typography
    │       ├── Danger.js
    │       ├── Info.js
    │       ├── Muted.js
    │       ├── Primary.js
    │       ├── Quote.js
    │       ├── Rose.js
    │       ├── Small.js
    │       ├── Success.js
    │       └── Warning.js
    ├── index.js
    ├── logo.svg
    └── views
        ├── AboutUsPage
        │   ├── AboutUsPage.js
        │   └── Sections
        │       ├── SectionContact.js
        │       ├── SectionDescription.js
        │       ├── SectionOffice.js
        │       ├── SectionServices.js
        │       └── SectionTeam.js
        ├── BlogPostPage
        │   ├── BlogPostPage.js
        │   └── Sections
        │       ├── SectionBlogInfo.js
        │       ├── SectionComments.js
        │       ├── SectionSimilarStories.js
        │       └── SectionText.js
        ├── BlogPostsPage
        │   ├── BlogPostsPage.js
        │   └── Sections
        │       ├── SectionImage.js
        │       ├── SectionInterested.js
        │       ├── SectionPills.js
        │       └── SubscribeLine.js
        ├── ComponentsPage
        │   ├── ComponentsPage.js
        │   └── Sections
        │       ├── SectionBasics.js
        │       ├── SectionCards.js
        │       ├── SectionCarousel.js
        │       ├── SectionContentAreas.js
        │       ├── SectionFooter.js
        │       ├── SectionJavascript.js
        │       ├── SectionNavbars.js
        │       ├── SectionNotifications.js
        │       ├── SectionPills.js
        │       ├── SectionPreFooter.js
        │       ├── SectionTabs.js
        │       └── SectionTypography.js
        ├── ContactUsPage
        │   └── ContactUsPage.js
        ├── EcommercePage
        │   ├── EcommercePage.js
        │   └── Sections
        │       ├── SectionBlog.js
        │       ├── SectionLatestOffers.js
        │       └── SectionProducts.js
        ├── ErrorPage
        │   └── ErrorPage.js
        ├── LandingPage
        │   ├── LandingPage.js
        │   └── Sections
        │       ├── SectionProduct.js
        │       ├── SectionTeam.js
        │       └── SectionWork.js
        ├── LoginPage
        │   └── LoginPage.js
        ├── PresentationPage
        │   ├── PresentationPage.js
        │   └── Sections
        │       ├── SectionCards.js
        │       ├── SectionComponents.js
        │       ├── SectionContent.js
        │       ├── SectionDescription.js
        │       ├── SectionExamples.js
        │       ├── SectionFreeDemo.js
        │       ├── SectionOverview.js
        │       ├── SectionPricing.js
        │       └── SectionSections.js
        ├── PricingPage
        │   ├── PricingPage.js
        │   └── Sections
        │       ├── SectionFeatures.js
        │       └── SectionPricing.js
        ├── ProductPage
        │   └── ProductPage.js
        ├── ProfilePage
        │   └── ProfilePage.js
        ├── SectionsPage
        │   ├── Sections
        │   │   ├── SectionBlogs.js
        │   │   ├── SectionContacts.js
        │   │   ├── SectionFeatures.js
        │   │   ├── SectionHeaders.js
        │   │   ├── SectionPricing.js
        │   │   ├── SectionProjects.js
        │   │   ├── SectionTeams.js
        │   │   └── SectionTestimonials.js
        │   └── SectionsPage.js
        ├── ShoppingCartPage
        │   └── ShoppingCartPage.js
        └── SignupPage
            └── SignupPage.js
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">

## Resources

- Demo: <https://demos.creative-tim.com/material-kit-pro-react/#/components>

- Download Page: <https://www.creative-tim.com/product/material-kit-pro-react>
- Documentation: <https://demos.creative-tim.com/material-kit-pro-react/#/documentation/tutorial>
- License Agreement: <https://www.creative-tim.com/license>
- Support: <https://www.creative-tim.com/contact-us>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/ct-material-kit-pro-react/issues)

- [Material Kit Free React](https://demos.creative-tim.com/material-kit-react/#/)

- [Material Kit Free](https://demos.creative-tim.com/material-kit/index.html)
- [Material Dashboard Free React](https://demos.creative-tim.com/material-dashboard-react/#/dashboard)
- [Material Dashboard Pro React](https://demos.creative-tim.com/material-dashboard-pro-react/#/dashboard)
- [Material Dashboard Free HTML](https://demos.creative-tim.com/material-dashboard/examples/dashboard.html)
- [Material Dashboard Pro HTML](https://demos.creative-tim.com/material-dashboard-pro/examples/dashboard.html)
- [Material Dashboard Free Angular](https://demos.creative-tim.com/material-dashboard-angular2/dashboard)
- [Material Dashboard Pro Angular](https://demos.creative-tim.com/material-dashboard-pro-angular2/dashboard)

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Sciple Maps. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Sciple Maps. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://www.creative-tim.com/contact-us) instead of opening an issue.

## Licensing

- Copyright 2020 Creative Tim (<https://www.creative-tim.com/>)

- Creative Tim [license](https://www.creative-tim.com/license)

## Useful Links

- [More products](https://www.creative-tim.com/bootstrap-themes) from Creative Tim
- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)
- [Freebies](https://www.creative-tim.com/bootstrap-themes/free) from Creative Tim
- [Affiliate Program](https://www.creative-tim.com/affiliates/new) (earn money)

##### Social Media

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Google+: <https://plus.google.com/+CreativetimPage>

Instagram: <https://www.instagram.com/CreativeTimOfficial>
