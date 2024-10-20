
import { Icon } from "../../index";

/**
 * A component that renders the `grid-dividers` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-dividers?s=sharp-regular grid-dividers}
 * @preview ![grid-dividers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/grid-dividers.svg)
 */
const GridDividers: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 48L0 48 0 0zM80 144l0 32 32 0 0-32-32 0zM32 96l48 0 32 0 48 0 0 48 0 32 0 48-48 0-32 0-48 0 0-48 0-32 0-48zM80 432l0 32 32 0 0-32-32 0zM32 384l48 0 32 0 48 0 0 48 0 32 0 48-48 0-32 0-48 0 0-48 0-32 0-48zM272 144l-32 0 0 32 32 0 0-32zM240 96l32 0 48 0 0 48 0 32 0 48-48 0-32 0-48 0 0-48 0-32 0-48 48 0zm0 336l0 32 32 0 0-32-32 0zm-48-48l48 0 32 0 48 0 0 48 0 32 0 48-48 0-32 0-48 0 0-48 0-32 0-48zM432 144l-32 0 0 32 32 0 0-32zM400 96l32 0 48 0 0 48 0 32 0 48-48 0-32 0-48 0 0-48 0-32 0-48 48 0zm0 336l0 32 32 0 0-32-32 0zm-48-48l48 0 32 0 48 0 0 48 0 32 0 48-48 0-32 0-48 0 0-48 0-32 0-48zm160-96l0 48L0 336l0-48 512 0z" />
    </Icon>
);

export default GridDividers;