
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gallery-thumbnails` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gallery-thumbnails?s=sharp-duotone-solid gallery-thumbnails}
 * @preview ![gallery-thumbnails](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gallery-thumbnails.svg)
 */
const GalleryThumbnails: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 96 96 0 0-96L0 416zm160 0l0 96 96 0 0-96-96 0zm160 0l0 96 96 0 0-96-96 0zm160 0l0 96 96 0 0-96-96 0z" />
        <path d="M512 64l0 224L64 288 64 64l448 0zM64 0L0 0 0 64 0 288l0 64 64 0 448 0 64 0 0-64 0-224 0-64L512 0 64 0z" />
    </Icon>
);

export default GalleryThumbnails;