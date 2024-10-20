
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-left?s=duotone turn-left}
 * @preview ![turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/turn-left.svg)
 */
const TurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 176l0 96 192 0c17.7 0 32 14.3 32 32l0 144c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-144c0-70.7-57.3-128-128-128l-192 0z" />
        <path d="M151.5 70.6c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 272c0 9.6-5.7 18.2-14.5 22s-19 2-26-4.6l-144-136C2.7 236.9 0 230.6 0 224s2.7-12.9 7.5-17.4l144-136z" />
    </Icon>
);

export default TurnLeft;