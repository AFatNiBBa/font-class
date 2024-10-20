
import { Icon } from "../../index";

/**
 * A component that renders the `image-user` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-user?s=sharp-solid image-user}
 * @preview ![image-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/image-user.svg)
 */
const ImageUser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 32L0 32 0 480l512 0 0-448zM192 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm144 96l32 96-224 0 32-96 160 0z" />
    </Icon>
);

export default ImageUser;