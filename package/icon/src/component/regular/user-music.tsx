
import { Icon } from "../../index";

/**
 * A component that renders the `user-music` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-music?s=regular user-music}
 * @preview ![user-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-music.svg)
 */
const UserMusic: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM49.3 464L288 464s0 0 0 0c0 19.1 7.7 35.4 18.9 48L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304l45.7 0 45.7 0c36.3 0 70.1 10.9 98.3 29.5l0 51.6c-3.2 .4-6.5 1-9.6 1.7C335.1 365.2 304 352 269.7 352l-91.4 0c-65.7 0-120.1 48.7-129 112zM630 164.5c6.3 4.5 10 11.8 10 19.5l0 48 0 160c0 1.2-.1 2.4-.3 3.6c.2 1.5 .3 2.9 .3 4.4c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48c5.5 0 10.9 .5 16 1.5l0-88.2-144 48L448 464c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48c5.5 0 10.9 .5 16 1.5L400 296l0-48c0-10.3 6.6-19.5 16.4-22.8l192-64c7.3-2.4 15.4-1.2 21.6 3.3z" />
    </Icon>
);

export default UserMusic;