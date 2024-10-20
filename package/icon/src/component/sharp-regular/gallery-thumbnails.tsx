
import { Icon } from "../../index";

/**
 * A component that renders the `gallery-thumbnails` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gallery-thumbnails?s=sharp-regular gallery-thumbnails}
 * @preview ![gallery-thumbnails](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/gallery-thumbnails.svg)
 */
const GalleryThumbnails: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 48l0 256L48 304 48 48l480 0zM48 0L0 0 0 48 0 304l0 48 48 0 480 0 48 0 0-48 0-256 0-48L528 0 48 0zM96 416L0 416l0 96 96 0 0-96zm160 0l-96 0 0 96 96 0 0-96zm64 0l0 96 96 0 0-96-96 0zm256 96l0-96-96 0 0 96 96 0z" />
    </Icon>
);

export default GalleryThumbnails;