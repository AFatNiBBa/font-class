
import { Icon } from "../../index";

/**
 * A component that renders the `user-minus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-minus?s=sharp-light user-minus}
 * @preview ![user-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-minus.svg)
 */
const UserMinus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224A128 128 0 1 0 224 0a128 128 0 1 0 0 256zM87.6 336l272.7 0 44.3 144L43.3 480 87.6 336zM384 304L64 304 9.8 480 0 512l33.5 0 381 0 33.5 0-9.8-32L384 304zm48-80l-16 0 0 32 16 0 192 0 16 0 0-32-16 0-192 0z" />
    </Icon>
);

export default UserMinus;