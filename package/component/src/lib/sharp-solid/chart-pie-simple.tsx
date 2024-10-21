
import { Icon } from "../../index";

/**
 * A component that renders the `chart-pie-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pie-simple?s=sharp-solid chart-pie-simple}
 * @preview ![chart-pie-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-pie-simple.svg)
 */
const ChartPieSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M511.4 240L272 240 272 .6c5.3-.4 10.6-.6 16-.6C411.7 0 512 100.3 512 224c0 5.4-.2 10.7-.6 16zM0 272C0 144.8 98.9 40.8 224 32.5L224 288l255.5 0C471.2 413.1 367.2 512 240 512C107.5 512 0 404.6 0 272z" />
    </Icon>
);

export default ChartPieSimple;