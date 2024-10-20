
import { Icon } from "../../index";

/**
 * A component that renders the `user-plus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-plus?s=sharp-thin user-plus}
 * @preview ![user-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-plus.svg)
 */
const UserPlus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 16a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 240A128 128 0 1 0 224 0a128 128 0 1 0 0 256zM75.8 320l296.4 0 54.2 176L21.7 496 75.8 320zM384 304L64 304 4.9 496 0 512l16.7 0 414.5 0 16.7 0-4.9-16L384 304zM536 112l-16 0 0 8 0 80-80 0-8 0 0 16 8 0 80 0 0 80 0 8 16 0 0-8 0-80 80 0 8 0 0-16-8 0-80 0 0-80 0-8z" />
    </Icon>
);

export default UserPlus;