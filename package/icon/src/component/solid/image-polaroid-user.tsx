
import { Icon } from "../../index";

/**
 * A component that renders the `image-polaroid-user` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-polaroid-user?s=solid image-polaroid-user}
 * @preview ![image-polaroid-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/image-polaroid-user.svg)
 */
const ImagePolaroidUser: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 32l0 192c0 17.7 14.3 32 32 32l16 0c0-35.3 28.7-64 64-64l96 0c35.3 0 64 28.7 64 64l16 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32zm96 64a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default ImagePolaroidUser;