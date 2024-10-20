
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-group-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-group-simple?s=sharp-duotone-solid user-group-simple}
 * @preview ![user-group-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-group-simple.svg)
 */
const UserGroupSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M320 288l64 192 192 0 64-192-320 0zm56-152a104 104 0 1 0 208 0 104 104 0 1 0 -208 0z" />
        <path d="M160 240a104 104 0 1 0 0-208 104 104 0 1 0 0 208zM320 480L256 288 64 288 0 480l320 0z" />
    </Icon>
);

export default UserGroupSimple;