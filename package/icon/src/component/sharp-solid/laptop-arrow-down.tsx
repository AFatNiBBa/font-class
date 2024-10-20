
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-arrow-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-arrow-down?s=sharp-solid laptop-arrow-down}
 * @preview ![laptop-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/laptop-arrow-down.svg)
 */
const LaptopArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 32L64 32l0 32 0 288 64 0 0-256 128 0 0-64L96 32zM512 96l0 256 64 0 0-288 0-32-32 0L384 32l0 64 128 0zM0 384l0 48 48 48 544 0 48-48 0-48L0 384zM344 56l0-24-48 0 0 24 0 182.1-39-39-17-17L206.1 216l17 17 80 80 17 17 17-17 80-80 17-17L400 182.1l-17 17-39 39L344 56z" />
    </Icon>
);

export default LaptopArrowDown;