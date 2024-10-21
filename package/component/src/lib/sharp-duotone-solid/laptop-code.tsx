
import { Icon, generic } from "../../index";

/**
 * A component that renders the `laptop-code` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-code?s=sharp-duotone-solid laptop-code}
 * @preview ![laptop-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/laptop-code.svg)
 */
const LaptopCode: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 384l0 48 48 48 544 0 48-48 0-48L0 384zM64 32l0 32 0 288 64 0 0-256 384 0 0 256 64 0 0-288 0-32-32 0L96 32 64 32z" />
        <path d="M512 96L128 96l0 256 384 0 0-256zM281 193l-31 31 31 31 17 17L264 305.9l-17-17-48-48-17-17 17-17 48-48 17-17L297.9 176l-17 17zM393 159l48 48 17 17-17 17-48 48-17 17L342.1 272l17-17 31-31-31-31-17-17L376 142.1l17 17z" />
    </Icon>
);

export default LaptopCode;