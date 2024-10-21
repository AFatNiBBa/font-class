
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list-music` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-music?s=sharp-duotone-solid list-music}
 * @preview ![list-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/list-music.svg)
 */
const ListMusic: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64l32 0 224 0 32 0 0 64-32 0L32 128 0 128 0 64zM0 192l32 0 224 0 32 0 0 64-32 0L32 256 0 256l0-64zM0 320l32 0 96 0 32 0 0 64-32 0-96 0L0 384l0-64z" />
        <path d="M512 44.8L512 .4l-42.1 14-96 32L352 53.7l0 23.1 0 64 0 218.9c-14.5-4.9-30.8-7.7-48-7.7c-61.9 0-112 35.8-112 80s50.1 80 112 80s112-35.8 112-80l0-268.1 74.1-24.7 21.9-7.3 0-23.1 0-64z" />
    </Icon>
);

export default ListMusic;