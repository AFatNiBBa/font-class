
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-cells` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-cells?s=solid diagram-cells}
 * @preview ![diagram-cells](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/diagram-cells.svg)
 */
const DiagramCells: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 160c0 35.3-28.7 64-64 64L64 224c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 64zM448 416l0-64L64 352l0 64 384 0zm0 64L64 480c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default DiagramCells;