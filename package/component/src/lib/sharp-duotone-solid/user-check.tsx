
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-check?s=sharp-duotone-solid user-check}
 * @preview ![user-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-check.svg)
 */
const UserCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 512l448 0L384 304 64 304 0 512zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128z" />
        <path d="M633.9 160l-17 17L489 305l-17 17-17-17-64-64-17-17L408 190.1l17 17 47 47L583 143l17-17L633.9 160z" />
    </Icon>
);

export default UserCheck;