
import { Icon } from "../../index";

/**
 * A component that renders the `user-large` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large?s=solid user-large}
 * @preview ![user-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/user-large.svg)
 */
const UserLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 288A144 144 0 1 0 256 0a144 144 0 1 0 0 288zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7l450.6 0c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320l-189.4 0z" />
    </Icon>
);

export default UserLarge;