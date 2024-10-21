
import { Icon } from "../../index";

/**
 * A component that renders the `image-polaroid-user` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-polaroid-user?s=sharp-regular image-polaroid-user}
 * @preview ![image-polaroid-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/image-polaroid-user.svg)
 */
const ImagePolaroidUser: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 432l0-64 352 0 0 64L48 432zM322 320l-18-48-160 0-18 48-78 0L48 80l352 0 0 240-78 0zm126 24l0-24 0-240 0-48-48 0L48 32 0 32 0 80 0 320l0 24 0 24 0 64 0 48 48 0 352 0 48 0 0-48 0-64 0-24zM288 176a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
    </Icon>
);

export default ImagePolaroidUser;