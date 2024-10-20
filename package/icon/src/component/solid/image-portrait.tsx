
import { Icon } from "../../index";

/**
 * A component that renders the `image-portrait` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-portrait?s=solid image-portrait}
 * @preview ![image-portrait](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/image-portrait.svg)
 */
const ImagePortrait: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 64c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384zM128 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM80 356.6c0-37.9 30.7-68.6 68.6-68.6l86.9 0c37.9 0 68.6 30.7 68.6 68.6c0 15.1-12.3 27.4-27.4 27.4l-169.1 0C92.3 384 80 371.7 80 356.6z" />
    </Icon>
);

export default ImagePortrait;