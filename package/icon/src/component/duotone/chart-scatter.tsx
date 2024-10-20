
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-scatter` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-scatter?s=duotone chart-scatter}
 * @preview ![chart-scatter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chart-scatter.svg)
 */
const ChartScatter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64c0-17.7-14.3-32-32-32S0 46.3 0 64z" />
        <path d="M384 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM160 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-224 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default ChartScatter;