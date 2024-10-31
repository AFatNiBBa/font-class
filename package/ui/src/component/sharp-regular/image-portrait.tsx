
import { Icon } from "../../index";

/**
 * A component that renders the `image-portrait` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-portrait?s=sharp-regular image-portrait}
 * @preview ![image-portrait](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/image-portrait.svg)
 */
const ImagePortrait: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 48l0 416 288 0 0-416L48 48zM384 0l0 48 0 416 0 48-48 0L48 512 0 512l0-48L0 48 0 0 48 0 336 0l48 0zM128 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm144 96l32 96L80 384l32-96 160 0z" />
    </Icon>
);

export default ImagePortrait;