
import { Icon, generic } from "../../index";

/**
 * A component that renders the `image-polaroid-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-polaroid-user?s=sharp-duotone-solid image-polaroid-user}
 * @preview ![image-polaroid-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/image-polaroid-user.svg)
 */
const ImagePolaroidUser: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM64 96l320 0 0 256-56 0-208 0-56 0L64 96z" />
        <path d="M384 96L64 96l0 256 56 0 24-64 160 0 24 64 56 0 0-256zM160 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default ImagePolaroidUser;