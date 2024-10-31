
import { Icon } from "../../index";

/**
 * A component that renders the `user-large` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large?s=sharp-thin user-large}
 * @preview ![user-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-large.svg)
 */
const UserLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 144a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zm-272 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zM24 496l464 0L421.3 336 90.7 336 24 496zM80 320l352 0 73.3 176 6.7 16-17.3 0L17.3 512 0 512l6.7-16L80 320z" />
    </Icon>
);

export default UserLarge;