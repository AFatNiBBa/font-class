
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-cells` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-cells?s=sharp-duotone-solid diagram-cells}
 * @preview ![diagram-cells](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/diagram-cells.svg)
 */
const DiagramCells: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288L0 480l512 0 0-192L0 288z" />
        <path d="M512 224V32L0 32 0 224l512 0z" />
    </Icon>
);

export default DiagramCells;