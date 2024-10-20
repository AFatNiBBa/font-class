
import { Icon } from "../../index";

/**
 * A component that renders the `list-music` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-music?s=sharp-solid list-music}
 * @preview ![list-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/list-music.svg)
 */
const ListMusic: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 .4l0 44.4 0 64 0 23.1-21.9 7.3L416 163.9 416 432c0 44.2-50.1 80-112 80s-112-35.8-112-80s50.1-80 112-80c17.2 0 33.5 2.8 48 7.7l0-218.9 0-64 0-23.1 21.9-7.3 96-32L512 .4zM32 64l224 0 32 0 0 64-32 0L32 128 0 128 0 64l32 0zm0 128l224 0 32 0 0 64-32 0L32 256 0 256l0-64 32 0zm0 128l96 0 32 0 0 64-32 0-96 0L0 384l0-64 32 0z" />
    </Icon>
);

export default ListMusic;