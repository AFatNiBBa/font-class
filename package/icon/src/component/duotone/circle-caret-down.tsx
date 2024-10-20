
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-caret-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-down?s=duotone circle-caret-down}
 * @preview ![circle-caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-caret-down.svg)
 */
const CircleCaretDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-24c0-3.2 .7-6.5 2-9.6c3.8-8.7 12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4c1.3 3.1 2 6.3 2 9.6c0 5.9-2.2 11.8-6.4 16.3l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7s-13-2.8-17.6-7.7l-104-112c-4.2-4.5-6.4-10.4-6.4-16.3z" />
        <path d="M273.6 360.3c-4.5 4.9-10.9 7.7-17.6 7.7s-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112z" />
    </Icon>
);

export default CircleCaretDown;