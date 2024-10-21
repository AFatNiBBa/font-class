
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-cells` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-cells?s=sharp-solid diagram-cells}
 * @preview ![diagram-cells](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/diagram-cells.svg)
 */
const DiagramCells: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 32l0 192L0 224 0 32l512 0zM448 416l0-64L64 352l0 64 384 0zm64 64l-64 0L64 480 0 480l0-64 0-64 0-64 64 0 384 0 64 0 0 64 0 64 0 64z" />
    </Icon>
);

export default DiagramCells;