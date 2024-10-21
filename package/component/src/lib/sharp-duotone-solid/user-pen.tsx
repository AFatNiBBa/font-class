
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-pen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-pen?s=sharp-duotone-solid user-pen}
 * @preview ![user-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-pen.svg)
 */
const UserPen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 512l317.4 0L331 417.4l67.2-67.2L384 304 64 304 0 512zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128z" />
        <path d="M640 294.8l-71-71-41.3 41.3 71 71L640 294.8zm-63.9 63.9l-71-71L363.9 429 352 511.9 434.9 500 576.1 358.7z" />
    </Icon>
);

export default UserPen;