
import { Icon } from "../../index";

/**
 * A component that renders the `user-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-check?s=sharp-light user-check}
 * @preview ![user-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-check.svg)
 */
const UserCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224A128 128 0 1 0 224 0a128 128 0 1 0 0 256zM87.6 336l272.7 0 44.3 144L43.3 480 87.6 336zM384 304L64 304 9.8 480 0 512l33.5 0 381 0 33.5 0-9.8-32L384 304zM627.3 187.3L638.6 176 616 153.4l-11.3 11.3L488 281.4l-52.7-52.7L424 217.4 401.4 240l11.3 11.3 64 64L488 326.6l11.3-11.3 128-128z" />
    </Icon>
);

export default UserCheck;