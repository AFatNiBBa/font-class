
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-up?s=duotone turn-up}
 * @preview ![turn-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/turn-up.svg)
 */
const TurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 448l0 32c0 17.7 14.3 32 32 32l96 0c61.9 0 112-50.1 112-112l0-208c-32 0-64 0-96 0l0 208c0 8.8-7.2 16-16 16l-96 0c-17.7 0-32 14.3-32 32z" />
        <path d="M345.4 151.5c6.6 7 8.4 17.2 4.6 26s-12.5 14.5-22 14.5L56 192c-9.6 0-18.2-5.7-22-14.5s-2-19 4.6-26l136-144C179.1 2.7 185.4 0 192 0s12.9 2.7 17.4 7.5l136 144z" />
    </Icon>
);

export default TurnUp;