
import { Icon } from "../../index";

/**
 * A component that renders the `image-user` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-user?s=sharp-thin image-user}
 * @preview ![image-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/image-user.svg)
 */
const ImageUser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 48l0 416 480 0 0-416L16 48zM0 32l16 0 480 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM304 192a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM166.2 368l179.6 0-21.3-64-136.9 0-21.3 64zM336 288l26.7 80 5.3 16-16.9 0-190.3 0L144 384l5.3-16L176 288l160 0zM256 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default ImageUser;