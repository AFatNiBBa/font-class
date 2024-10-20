
import { Icon } from "../../index";

/**
 * A component that renders the `chart-tree-map` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-tree-map?s=sharp-solid chart-tree-map}
 * @preview ![chart-tree-map](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-tree-map.svg)
 */
const ChartTreeMap: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l224 0 0 208L0 240 0 32zM0 272l224 0 0 208L0 480 0 272zM512 32l0 128-256 0 0-128 256 0zM256 192l256 0 0 128-256 0 0-128zM512 352l0 128-256 0 0-128 256 0z" />
    </Icon>
);

export default ChartTreeMap;