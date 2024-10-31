
import { Icon } from "../../index";

/**
 * A component that renders the `user-pen` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-pen?s=sharp-regular user-pen}
 * @preview ![user-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-pen.svg)
 */
const UserPen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM99.5 352L65 464l259.4 0-6.9 48L50.2 512 0 512l14.8-48L64 304l160 0 160 0 14.2 46.2-38.4 38.4L348.5 352 99.5 352zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zm473 95.8l71 71-41.3 41.3-71-71L569 223.8zm-63.9 63.9l71 71L434.9 500 352 511.9 363.9 429 505.1 287.8z" />
    </Icon>
);

export default UserPen;