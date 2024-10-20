
import { Icon } from "../../index";

/**
 * A component that renders the `user-group-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-group-simple?s=sharp-solid user-group-simple}
 * @preview ![user-group-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-group-simple.svg)
 */
const UserGroupSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 32a104 104 0 1 1 0 208 104 104 0 1 1 0-208zm320 0a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM256 288l64 192L0 480 64 288l192 0zm384 0L576 480l-192 0L320 288l320 0z" />
    </Icon>
);

export default UserGroupSimple;