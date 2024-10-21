
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-chevron-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-down?s=duotone circle-chevron-down}
 * @preview ![circle-chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-chevron-down.svg)
 */
const CircleChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-32c0-6.1 2.3-12.3 7-17s10.8-7 17-7s12.3 2.3 17 7l87 87 87-87c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7s7 10.8 7 17s-2.3 12.3-7 17L273 345c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7L135 241c-4.7-4.7-7-10.8-7-17z" />
        <path d="M239 345c9.4 9.4 24.6 9.4 33.9 0L377 241c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-87 87-87-87c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 345z" />
    </Icon>
);

export default CircleChevronDown;