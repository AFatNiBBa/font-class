
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-slash?s=sharp-duotone-solid user-slash}
 * @preview ![user-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-slash.svg)
 */
const UserSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 512l448 0-16 0L264 304l-104 0L96 512zm96-385.7L353.4 251.6C407.9 236.9 448 187.1 448 128C448 57.3 390.7 0 320 0C249.9 0 192.9 56.4 192 126.3z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default UserSlash;