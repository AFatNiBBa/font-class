
import { Icon } from "../../index";

/**
 * A component that renders the `music` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music?s=sharp-solid music}
 * @preview ![music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/music.svg)
 */
const Music: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 5l0 43 0 72 0 248c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L448 163 192 239.8 192 432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L128 216l0-72 0-23.8 22.8-6.8 320-96L512 5z" />
    </Icon>
);

export default Music;