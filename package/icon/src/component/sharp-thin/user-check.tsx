
import { Icon } from "../../index";

/**
 * A component that renders the `user-check` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-check?s=sharp-thin user-check}
 * @preview ![user-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-check.svg)
 */
const UserCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 16a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 240A128 128 0 1 0 224 0a128 128 0 1 0 0 256zM75.8 320l296.4 0 54.2 176L21.7 496 75.8 320zM384 304L64 304 4.9 496 0 512l16.7 0 414.5 0 16.7 0-4.9-16L384 304zM629.7 149.7l5.7-5.7L624 132.7l-5.7 5.7L496 260.7l-58.3-58.3-5.7-5.7L420.7 208l5.7 5.7 64 64 5.7 5.7 5.7-5.7 128-128z" />
    </Icon>
);

export default UserCheck;