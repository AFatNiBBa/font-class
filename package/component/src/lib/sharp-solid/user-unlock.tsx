
import { Icon } from "../../index";

/**
 * A component that renders the `user-unlock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-unlock?s=sharp-solid user-unlock}
 * @preview ![user-unlock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-unlock.svg)
 */
const UserUnlock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 128A128 128 0 1 0 96 128a128 128 0 1 0 256 0zm32 384l0-208s0 0 0 0L64 304 0 512l384 0zM496 272c0-17.7 14.3-32 32-32s32 14.3 32 32l48 0c0-44.2-35.8-80-80-80s-80 35.8-80 80l0 48-32 0 0 192 224 0 0-192-32 0-48 0-48 0-16 0 0-48z" />
    </Icon>
);

export default UserUnlock;