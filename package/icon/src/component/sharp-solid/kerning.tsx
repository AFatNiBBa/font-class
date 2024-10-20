
import { Icon } from "../../index";

/**
 * A component that renders the `kerning` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kerning?s=sharp-solid kerning}
 * @preview ![kerning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/kerning.svg)
 */
const Kerning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M201.3 489.6l208-480 29.4 12.7-208 480-29.4-12.7zM419.6 352l-27.2 64-69.5 0L450.5 115.5 458.8 96l42.3 0 8.3 19.5L637.2 416l-69.5 0-27.2-64-120.9 0zm93.7-64L480 209.8 446.8 288l66.5 0zM317.2 96L189.4 396.5 181.2 416l-42.3 0-8.3-19.5L2.8 96l69.5 0L160 302.2 247.6 96l69.5 0z" />
    </Icon>
);

export default Kerning;