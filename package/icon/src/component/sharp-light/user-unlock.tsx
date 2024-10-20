
import { Icon } from "../../index";

/**
 * A component that renders the `user-unlock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-unlock?s=sharp-light user-unlock}
 * @preview ![user-unlock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-unlock.svg)
 */
const UserUnlock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 224a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM87.6 336L43.3 480 384 480l0 32L33.5 512 0 512l9.8-32L64 304l320 0 0 108.8L360.4 336 87.6 336zM480 272l0 48 32 0 64 0 32 0 32 0 0 32 0 128 0 32-32 0-160 0-32 0 0-32 0-128 0-32 32 0 0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l-32 0c0-26.5-21.5-48-48-48s-48 21.5-48 48zM448 480l160 0 0-128-160 0 0 128z" />
    </Icon>
);

export default UserUnlock;