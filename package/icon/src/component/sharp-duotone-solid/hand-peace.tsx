
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-peace` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-peace?s=sharp-duotone-solid hand-peace}
 * @preview ![hand-peace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-peace.svg)
 */
const HandPeace: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M30 66.1L42.8 95.4 106.1 240l69.9 0L101.5 69.8 88.6 40.5 30 66.1zM64 272l0 91c0 33.9 13.5 66.5 37.5 90.5l11.6 11.6c30 30 70.7 46.9 113.1 46.9l61.7 0c88.4 0 160-71.6 160-160l-96 0 0-32-64 0 0 48 0 16-16 0-112 0-16 0 0-32 16 0 96 0 0-32 0-48-66.1 0-69.9 0L64 272zM192 0l0 240 64 0L256 0 192 0z" />
        <path d="M352 160l-64 0 0 128 64 0 0-128zm96 32l-64 0 0 128 64 0 0-128z" />
    </Icon>
);

export default HandPeace;