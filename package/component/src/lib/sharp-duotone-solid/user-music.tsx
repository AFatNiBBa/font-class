
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-music` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-music?s=sharp-duotone-solid user-music}
 * @preview ![user-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-music.svg)
 */
const UserMusic: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 512l307.1 0c-11.3-12.6-19.1-29-19.1-48.2c0-25.6 13.9-46.3 31.5-59.5c13.7-10.2 30.5-16.9 48.5-19.4l0-80.9L64 304 0 512zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128z" />
        <path d="M640 185.3l0-33.3-31.6 10.5-192 64L400 232l0 17.3 0 48 0 120.3c-5.1-1-10.5-1.5-16-1.5c-35.3 0-64 21.5-64 48s28.7 48 64 48c32.5 0 59.3-18.1 63.4-41.6c.4-1.7 .6-3.4 .6-5.2l0-1.2 0-149.5 144-48 0 87c-5.1-1-10.5-1.5-16-1.5c-35.3 0-64 21.5-64 48s28.7 48 64 48s64-21.5 64-48c0-1.3-.1-2.5-.2-3.7c.1-1 .2-2 .2-3l0-160 0-48z" />
    </Icon>
);

export default UserMusic;