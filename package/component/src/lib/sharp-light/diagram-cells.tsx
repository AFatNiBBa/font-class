
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-cells` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-cells?s=sharp-light diagram-cells}
 * @preview ![diagram-cells](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/diagram-cells.svg)
 */
const DiagramCells: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 192L32 192 32 64l448 0 0 128zm32 32l0-32 0-128 0-32-32 0L32 32 0 32 0 64 0 192l0 32 32 0 448 0 32 0zm0 240l0-160 0-16-16 0L16 288 0 288l0 16L0 464l0 16 16 0 480 0 16 0 0-16zM32 448l0-128 448 0 0 128L32 448z" />
    </Icon>
);

export default DiagramCells;