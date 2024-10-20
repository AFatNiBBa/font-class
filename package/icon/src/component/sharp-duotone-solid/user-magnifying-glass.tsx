
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-magnifying-glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-magnifying-glass?s=sharp-duotone-solid user-magnifying-glass}
 * @preview ![user-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-magnifying-glass.svg)
 */
const UserMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 512l448 0-9.9-32.3C354.3 474.6 288 405 288 320c0-5.4 .3-10.7 .8-16L64 304 0 512zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128z" />
        <path d="M528 320.1a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM520 426c-20.5 14-45.3 22.1-72 22.1c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9l63 62.6 17 16.9-33.8 34-17-16.9L520 426z" />
    </Icon>
);

export default UserMagnifyingGlass;