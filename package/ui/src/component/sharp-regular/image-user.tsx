
import { Icon } from "../../index";

/**
 * A component that renders the `image-user` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-user?s=sharp-regular image-user}
 * @preview ![image-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/image-user.svg)
 */
const ImageUser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 80l0 352 416 0 0-352L48 80zM0 32l48 0 416 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM192 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm144 96l32 96-224 0 32-96 160 0z" />
    </Icon>
);

export default ImageUser;