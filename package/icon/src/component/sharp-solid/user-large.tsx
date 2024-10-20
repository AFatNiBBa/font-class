
import { Icon } from "../../index";

/**
 * A component that renders the `user-large` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large?s=sharp-solid user-large}
 * @preview ![user-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-large.svg)
 */
const UserLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 288A144 144 0 1 0 256 0a144 144 0 1 0 0 288zM512 512L432 320 80 320 0 512l512 0z" />
    </Icon>
);

export default UserLarge;