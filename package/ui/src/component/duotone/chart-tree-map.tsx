
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-tree-map` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-tree-map?s=duotone chart-tree-map}
 * @preview ![chart-tree-map](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chart-tree-map.svg)
 */
const ChartTreeMap: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320L0 432c0 26.5 21.5 48 48 48l128 0c26.5 0 48-21.5 48-48l0-112c0-26.5-21.5-48-48-48L48 272c-26.5 0-48 21.5-48 48zm256-80l0 32c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-32c0-26.5-21.5-48-48-48l-160 0c-26.5 0-48 21.5-48 48z" />
        <path d="M0 80C0 53.5 21.5 32 48 32l128 0c26.5 0 48 21.5 48 48l0 112c0 26.5-21.5 48-48 48L48 240c-26.5 0-48-21.5-48-48L0 80zm256 0c0-26.5 21.5-48 48-48l160 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-32zm48 272l160 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-32c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default ChartTreeMap;