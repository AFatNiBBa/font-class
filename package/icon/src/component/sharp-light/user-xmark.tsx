
import { Icon } from "../../index";

/**
 * A component that renders the `user-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-xmark?s=sharp-light user-xmark}
 * @preview ![user-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-xmark.svg)
 */
const UserXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM43.3 480l361.3 0L360.4 336 87.6 336 43.3 480zM384 304l54.2 176 9.8 32-33.5 0-381 0L0 512l9.8-32L64 304l320 0zM224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM479.4 136.8l11.3 11.3L544 201.4l53.3-53.3 11.3-11.3 22.6 22.6-11.3 11.3L566.6 224l53.3 53.3 11.3 11.3-22.6 22.6-11.3-11.3L544 246.6l-53.3 53.3-11.3 11.3-22.6-22.6 11.3-11.3L521.4 224l-53.3-53.3-11.3-11.3 22.6-22.6z" />
    </Icon>
);

export default UserXmark;