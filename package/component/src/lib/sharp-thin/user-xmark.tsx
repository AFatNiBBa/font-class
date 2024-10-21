
import { Icon } from "../../index";

/**
 * A component that renders the `user-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-xmark?s=sharp-thin user-xmark}
 * @preview ![user-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-xmark.svg)
 */
const UserXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 16a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 240A128 128 0 1 0 224 0a128 128 0 1 0 0 256zM75.8 320l296.4 0 54.2 176L21.7 496 75.8 320zM384 304L64 304 4.9 496 0 512l16.7 0 414.5 0 16.7 0-4.9-16L384 304zm73.8-177.5l-11.3 11.3 5.7 5.7L516.7 208l-64.6 64.6-5.7 5.7 11.3 11.3 5.7-5.7L528 219.3l64.6 64.6 5.7 5.7 11.3-11.3-5.7-5.7L539.3 208l64.6-64.6 5.7-5.7-11.3-11.3-5.7 5.7L528 196.7l-64.6-64.6-5.7-5.7z" />
    </Icon>
);

export default UserXmark;