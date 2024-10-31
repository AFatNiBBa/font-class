
import { Icon } from "../../index";

/**
 * A component that renders the `user-large-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large-slash?s=sharp-regular user-large-slash}
 * @preview ![user-large-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-large-slash.svg)
 */
const UserLargeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 512l-48 0-60.9-48L136 464l40-96 169.2 0-60.9-48L144 320 84 464 64 512l52 0 408 0 52 0s0 0 0 0zM382.2 273.9C430.6 250.7 464 201.3 464 144C464 64.5 399.5 0 320 0C250.1 0 191.8 49.9 178.7 116L48.4 14.8 29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L382.2 273.9zm-45.5-35.4L224.3 151.4c-.2-2.4-.3-4.9-.3-7.4c0-53 43-96 96-96s96 43 96 96c0 47.4-34.3 86.7-79.4 94.6z" />
    </Icon>
);

export default UserLargeSlash;