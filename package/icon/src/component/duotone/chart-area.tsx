
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-area` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-area?s=duotone chart-area}
 * @preview ![chart-area](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chart-area.svg)
 */
const ChartArea: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64c0-17.7-14.3-32-32-32S0 46.3 0 64z" />
        <path d="M448 352H160c-17.7 0-32-14.3-32-32V236c0-7.8 2.8-15.2 7.9-21.1l79.4-90.8c13-14.8 36.1-14.5 48.7 .6l39.2 47c9 10.8 25.4 11.6 35.4 1.6l21-21c13.2-13.2 34.8-12.4 46.9 1.8L472.3 231c5 5.8 7.7 13.2 7.7 20.8V320c0 17.7-14.3 32-32 32z" />
    </Icon>
);

export default ChartArea;