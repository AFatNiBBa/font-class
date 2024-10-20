
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-pie-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pie-simple?s=sharp-duotone-solid chart-pie-simple}
 * @preview ![chart-pie-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-pie-simple.svg)
 */
const ChartPieSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 272C0 404.6 107.5 512 240 512c127.2 0 231.2-98.9 239.5-224L224 288l0-255.5C98.9 40.8 0 144.8 0 272z" />
        <path d="M272 240H511.4c.4-5.3 .6-10.6 .6-16C512 100.3 411.7 0 288 0c-5.4 0-10.7 .2-16 .6V240z" />
    </Icon>
);

export default ChartPieSimple;