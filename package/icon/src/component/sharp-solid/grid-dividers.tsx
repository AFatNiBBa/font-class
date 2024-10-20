
import { Icon } from "../../index";

/**
 * A component that renders the `grid-dividers` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-dividers?s=sharp-solid grid-dividers}
 * @preview ![grid-dividers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/grid-dividers.svg)
 */
const GridDividers: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 48L0 48 0 0zM160 96l0 128L32 224 32 96l128 0zm0 288l0 128L32 512l0-128 128 0zM192 96l128 0 0 128-128 0 0-128zM320 384l0 128-128 0 0-128 128 0zM352 96l128 0 0 128-128 0 0-128zM480 384l0 128-128 0 0-128 128 0zm32-96l0 48L0 336l0-48 512 0z" />
    </Icon>
);

export default GridDividers;