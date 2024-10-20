
import { Icon } from "../../index";

/**
 * A component that renders the `user-unlock` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-unlock?s=solid user-unlock}
 * @preview ![user-unlock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/user-unlock.svg)
 */
const UserUnlock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0c43.6 0 83.6 15.7 114.6 41.7c-.2 2.1-.3 4.2-.3 6.3l0 128c0 11.7 3.1 22.6 8.6 32L29.7 512C13.3 512 0 498.7 0 482.3zM496 272l0 48 16 0 48 0 48 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l-48 0c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
    </Icon>
);

export default UserUnlock;