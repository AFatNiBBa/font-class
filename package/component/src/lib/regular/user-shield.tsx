
import { Icon } from "../../index";

/**
 * A component that renders the `user-shield` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-shield?s=regular user-shield}
 * @preview ![user-shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-shield.svg)
 */
const UserShield: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM49.3 464l325.4 0c13.2 17.2 29.3 33.4 48.9 47.5c-1.7 .3-3.5 .5-5.3 .5L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304l45.7 0 45.7 0c17.6 0 34.6 2.6 50.7 7.3c.9 16.6 3.4 35.3 8.3 54.8c-17.7-9-37.8-14.1-59-14.1l-91.4 0c-65.7 0-120.1 48.7-129 112zM487.1 225.7c5.7-2.3 12.1-2.3 17.8 0l120 48C634 277.4 640 286.2 640 296c0 63.3-25.9 168.8-134.8 214.2c-5.9 2.5-12.6 2.5-18.5 0C377.9 464.8 352 359.3 352 296c0-9.8 6-18.6 15.1-22.3l120-48zM591.4 312L496 273.8l0 187.8c68.2-33 91.5-99 95.4-149.7z" />
    </Icon>
);

export default UserShield;