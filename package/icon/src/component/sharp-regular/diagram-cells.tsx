
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-cells` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-cells?s=sharp-regular diagram-cells}
 * @preview ![diagram-cells](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/diagram-cells.svg)
 */
const DiagramCells: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 224l0-192L0 32 0 224l512 0zM464 336l0 96-96 0-224 0-96 0 0-96 416 0zm48 96l0-96 0-48-48 0L48 288 0 288l0 48 0 96 0 48 48 0 416 0 48 0 0-48z" />
    </Icon>
);

export default DiagramCells;