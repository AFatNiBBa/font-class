
import { Icon } from "../../index";

/**
 * A component that renders the `user-large-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large-slash?s=light user-large-slash}
 * @preview ![user-large-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-large-slash.svg)
 */
const UserLargeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M541 512l-40.5-32L96 480c.7-70.8 58.3-128 129.3-128l113 0-40.5-32-72.5 0C136.2 320 64 392.2 64 481.3c0 17 13.8 30.7 30.7 30.7L541 512zM464 144C464 64.5 399.5 0 320 0C265.6 0 218.2 30.2 193.7 74.8l25.6 20.2C237.5 57.7 275.7 32 320 32c61.9 0 112 50.1 112 112c0 34.9-15.9 66-40.9 86.6l25.6 20.2C445.7 224.4 464 186.3 464 144zM25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4z" />
    </Icon>
);

export default UserLargeSlash;