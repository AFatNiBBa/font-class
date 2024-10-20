
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-tree-map` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-tree-map?s=sharp-duotone-solid chart-tree-map}
 * @preview ![chart-tree-map](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-tree-map.svg)
 */
const ChartTreeMap: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 272L0 480l224 0 0-208L0 272zm256-80l0 128 256 0 0-128-256 0z" />
        <path d="M0 32l224 0 0 208L0 240 0 32zm256 0l256 0 0 128-256 0 0-128zM512 352l0 128-256 0 0-128 256 0z" />
    </Icon>
);

export default ChartTreeMap;