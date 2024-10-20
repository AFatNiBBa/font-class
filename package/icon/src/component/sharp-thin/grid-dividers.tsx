
import { Icon } from "../../index";

/**
 * A component that renders the `grid-dividers` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-dividers?s=sharp-thin grid-dividers}
 * @preview ![grid-dividers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/grid-dividers.svg)
 */
const GridDividers: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 16L0 16 0 0zM48 112l0 96 96 0 0-96-96 0zM32 96l16 0 96 0 16 0 0 16 0 96 0 16-16 0-96 0-16 0 0-16 0-96 0-16zM48 400l0 96 96 0 0-96-96 0zM32 384l16 0 96 0 16 0 0 16 0 96 0 16-16 0-96 0-16 0 0-16 0-96 0-16zM304 112l-96 0 0 96 96 0 0-96zM208 96l96 0 16 0 0 16 0 96 0 16-16 0-96 0-16 0 0-16 0-96 0-16 16 0zm0 304l0 96 96 0 0-96-96 0zm-16-16l16 0 96 0 16 0 0 16 0 96 0 16-16 0-96 0-16 0 0-16 0-96 0-16zM464 112l-96 0 0 96 96 0 0-96zM368 96l96 0 16 0 0 16 0 96 0 16-16 0-96 0-16 0 0-16 0-96 0-16 16 0zm0 304l0 96 96 0 0-96-96 0zm-16-16l16 0 96 0 16 0 0 16 0 96 0 16-16 0-96 0-16 0 0-16 0-96 0-16zm160-96l0 16L0 304l0-16 512 0z" />
    </Icon>
);

export default GridDividers;