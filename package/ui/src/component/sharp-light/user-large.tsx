
import { Icon } from "../../index";

/**
 * A component that renders the `user-large` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large?s=sharp-light user-large}
 * @preview ![user-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-large.svg)
 */
const UserLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 144a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zM48 480l416 0L410.7 352l-309.3 0L48 480zM80 320l352 0 66.7 160L512 512l-34.7 0L34.7 512 0 512l13.3-32L80 320z" />
    </Icon>
);

export default UserLarge;