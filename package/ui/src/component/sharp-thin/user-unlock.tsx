
import { Icon } from "../../index";

/**
 * A component that renders the `user-unlock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-unlock?s=sharp-thin user-unlock}
 * @preview ![user-unlock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-unlock.svg)
 */
const UserUnlock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 240a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM75.8 320L21.7 496 384 496l0 16L16.7 512 0 512l4.9-16L64 304l320 0 0 54.4L372.2 320 75.8 320zM480 256l0 64 32 0 64 0 16 0 32 0 16 0 0 16 0 160 0 16-16 0-192 0-16 0 0-16 0-160 0-16 16 0 32 0 0-64c0-35.3 28.7-64 64-64s64 28.7 64 64l0 16-16 0 0-16c0-26.5-21.5-48-48-48s-48 21.5-48 48zm-16 80l-32 0 0 160 192 0 0-160-32 0-16 0-96 0-16 0z" />
    </Icon>
);

export default UserUnlock;