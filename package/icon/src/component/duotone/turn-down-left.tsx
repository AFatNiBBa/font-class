
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-down-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down-left?s=duotone turn-down-left}
 * @preview ![turn-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/turn-down-left.svg)
 */
const TurnDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 240l208 0c8.8 0 16-7.2 16-16l0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160c0 61.9-50.1 112-112 112l-208 0 0-96z" />
        <path d="M151.5 441.4c7 6.6 17.2 8.4 26 4.6s14.5-12.5 14.5-22l0-272c0-9.6-5.7-18.2-14.5-22s-19-2-26 4.6l-144 136C2.7 275.1 0 281.4 0 288s2.7 12.9 7.5 17.4l144 136z" />
    </Icon>
);

export default TurnDownLeft;