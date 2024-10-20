
import { Icon } from "../../index";

/**
 * A component that renders the `user-tie` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tie?s=sharp-solid user-tie}
 * @preview ![user-tie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-tie.svg)
 */
const UserTie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2L176 304l48 0 48 0-33.1 55.2 33.4 123.9L312.2 320l71.8 0 64 192-168 0-14.9 0-82.3 0L168 512 0 512 64 320l71.8 0 39.9 163.1 33.4-123.9z" />
    </Icon>
);

export default UserTie;