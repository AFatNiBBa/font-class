
import { Icon } from "../../index";

/**
 * A component that renders the `user-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-slash?s=sharp-thin user-slash}
 * @preview ![user-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-slash.svg)
 */
const UserSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M528.1 512l-20.3-16-390.1 0 54.2-176 113.1 0-20.3-16L160 304 100.9 496 96 512l16.7 0 414.5 0 .8 0zM448 128C448 57.3 390.7 0 320 0c-51 0-95 29.8-115.6 73l12.9 10.2C234.6 43.6 274.1 16 320 16c61.9 0 112 50.1 112 112c0 36.6-17.5 69-44.6 89.5l12.9 10.2C429.4 204.2 448 168.3 448 128zM16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5z" />
    </Icon>
);

export default UserSlash;