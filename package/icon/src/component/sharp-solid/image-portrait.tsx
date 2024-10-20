
import { Icon } from "../../index";

/**
 * A component that renders the `image-portrait` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-portrait?s=sharp-solid image-portrait}
 * @preview ![image-portrait](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/image-portrait.svg)
 */
const ImagePortrait: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 0L0 0 0 512l384 0L384 0zM128 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm144 96l32 96L80 384l32-96 160 0z" />
    </Icon>
);

export default ImagePortrait;