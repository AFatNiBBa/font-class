
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-large` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large?s=duotone user-large}
 * @preview ![user-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-large.svg)
 */
const UserLarge: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M112 144a144 144 0 1 0 288 0 144 144 0 1 0 -288 0z" />
        <path d="M0 481.3C0 392.2 72.2 320 161.3 320H350.7C439.8 320 512 392.2 512 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3z" />
    </Icon>
);

export default UserLarge;