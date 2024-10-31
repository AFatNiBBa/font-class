
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-helmet-safety` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-helmet-safety?s=sharp-duotone-solid user-helmet-safety}
 * @preview ![user-helmet-safety](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-helmet-safety.svg)
 */
const UserHelmetSafety: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 192c0 70.7 57.3 128 128 128s128-57.3 128-128c0-5.4-.3-10.8-1-16L97 176c-.7 5.2-1 10.6-1 16z" />
        <path d="M256 0L192 0l0 80L163.6 23.1C125.6 43.5 99 82.6 96.2 128l-.2 0-24 0 0 48 24 0 256 0 24 0 0-48-24 0-.2 0C349 82.6 322.4 43.5 284.4 23.1L256 80l0-80zM400 352L48 352 0 512l448 0L400 352z" />
    </Icon>
);

export default UserHelmetSafety;