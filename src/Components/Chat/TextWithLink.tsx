import * as React from "react";
import {Typography} from "@material-ui/core";
// import MuiLinkify from "material-ui-linkify/src/components/MuiLinkify"
// import MuiLink from "@material-ui/core/Link/Link";
//
//
interface Props {
    message: String
}
//
// const parseString = (inputString: string) => {
//     if (inputString === ''
//         || inputString === null
//         || inputString === undefined
//         || typeof inputString === 'undefined') {
//         return '';
//     }
//     const linkify = require('linkifyjs');
//     const matches: RegExpMatchArray = linkify.match(inputString);
//
//     if (!matches) {
//         return inputString;
//     }
//
//     const elements = [];
//     let lastIndex = 0;
//
//     matches.forEach((match, i) => {
//         // Push preceding text if there is any
//         if (match.index > lastIndex) {
//             elements.push(inputString.substring(lastIndex, match.index));
//         }
//
//         let { text } = match;
//
//         if (
//             hostnameOnly === true
//             && Array.isArray(hostnameSchemas)
//             && hostnameSchemas.indexOf(match.schema) !== -1
//         ) {
//             const urlObject = new window.URL(match.url);
//
//             text = urlObject.hostname;
//         }
//
//         const component = (
//             <MuiLink
//                 href={match.url}
//                 key={i}
//                 {...LinkProps}
//             >
//                 {text}
//             </MuiLink>
//         );
//
//         elements.push(component);
//
//         lastIndex = match.lastIndex;
//     });
//
//     // Push remaining text if there is any
//     if (inputString.length > lastIndex) {
//         elements.push(inputString.substring(lastIndex));
//     }
//
//     return (elements.length === 1) ? elements[0] : elements;
// };
//
export default function TextWithLink(props: Props) {
//
//
//
//     //const urlRegex = require('url-regex');
//
//     //const arrayOfUrls = 'foo http://github.com bar //google.com'.match(urlRegex());
//
//     const linkify = require('linkifyjs');
//     const array = linkify.find('Any links to github.com here? If not, contact test@example.com');
//
//     const linkifyHtml = require('linkifyjs/html');
//     const message = linkifyHtml(props.message, {
//         defaultProtocol: 'https'
//     });
//
//     const outputParagraph = '<p>' + message + '</p>';
//
//
    return (
//         <MuiLinkify>
            <Typography variant="body1">
                {props.message}
            </Typography>
//         </MuiLinkify>
         )
//
 }