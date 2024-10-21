
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-simple?s=duotone chart-simple}
 * @preview ![chart-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chart-simple.svg)
 */
const ChartSimple: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352z" />
        <path d="M368 96c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0zM48 224c-26.5 0-48 21.5-48 48L0 432c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48l-32 0z" />
    </Icon>
);

export default ChartSimple;