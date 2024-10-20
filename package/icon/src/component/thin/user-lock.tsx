
import { Icon } from "../../index";

/**
 * A component that renders the `user-lock` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-lock?s=thin user-lock}
 * @preview ![user-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-lock.svg)
 */
const UserLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M112 128a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm240 0A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM16 482.3C16 392.7 88.7 320 178.3 320l91.4 0c44.6 0 85 18 114.3 47.1l0-15.1c0-2.1 .1-4.2 .3-6.3c-31-26-71-41.7-114.6-41.7l-91.4 0C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l362.8 0c-2.9-5-5.1-10.3-6.5-16L29.7 496c-7.6 0-13.7-6.1-13.7-13.7zM528 208c26.5 0 48 21.5 48 48l0 64-96 0 0-64c0-26.5 21.5-48 48-48zm-64 48l0 64-16 0c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-16 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-16 80l16 0 16 0 96 0 16 0 16 0c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default UserLock;