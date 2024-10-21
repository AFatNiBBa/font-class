
import { Icon } from "../../index";

/**
 * A component that renders the `user-vneck` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-vneck?s=sharp-regular user-vneck}
 * @preview ![user-vneck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-vneck.svg)
 */
const UserVneck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm88.1 330.6l3.6 5.4L65 464 99.5 352l13.5 0 71.1 106.6zM219.6 512l8.7 0 169.4 0 50.2 0-14.8-48L384 304l-74.7 0-56.5 84.7L224 432l-28.8-43.3L138.7 304 64 304 14.8 464 0 512l50.2 0 169.4 0zm40.7-48l3.6-5.4L335 352l13.5 0L383 464l-122.7 0z" />
    </Icon>
);

export default UserVneck;