
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gallery-thumbnails` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gallery-thumbnails?s=duotone gallery-thumbnails}
 * @preview ![gallery-thumbnails](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gallery-thumbnails.svg)
 */
const GalleryThumbnails: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 448l0 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zm160 0l0 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zm160 0l0 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zm160 0l0 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32z" />
        <path d="M512 64l0 224L64 288 64 64l448 0zM64 0C28.7 0 0 28.7 0 64L0 288c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L64 0z" />
    </Icon>
);

export default GalleryThumbnails;