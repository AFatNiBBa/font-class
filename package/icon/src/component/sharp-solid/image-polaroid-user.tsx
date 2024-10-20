
import { Icon } from "../../index";

/**
 * A component that renders the `image-polaroid-user` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-polaroid-user?s=sharp-solid image-polaroid-user}
 * @preview ![image-polaroid-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/image-polaroid-user.svg)
 */
const ImagePolaroidUser: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 448L0 480 0 32zM64 96l0 256 56 0 24-64 160 0 24 64 56 0 0-256L64 96zm96 96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default ImagePolaroidUser;