
import { Icon } from "../../index";

/**
 * A component that renders the `music` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music?s=sharp-light music}
 * @preview ![music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/music.svg)
 */
const Music: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 24l0-21.5L491.4 8.7l-320 96L160 108.1l0 11.9 0 120 0 132.4C143 359.7 120.6 352 96 352c-53 0-96 35.8-96 80s43 80 96 80s96-35.8 96-80c0 0 0 0 0 0l0-180.4L480 158l0 150.3c-17-12.7-39.4-20.4-64-20.4c-53 0-96 35.8-96 80s43 80 96 80s96-35.8 96-80c0 0 0 0 0 0l0-232 0-112zM480 368s0 0 0 0c0 21.3-22.9 48-64 48s-64-26.7-64-48s22.9-48 64-48s64 26.7 64 48zM160 432s0 0 0 0c0 21.3-22.9 48-64 48s-64-26.7-64-48s22.9-48 64-48s64 26.7 64 48zM480 124.4L192 218l0-86.1L480 45.5l0 78.9z" />
    </Icon>
);

export default Music;