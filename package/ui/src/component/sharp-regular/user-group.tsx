
import { Icon } from "../../index";

/**
 * A component that renders the `user-group` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-group?s=sharp-regular user-group}
 * @preview ![user-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-group.svg)
 */
const UserGroup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 304L53.6 337.9l-34.5 112L14.8 464 0 512l50.2 0L65 512l318 0 14.8 0 50.2 0-14.8-48-4.3-14.1-34.5-112L384 304l-35.5 0L224 304 99.5 304 64 304zM332.8 464l-217.6 0L65 464l14.8-48 19.7-64 249.1 0 19.7 64L383 464l-50.2 0zM352 128A128 128 0 1 0 96 128a128 128 0 1 0 256 0zm-208 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM640 512L576 320l-153.6 0 56.2 182.6 2.9 9.4L640 512zM432 256c61.9 0 112-50.1 112-112s-50.1-112-112-112c-24.8 0-47.7 8.1-66.3 21.7C377.4 75.9 384 101.2 384 128c0 35.6-11.6 68.5-31.3 95.1C373 243.4 401 256 432 256z" />
    </Icon>
);

export default UserGroup;