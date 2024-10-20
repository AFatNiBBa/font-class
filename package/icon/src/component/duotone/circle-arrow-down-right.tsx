
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-down-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down-right?s=duotone circle-arrow-down-right}
 * @preview ![circle-arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-arrow-down-right.svg)
 */
const CircleArrowDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144-88c0-6.1 2.3-12.3 7-17s10.8-7 17-7s12.3 2.3 17 7l135 135L320 184c0-13.3 10.7-24 24-24s24 10.7 24 24l0 160c0 13.3-10.7 24-24 24l-152 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l94.1 0L151 185c-4.7-4.7-7-10.8-7-17z" />
        <path d="M344 368l-152 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l94.1 0L151 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l135 135L320 184c0-13.3 10.7-24 24-24s24 10.7 24 24l0 160c0 13.3-10.7 24-24 24z" />
    </Icon>
);

export default CircleArrowDownRight;