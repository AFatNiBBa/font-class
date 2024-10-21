
import { Icon } from "../../index";

/**
 * A component that renders the `users` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users?s=sharp-solid users}
 * @preview ![users](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/users.svg)
 */
const Users: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM48 192l148 0c-2.6 10.2-4 21-4 32c0 38.2 16.8 72.5 43.3 96L0 320 48 192zM640 320l-235.3 0c26.6-23.5 43.3-57.8 43.3-96c0-11-1.4-21.8-4-32l148 0 48 128zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM464 352l48 160-384 0 48-160 288 0z" />
    </Icon>
);

export default Users;