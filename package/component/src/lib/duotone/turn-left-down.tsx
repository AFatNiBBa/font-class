
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-left-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-left-down?s=duotone turn-left-down}
 * @preview ![turn-left-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/turn-left-down.svg)
 */
const TurnLeftDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M152 128l0 192 96 0 0-192c0-17.7 14.3-32 32-32l80 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L280 0C209.3 0 152 57.3 152 128z" />
        <path d="M46.5 360.5c-6.6-7-8.4-17.2-4.6-26s12.5-14.5 22-14.5l272 0c9.6 0 18.2 5.7 22 14.5s2 19-4.6 26l-136 144c-4.5 4.8-10.8 7.5-17.4 7.5s-12.9-2.7-17.4-7.5l-136-144z" />
    </Icon>
);

export default TurnLeftDown;