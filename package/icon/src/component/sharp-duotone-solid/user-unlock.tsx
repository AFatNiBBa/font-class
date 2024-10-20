
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-unlock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-unlock?s=sharp-duotone-solid user-unlock}
 * @preview ![user-unlock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-unlock.svg)
 */
const UserUnlock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 512l384 0 0-208L64 304 0 512zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128z" />
        <path d="M528 240c-17.7 0-32 14.3-32 32l0 48 16 0 48 0 48 0 32 0 0 192-224 0 0-192 32 0 0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l-48 0c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default UserUnlock;