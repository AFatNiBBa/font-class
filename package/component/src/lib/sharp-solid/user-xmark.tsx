
import { Icon } from "../../index";

/**
 * A component that renders the `user-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-xmark?s=sharp-solid user-xmark}
 * @preview ![user-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-xmark.svg)
 */
const UserXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM384 304l64 208L0 512 64 304l320 0zM633.9 160l-17 17-47 47 47 47 17 17L600 321.9l-17-17-47-47-47 47-17 17L438.1 288l17-17 47-47-47-47-17-17L472 126.1l17 17 47 47 47-47 17-17L633.9 160z" />
    </Icon>
);

export default UserXmark;