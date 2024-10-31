
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-tie` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tie?s=sharp-duotone-solid user-tie}
 * @preview ![user-tie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-tie.svg)
 */
const UserTie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M352 128A128 128 0 1 1 96 128a128 128 0 1 1 256 0z" />
        <path d="M176 304l33.1 55.2L175.8 483.1 135.8 320 64 320 0 512l168 0 14.9 0 82.3 0 14.9 0 168 0L384 320l-71.8 0L272.2 483.1 238.9 359.2 272 304l-48 0-48 0z" />
    </Icon>
);

export default UserTie;