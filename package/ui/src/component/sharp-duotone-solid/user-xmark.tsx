
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-xmark?s=sharp-duotone-solid user-xmark}
 * @preview ![user-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-xmark.svg)
 */
const UserXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 512l448 0L384 304 64 304 0 512zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128z" />
        <path d="M617 177l17-17L600 126.1l-17 17-47 47-47-47-17-17L438.1 160l17 17 47 47-47 47-17 17L472 321.9l17-17 47-47 47 47 17 17L633.9 288l-17-17-47-47 47-47z" />
    </Icon>
);

export default UserXmark;