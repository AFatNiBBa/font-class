
import { Icon } from "../../index";

/**
 * A component that renders the `user-tie` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tie?s=sharp-regular user-tie}
 * @preview ![user-tie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-tie.svg)
 */
const UserTie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm128-80A128 128 0 1 1 96 128a128 128 0 1 1 256 0zM209.1 359.2L176 304l48 0 48 0-33.1 55.2 15.9 59.2L304 320l80 0 48 144 16 48-50.6 0L280 512l-18.3 0-75.3 0L168 512 50.6 512 0 512l16-48L64 320l80 0 49.2 98.4 15.9-59.2zM381.4 464l-32-96-15.7 0-48 96 95.7 0zM114.3 368l-15.7 0-32 96 95.7 0-48-96z" />
    </Icon>
);

export default UserTie;