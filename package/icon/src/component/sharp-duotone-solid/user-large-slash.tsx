
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-large-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large-slash?s=sharp-duotone-solid user-large-slash}
 * @preview ![user-large-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-large-slash.svg)
 */
const UserLargeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 512l512 0-48 0L284.3 320 144 320 64 512zM178.7 116L382.2 273.9C430.6 250.7 464 201.3 464 144C464 64.5 399.5 0 320 0C250.1 0 191.8 49.9 178.7 116z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default UserLargeSlash;