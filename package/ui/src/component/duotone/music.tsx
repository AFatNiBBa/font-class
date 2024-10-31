
import { Icon, generic } from "../../index";

/**
 * A component that renders the `music` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music?s=duotone music}
 * @preview ![music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/music.svg)
 */
const Music: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 128l0 72 0 156.6c37.3 11 64 40.6 64 75.4l0-208.2L448 147l0 145.5c37.3 11 64 40.6 64 75.4l0-264 0-72c0-10.1-4.8-19.6-12.9-25.7C493.5 2.2 486.8 0 480 0c-3.1 0-6.2 .4-9.2 1.3l-320 96C137.3 101.4 128 113.9 128 128z" />
        <path d="M416 448c53 0 96-35.8 96-80s-43-80-96-80s-96 35.8-96 80s43 80 96 80zM96 512c53 0 96-35.8 96-80s-43-80-96-80s-96 35.8-96 80s43 80 96 80z" />
    </Icon>
);

export default Music;