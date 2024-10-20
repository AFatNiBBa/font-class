
import { Icon } from "../../index";

/**
 * A component that renders the `user-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-check?s=sharp-solid user-check}
 * @preview ![user-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-check.svg)
 */
const UserCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM384 304l64 208L0 512 64 304l320 0zM617 177L489 305l-17 17-17-17-64-64-17-17L408 190.1l17 17 47 47L583 143l17-17L633.9 160l-17 17z" />
    </Icon>
);

export default UserCheck;