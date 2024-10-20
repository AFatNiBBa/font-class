
import { Icon } from "../../index";

/**
 * A component that renders the `user-large-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large-slash?s=sharp-solid user-large-slash}
 * @preview ![user-large-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-large-slash.svg)
 */
const UserLargeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 512l-48 0L284.3 320 144 320 64 512l512 0s0 0 0 0zM382.2 273.9C430.6 250.7 464 201.3 464 144C464 64.5 399.5 0 320 0C250.1 0 191.8 49.9 178.7 116L48.4 14.8 29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L382.2 273.9z" />
    </Icon>
);

export default UserLargeSlash;