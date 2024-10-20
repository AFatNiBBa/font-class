
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user?s=sharp-duotone-solid user}
 * @preview ![user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user.svg)
 */
const User: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128z" />
        <path d="M64 304H384l64 208H0L64 304z" />
    </Icon>
);

export default User;