
import { Icon, generic } from "../../index";

/**
 * A component that renders the `laptop-arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-arrow-down?s=sharp-duotone-solid laptop-arrow-down}
 * @preview ![laptop-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/laptop-arrow-down.svg)
 */
const LaptopArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 384l0 48 48 48 544 0 48-48 0-48L0 384zM64 32l0 32 0 288 64 0 0-256 168 0 0-64L96 32 64 32zm280 0l0 64 168 0 0 256 64 0 0-288 0-32-32 0L344 32z" />
        <path d="M296 96L128 96l0 256 384 0 0-256L344 96l0 110.1 39-39 17-17L433.9 184l-17 17-80 80-17 17-17-17-80-80-17-17L240 150.1l17 17 39 39L296 96z" />
    </Icon>
);

export default LaptopArrowDown;