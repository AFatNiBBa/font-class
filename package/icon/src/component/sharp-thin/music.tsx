
import { Icon } from "../../index";

/**
 * A component that renders the `music` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music?s=sharp-thin music}
 * @preview ![music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/music.svg)
 */
const Music: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 5.2L512 16l0 112 0 240s0 0 0 0c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c33.4 0 62.8 14.2 80 35.8L496 139 192 237.8 192 432s0 0 0 0c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c33.4 0 62.8 14.2 80 35.8L176 232l0-120 0-6 5.7-1.7 320-96L512 5.2zM496 368c0-32.7-33-64-80-64s-80 31.3-80 64s33 64 80 64s80-31.3 80-64c0 0 0 0 0 0zM96 368c-47 0-80 31.3-80 64s33 64 80 64s80-31.3 80-64c0 0 0 0 0 0c0-32.7-33-64-80-64zm96-147l304-98.8 0-95.4L192 118l0 103z" />
    </Icon>
);

export default Music;