
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-nurse-hair` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-nurse-hair?s=sharp-duotone-solid user-nurse-hair}
 * @preview ![user-nurse-hair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-nurse-hair.svg)
 */
const UserNurseHair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M97 176l127 0 64-32 32 16 32 0c0 70.7-57.3 128-128 128c-65.3 0-119.1-48.9-127-112z" />
        <path d="M224 176l64-32 32 16 32 0 0-112L224 0 96 48l0 128 128 0zM208 64l0-24 32 0 0 24 24 0 0 32-24 0 0 24-32 0 0-24-24 0 0-32 24 0zm16 360L126.1 320 64 320 0 512l448 0L384 320l-62.1 0L224 424z" />
    </Icon>
);

export default UserNurseHair;