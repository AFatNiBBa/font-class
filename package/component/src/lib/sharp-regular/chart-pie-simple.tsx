
import { Icon } from "../../index";

/**
 * A component that renders the `chart-pie-simple` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pie-simple?s=sharp-regular chart-pie-simple}
 * @preview ![chart-pie-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chart-pie-simple.svg)
 */
const ChartPieSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M511.4 240c.4-5.3 .6-10.6 .6-16C512 100.3 411.7 0 288 0c-5.4 0-10.7 .2-16 .6L272 240l239.4 0zM176 288l0 48 48 0 197.1 0C394.7 410.6 323.6 464 240 464C134 464 48 378 48 272c0-83.6 53.4-154.7 128-181.1L176 288zm303.5 0l-48.1 0L272 288l-48 0 0-48 0-159.3 0-48.1c-16.5 1.1-32.6 3.8-48 8.1C74.5 68.6 0 161.6 0 272C0 404.6 107.5 512 240 512c110.4 0 203.4-74.5 231.4-176c4.3-15.4 7-31.5 8.1-48z" />
    </Icon>
);

export default ChartPieSimple;