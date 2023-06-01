import { gql } from "@apollo/client";

const GET_FOOTER = gql`
  query GetData {
    footerCollection(limit: 10) {
      items {
        footerTop {
          footerLogo {
            url
          }
          footerLogoText
          footerColumnsCollection(limit: 10) {
            items {
              heding
              link
              contetnsCollection(limit: 10) {
                items {
                  content
                  link
                }
              }
            }
          }
        }
        footerMiddle {
          followusCollection {
            items {
              socialMedia
              url
            }
          }
          downloadCollection {
            items {
              downloadOptions
              url
            }
          }
        }
        footerBottom {
          copyrights
        }
      }
    }
  }
`;

export default GET_FOOTER;
