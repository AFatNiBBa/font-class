
import { Icon } from "../../index";

/**
 * A component that renders the `user-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-slash?s=sharp-solid user-slash}
 * @preview ![user-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-slash.svg)
 */
const UserSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M544 512l-16 0L264 304l-104 0L96 512l448 0s0 0 0 0zM353.4 251.6C407.9 236.9 448 187.1 448 128C448 57.3 390.7 0 320 0C249.9 0 192.9 56.4 192 126.3L48.4 14.8 29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L353.4 251.6z" />
    </Icon>
);

export default UserSlash;