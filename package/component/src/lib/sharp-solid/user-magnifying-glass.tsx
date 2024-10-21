
import { Icon } from "../../index";

/**
 * A component that renders the `user-magnifying-glass` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-magnifying-glass?s=sharp-solid user-magnifying-glass}
 * @preview ![user-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-magnifying-glass.svg)
 */
const UserMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zM448 512l-9.9-32.3C354.3 474.6 288 405 288 320c0-5.4 .3-10.7 .8-16L64 304 0 512l448 0zm0-271.9a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 208c26.7 0 51.5-8.2 72-22.1l63.1 62.7 17 16.9 33.8-34-17-16.9-63-62.6c13.9-20.5 22.1-45.3 22.1-71.9c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128z" />
    </Icon>
);

export default UserMagnifyingGlass;