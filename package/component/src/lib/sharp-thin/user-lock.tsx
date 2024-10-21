
import { Icon } from "../../index";

/**
 * A component that renders the `user-lock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-lock?s=sharp-thin user-lock}
 * @preview ![user-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-lock.svg)
 */
const UserLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M112 128a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm240 0A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM21.7 496L75.8 320l296.4 0L384 358.4l0-54.4L64 304 4.9 496 0 512l16.7 0L384 512l0-16L21.7 496zM528 208c26.5 0 48 21.5 48 48l0 64-96 0 0-64c0-26.5 21.5-48 48-48zm-64 48l0 64-32 0-16 0 0 16 0 160 0 16 16 0 192 0 16 0 0-16 0-160 0-16-16 0-32 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-32 80l32 0 16 0 96 0 16 0 32 0 0 160-192 0 0-160z" />
    </Icon>
);

export default UserLock;