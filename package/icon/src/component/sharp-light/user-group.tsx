
import { Icon } from "../../index";

/**
 * A component that renders the `user-group` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-group?s=sharp-light user-group}
 * @preview ![user-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-group.svg)
 */
const UserGroup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224A128 128 0 1 0 224 0a128 128 0 1 0 0 256zM87.6 336l272.7 0 44.3 144L43.3 480 87.6 336zM384 304L64 304 9.8 480 0 512l33.5 0 381 0 33.5 0-9.8-32L384 304zM606.3 512l33.7 0-10.7-32L576 320l-153.6 0 9.8 32 120.7 0 42.7 128-124 0 7 22.6 2.9 9.4 124.8 0zM432 256c61.9 0 112-50.1 112-112s-50.1-112-112-112c-24.8 0-47.7 8.1-66.3 21.7c5.2 9.8 9.3 20.3 12.4 31.2C392.3 71.9 411.2 64 432 64c44.2 0 80 35.8 80 80s-35.8 80-80 80c-25.2 0-47.6-11.6-62.3-29.8c-4.7 10.3-10.4 19.9-17 28.9C373 243.4 401 256 432 256z" />
    </Icon>
);

export default UserGroup;