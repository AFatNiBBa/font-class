
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line-down` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line-down?s=light chart-line-down}
 * @preview ![chart-line-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chart-line-down.svg)
 */
const ChartLineDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48L0 400c0 44.2 35.8 80 80 80l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 448c-26.5 0-48-21.5-48-48L32 48zM320 336c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 89.4L331.3 180.7c-6.2-6.2-16.4-6.2-22.6 0L224 265.4 123.3 164.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l112 112c6.2 6.2 16.4 6.2 22.6 0L320 214.6 425.4 320 336 320c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default ChartLineDown;