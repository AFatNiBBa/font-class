
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-cells` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-cells?s=duotone diagram-cells}
 * @preview ![diagram-cells](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/diagram-cells.svg)
 */
const DiagramCells: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 352l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288c-35.3 0-64 28.7-64 64z" />
        <path d="M448 224c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l384 0z" />
    </Icon>
);

export default DiagramCells;