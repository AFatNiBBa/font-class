
import { Icon } from "../../index";

/**
 * A component that renders the `user-music` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-music?s=sharp-regular user-music}
 * @preview ![user-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-music.svg)
 */
const UserMusic: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM65 464l223 0c0 19.1 7.8 35.4 19.1 48L50.2 512 0 512l14.8-48L64 304l304 0 0 80.9c-3 .4-5.9 .9-8.8 1.6L348.5 352 99.5 352 65 464zM640 152l0 33.3 0 48 0 160c0 1-.1 2.1-.2 3c.1 1.2 .2 2.5 .2 3.7c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48c5.5 0 10.9 .5 16 1.5l0-87-144 48 0 149.5 0 1.2c0 1.8-.2 3.5-.6 5.2c-4.2 23.5-31 41.6-63.4 41.6c-35.3 0-64-21.5-64-48s28.7-48 64-48c5.5 0 10.9 .5 16 1.5l0-120.3 0-48 0-17.3 16.4-5.5 192-64L640 152z" />
    </Icon>
);

export default UserMusic;