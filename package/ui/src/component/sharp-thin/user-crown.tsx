
import { Icon } from "../../index";

/**
 * A component that renders the `user-crown` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-crown?s=sharp-thin user-crown}
 * @preview ![user-crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-crown.svg)
 */
const UserCrown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M279.1 49.9l7.4-3.3 49.5-22 0 87.4-224 0 0-87.4 49.5 22 7.4 3.3 7-4L224 18.4l48.1 27.5 7 4zM336 128l0 16c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-16 224 0zM336 7.1L280 32 224 0 168 32 112 7.1 96 0l0 17.5L96 144c0 70.7 57.3 128 128 128s128-57.3 128-128l0-126.5L352 0 336 7.1zM75.8 320l296.4 0 54.2 176L21.7 496 75.8 320zM384 304L64 304 4.9 496 0 512l16.7 0 414.5 0 16.7 0-4.9-16L384 304z" />
    </Icon>
);

export default UserCrown;