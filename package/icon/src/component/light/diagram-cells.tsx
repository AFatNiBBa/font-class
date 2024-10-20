
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-cells` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-cells?s=light diagram-cells}
 * @preview ![diagram-cells](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/diagram-cells.svg)
 */
const DiagramCells: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 160c0 17.7-14.3 32-32 32L64 192c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 64zm-32 64c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l384 0zm64 192l0-64c0-35.3-28.7-64-64-64L64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64zm-64 32L64 448c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32z" />
    </Icon>
);

export default DiagramCells;