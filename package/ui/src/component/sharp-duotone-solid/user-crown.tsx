
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-crown` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-crown?s=sharp-duotone-solid user-crown}
 * @preview ![user-crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-crown.svg)
 */
const UserCrown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 128l32 0 16 0 160 0 16 0 32 0c0 70.7-57.3 128-128 128s-128-57.3-128-128z" />
        <path d="M96 53.7L96 0l48 24 16 8L224 0l64 32 16-8L352 0l0 53.7L352 80l0 48-32 0-16 0-160 0-16 0-32 0 0-48 0-26.3zM384 304l64 208L0 512 64 304l320 0z" />
    </Icon>
);

export default UserCrown;