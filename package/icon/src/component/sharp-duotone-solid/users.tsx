
import { Icon, generic } from "../../index";

/**
 * A component that renders the `users` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users?s=sharp-duotone-solid users}
 * @preview ![users](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/users.svg)
 */
const Users: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 320L48 192l148 0c-2.6 10.2-4 21-4 32c0 38.2 16.8 72.5 43.3 96L0 320zM224 80A80 80 0 1 1 64 80a80 80 0 1 1 160 0zM404.7 320c26.6-23.5 43.3-57.8 43.3-96c0-11-1.4-21.8-4-32l148 0 48 128-235.3 0zM592 80A80 80 0 1 1 432 80a80 80 0 1 1 160 0z" />
        <path d="M320 320a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM512 512L464 352l-288 0L128 512l384 0z" />
    </Icon>
);

export default Users;