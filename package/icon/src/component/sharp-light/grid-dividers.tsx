
import { Icon } from "../../index";

/**
 * A component that renders the `grid-dividers` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-dividers?s=sharp-light grid-dividers}
 * @preview ![grid-dividers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/grid-dividers.svg)
 */
const GridDividers: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 32L0 32 0 0zM64 128l0 64 64 0 0-64-64 0zM32 96l32 0 64 0 32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-64 0-32zM64 416l0 64 64 0 0-64-64 0zM32 384l32 0 64 0 32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-64 0-32zM288 128l-64 0 0 64 64 0 0-64zM224 96l64 0 32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-64 0-32 32 0zm0 320l0 64 64 0 0-64-64 0zm-32-32l32 0 64 0 32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-64 0-32zM448 128l-64 0 0 64 64 0 0-64zM384 96l64 0 32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-64 0-32 32 0zm0 320l0 64 64 0 0-64-64 0zm-32-32l32 0 64 0 32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-64 0-32zm160-96l0 32L0 320l0-32 512 0z" />
    </Icon>
);

export default GridDividers;