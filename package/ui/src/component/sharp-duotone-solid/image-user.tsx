
import { Icon, generic } from "../../index";

/**
 * A component that renders the `image-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-user?s=sharp-duotone-solid image-user}
 * @preview ![image-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/image-user.svg)
 */
const ImageUser: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-448L0 32zM144 384l32-96 160 0 32 96-224 0zM320 192a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M256 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM368 384l-32-96-160 0-32 96 224 0z" />
    </Icon>
);

export default ImageUser;