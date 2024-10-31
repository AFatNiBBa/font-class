
import { Icon } from "../../index";

/**
 * A component that renders the `user-group-simple` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-group-simple?s=sharp-regular user-group-simple}
 * @preview ![user-group-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-group-simple.svg)
 */
const UserGroupSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M104 136a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm160 0A104 104 0 1 0 56 136a104 104 0 1 0 208 0zm216 88a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM98.6 336l122.8 0 32 96L66.6 432l32-96zM256 288L64 288 16 432 0 480l50.6 0 218.8 0 50.6 0-16-48L256 288zm384 0l-320 0 64 192 192 0 64-192z" />
    </Icon>
);

export default UserGroupSimple;