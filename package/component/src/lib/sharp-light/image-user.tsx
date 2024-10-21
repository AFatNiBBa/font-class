
import { Icon } from "../../index";

/**
 * A component that renders the `image-user` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-user?s=sharp-light image-user}
 * @preview ![image-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/image-user.svg)
 */
const ImageUser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64l0 384 448 0 0-384L32 64zM0 32l32 0 448 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM288 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM188.4 352l135.2 0-10.7-32-113.9 0-10.7 32zM336 288l21.3 64L368 384l-33.7 0-156.5 0L144 384l10.7-32L176 288l80 0 80 0zM256 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default ImageUser;