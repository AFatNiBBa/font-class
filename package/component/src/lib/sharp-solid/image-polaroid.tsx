
import { Icon } from "../../index";

/**
 * A component that renders the `image-polaroid` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-polaroid?s=sharp-solid image-polaroid}
 * @preview ![image-polaroid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/image-polaroid.svg)
 */
const ImagePolaroid: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 448L0 480 0 32zM64 96l0 256 320 0 0-256L64 96zm64 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM352 320l-144 0-48 0-64 0 0-32 56-64 30.2 34.5L256 160l96 128 0 32z" />
    </Icon>
);

export default ImagePolaroid;