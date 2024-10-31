
import { Icon } from "../../index";

/**
 * A component that renders the `user-group` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-group?s=sharp-solid user-group}
 * @preview ![user-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-group.svg)
 */
const UserGroup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM384 304l64 208L0 512 64 304l320 0zM640 512l-158.5 0-2.9-9.4L422.4 320 576 320l64 192zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
    </Icon>
);

export default UserGroup;