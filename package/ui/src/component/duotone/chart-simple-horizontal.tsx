
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-simple-horizontal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-simple-horizontal?s=duotone chart-simple-horizontal}
 * @preview ![chart-simple-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chart-simple-horizontal.svg)
 */
const ChartSimpleHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 240l0 32c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-32c0-26.5-21.5-48-48-48L48 192c-26.5 0-48 21.5-48 48z" />
        <path d="M384 112c0 26.5-21.5 48-48 48L48 160c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l288 0c26.5 0 48 21.5 48 48l0 32zM256 432c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-32c0-26.5 21.5-48 48-48l160 0c26.5 0 48 21.5 48 48l0 32z" />
    </Icon>
);

export default ChartSimpleHorizontal;