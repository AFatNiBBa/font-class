
import { Icon } from "../../index";

/**
 * A component that renders the `user-large-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large-slash?s=sharp-light user-large-slash}
 * @preview ![user-large-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-large-slash.svg)
 */
const UserLargeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M541 512l-40.5-32L112 480l53.3-128 173 0-40.5-32L144 320 77.3 480 64 512l34.7 0L541 512zM464 144C464 64.5 399.5 0 320 0C265.6 0 218.2 30.2 193.7 74.8l25.6 20.2C237.5 57.7 275.7 32 320 32c61.9 0 112 50.1 112 112c0 34.9-15.9 66-40.9 86.6l25.6 20.2C445.7 224.4 464 186.3 464 144zM40.4 18L27.8 8.1 8.1 33.4l12.6 9.8L599.8 494.3l12.6 9.8 19.7-25.2L619.5 469 40.4 18z" />
    </Icon>
);

export default UserLargeSlash;