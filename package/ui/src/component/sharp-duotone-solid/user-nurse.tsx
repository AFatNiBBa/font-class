
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-nurse` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-nurse?s=sharp-duotone-solid user-nurse}
 * @preview ![user-nurse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-nurse.svg)
 */
const UserNurse: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 160l256 0c0 70.7-57.3 128-128 128s-128-57.3-128-128z" />
        <path d="M96 96l0-48L224 0 352 48l0 48 0 32 0 32L96 160l0-32 0-32zm30.1 224L224 424l97.9-104 62.1 0 64 192L0 512 64 320l62.1 0zM208 64l-24 0 0 32 24 0 0 24 32 0 0-24 24 0 0-32-24 0 0-24-32 0 0 24z" />
    </Icon>
);

export default UserNurse;