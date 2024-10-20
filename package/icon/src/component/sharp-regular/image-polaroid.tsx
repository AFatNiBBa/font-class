
import { Icon } from "../../index";

/**
 * A component that renders the `image-polaroid` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-polaroid?s=sharp-regular image-polaroid}
 * @preview ![image-polaroid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/image-polaroid.svg)
 */
const ImagePolaroid: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 368L48 368l0 64 352 0 0-64zM75.3 320l57.3-78.2L152 215.4l19.4 26.4L188 264.4l56-85.6L264 148.1l20.1 30.7L376.4 320l23.6 0 0-240L48 80l0 240 27.3 0zM448 320l0 24 0 24 0 64 0 48-48 0L48 480 0 480l0-48 0-64 0-24 0-24L0 80 0 32l48 0 352 0 48 0 0 48 0 240zM80 144a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default ImagePolaroid;