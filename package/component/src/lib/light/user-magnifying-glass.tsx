
import { Icon } from "../../index";

/**
 * A component that renders the `user-magnifying-glass` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-magnifying-glass?s=light user-magnifying-glass}
 * @preview ![user-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-magnifying-glass.svg)
 */
const UserMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 80l91.4 0c6.5 0 12.9 .4 19.2 1.2c-.6-5.7-.9-11.4-.9-17.2c0-5.1 .2-10.1 .7-15c-6.2-.7-12.6-1-19-1l-91.4 0C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7c0-.8 0-1.5 0-2.3l-32 0-224 0L32 480c1.2-79.7 66.2-144 146.3-144zM448 224.1a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224c29.6 0 56.8-10 78.5-26.9l86.2 86.2c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-86.2-86.2C566 377 576 349.7 576 320.2c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128z" />
    </Icon>
);

export default UserMagnifyingGlass;