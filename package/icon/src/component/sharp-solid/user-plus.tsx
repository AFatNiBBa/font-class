
import { Icon } from "../../index";

/**
 * A component that renders the `user-plus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-plus?s=sharp-solid user-plus}
 * @preview ![user-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-plus.svg)
 */
const UserPlus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM384 304l64 208L0 512 64 304l320 0zm120 32l0-24 0-64-64 0-24 0 0-48 24 0 64 0 0-64 0-24 48 0 0 24 0 64 64 0 24 0 0 48-24 0-64 0 0 64 0 24-48 0z" />
    </Icon>
);

export default UserPlus;