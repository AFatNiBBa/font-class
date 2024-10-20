
import { Icon } from "../../index";

/**
 * A component that renders the `fill` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fill?s=sharp-regular fill}
 * @preview ![fill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/fill.svg)
 */
const Fill: typeof Icon = x => (
    <Icon {...x}>
        <path d="M33.9 305.9L0 272l33.9-33.9L127 145 39 57l-17-17L56 6.1 73 23l88 88 77.1-77.1L272 0l33.9 33.9L478.1 206.1 512 240l-33.9 33.9L273.9 478.1 240 512l-33.9-33.9L33.9 305.9zm127-127L67.9 272l16 16 312.2 0 48-48L272 67.9 194.9 145 225 175l17 17L208 225.9l-17-17L161 178.9z" />
    </Icon>
);

export default Fill;