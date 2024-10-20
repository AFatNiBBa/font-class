
import { Icon } from "../../index";

/**
 * A component that renders the `user-group-simple` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-group-simple?s=sharp-thin user-group-simple}
 * @preview ![user-group-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-group-simple.svg)
 */
const UserGroupSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M72 136a88 88 0 1 1 176 0A88 88 0 1 1 72 136zm192 0A104 104 0 1 0 56 136a104 104 0 1 0 208 0zm128 0a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm192 0a104 104 0 1 0 -208 0 104 104 0 1 0 208 0zM75.5 304l168.9 0 53.3 160L22.2 464 75.5 304zM256 288L64 288 5.3 464 0 480l16.9 0 286.3 0 16.9 0-5.3-16L256 288zm86.2 16l275.6 0L564.5 464l-168.9 0L342.2 304zM384 480l192 0 58.7-176 5.3-16-16.9 0-286.3 0L320 288l5.3 16L384 480z" />
    </Icon>
);

export default UserGroupSimple;