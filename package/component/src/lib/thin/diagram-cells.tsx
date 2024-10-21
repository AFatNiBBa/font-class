
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-cells` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-cells?s=thin diagram-cells}
 * @preview ![diagram-cells](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/diagram-cells.svg)
 */
const DiagramCells: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 160c0 26.5-21.5 48-48 48L64 208c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48l0 64zm-48 64c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l384 0zm64 192l0-64c0-35.3-28.7-64-64-64L64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64zm-64 48L64 464c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48z" />
    </Icon>
);

export default DiagramCells;