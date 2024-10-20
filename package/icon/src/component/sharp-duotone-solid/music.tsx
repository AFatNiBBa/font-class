
import { Icon, generic } from "../../index";

/**
 * A component that renders the `music` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music?s=sharp-duotone-solid music}
 * @preview ![music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/music.svg)
 */
const Music: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 120.2l0 23.8 0 72 0 140.6c37.3 11 64 40.6 64 75.4l0-192.2L448 163l0 129.5c37.3 11 64 40.6 64 75.4l0-248 0-72 0-43L470.8 17.4l-320 96L128 120.2z" />
        <path d="M416 448c53 0 96-35.8 96-80s-43-80-96-80s-96 35.8-96 80s43 80 96 80zM96 512c53 0 96-35.8 96-80s-43-80-96-80s-96 35.8-96 80s43 80 96 80z" />
    </Icon>
);

export default Music;