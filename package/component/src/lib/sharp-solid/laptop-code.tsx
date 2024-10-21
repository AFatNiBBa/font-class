
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-code` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-code?s=sharp-solid laptop-code}
 * @preview ![laptop-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/laptop-code.svg)
 */
const LaptopCode: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 32l32 0 448 0 32 0 0 32 0 288-64 0 0-256L128 96l0 256-64 0L64 64l0-32zM0 432l0-48 640 0 0 48-48 48L48 480 0 432zM281 209l-31 31 31 31 17 17L264 321.9l-17-17-48-48-17-17 17-17 48-48 17-17L297.9 192l-17 17zM393 175l48 48 17 17-17 17-48 48-17 17L342.1 288l17-17 31-31-31-31-17-17L376 158.1l17 17z" />
    </Icon>
);

export default LaptopCode;