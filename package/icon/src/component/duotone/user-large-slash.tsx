
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-large-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large-slash?s=duotone user-large-slash}
 * @preview ![user-large-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-large-slash.svg)
 */
const UserLargeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 481.3c0 17 13.8 30.7 30.7 30.7l450.8 0L528 512 284.3 320l-59 0C136.2 320 64 392.2 64 481.3zM178.9 114.9C246.6 168 314.3 221 381.9 274c48.5-23.2 82.1-72.7 82.1-130C464 64.5 399.5 0 320 0C250.4 0 192.4 49.3 178.9 114.9z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default UserLargeSlash;