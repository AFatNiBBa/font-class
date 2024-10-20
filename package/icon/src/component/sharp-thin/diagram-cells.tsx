
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-cells` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-cells?s=sharp-thin diagram-cells}
 * @preview ![diagram-cells](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/diagram-cells.svg)
 */
const DiagramCells: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 208L16 208 16 48l480 0 0 160zm16 16l0-16 0-160 0-16-16 0L16 32 0 32 0 48 0 208l0 16 16 0 480 0 16 0zm0 248l0-176 0-8-8 0L8 288l-8 0 0 8L0 472l0 8 8 0 496 0 8 0 0-8zM16 464l0-160 480 0 0 160L16 464z" />
    </Icon>
);

export default DiagramCells;