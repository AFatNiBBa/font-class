
import { Icon } from "../../index";

/**
 * A component that renders the `user-helmet-safety` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-helmet-safety?s=sharp-solid user-helmet-safety}
 * @preview ![user-helmet-safety](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-helmet-safety.svg)
 */
const UserHelmetSafety: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M256 0L192 0l0 80L163.6 23.1C125.6 43.5 99 82.6 96.2 128l-.2 0-24 0 0 48 24 0 256 0 24 0 0-48-24 0-.2 0C349 82.6 322.4 43.5 284.4 23.1L256 80l0-80zM224 320c65.3 0 119.1-48.9 127-112L97 208c7.9 63.1 61.7 112 127 112zM448 512L400 352 48 352 0 512l448 0z" />
    </Icon>
);

export default UserHelmetSafety;