
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-caret-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-left?s=duotone circle-caret-left}
 * @preview ![circle-caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-caret-left.svg)
 */
const CircleCaretLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144 0c0-6.7 2.8-13 7.7-17.6l112-104c4.5-4.2 10.4-6.4 16.3-6.4c3.2 0 6.5 .7 9.6 2c8.7 3.8 14.4 12.5 14.4 22l0 208c0 9.5-5.7 18.2-14.4 22c-3.1 1.3-6.3 2-9.6 2c-5.9 0-11.8-2.2-16.3-6.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6z" />
        <path d="M151.7 238.4c-4.9 4.5-7.7 10.9-7.7 17.6s2.8 13 7.7 17.6l112 104c7 6.5 17.2 8.2 25.9 4.4s14.4-12.5 14.4-22l0-208c0-9.5-5.7-18.2-14.4-22s-18.9-2.1-25.9 4.4l-112 104z" />
    </Icon>
);

export default CircleCaretLeft;