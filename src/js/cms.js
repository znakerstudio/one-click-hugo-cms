import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/oferta";
import ValuesPreview from "./cms-preview-templates/przyklady";
import ContactPreview from "./cms-preview-templates/contact";
import MojecvPreview from "./cms-preview-templates/mojecv";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerPreviewTemplate("values", ValuesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("mojecv", MojecvPreview);
CMS.init();
