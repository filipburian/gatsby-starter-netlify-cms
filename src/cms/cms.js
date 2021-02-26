import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import RealizationItemPreview from './preview-templates/RealizationItemPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import NavbarPreview from "./preview-templates/NavbarPreview";

import CustomWidget from './CustomWidget';
import { CustomWidgetPreview } from './CustomWidgetPreview';

CMS.registerWidget("customwidget", CustomWidget, CustomWidgetPreview);

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', RealizationItemPreview);
CMS.registerPreviewTemplate("navbar", NavbarPreview);

