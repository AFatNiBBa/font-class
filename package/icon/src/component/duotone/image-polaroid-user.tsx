
import { Icon, generic } from "../../index";

/**
 * A component that renders the `image-polaroid-user` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-polaroid-user?s=duotone image-polaroid-user}
 * @preview ![image-polaroid-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/image-polaroid-user.svg)
 */
const ImagePolaroidUser: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm64 32c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-16 0-224 0-16 0c-17.7 0-32-14.3-32-32l0-192z" />
        <path d="M96 96c-17.7 0-32 14.3-32 32l0 192c0 17.7 14.3 32 32 32l16 0c0-35.3 28.7-64 64-64l96 0c35.3 0 64 28.7 64 64l16 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32L96 96zm64 96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default ImagePolaroidUser;