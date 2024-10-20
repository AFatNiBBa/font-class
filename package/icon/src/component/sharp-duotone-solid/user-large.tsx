
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-large` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large?s=sharp-duotone-solid user-large}
 * @preview ![user-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-large.svg)
 */
const UserLarge: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M112 144a144 144 0 1 0 288 0 144 144 0 1 0 -288 0z" />
        <path d="M80 320H432l80 192H0L80 320z" />
    </Icon>
);

export default UserLarge;