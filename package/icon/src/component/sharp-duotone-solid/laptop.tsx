
import { Icon, generic } from "../../index";

/**
 * A component that renders the `laptop` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop?s=sharp-duotone-solid laptop}
 * @preview ![laptop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/laptop.svg)
 */
const Laptop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 384l0 48 48 48 544 0 48-48 0-48L0 384zM64 32l0 32 0 288 64 0 0-256 384 0 0 256 64 0 0-288 0-32-32 0L96 32 64 32z" />
        <path d="M128 96H512V352H128V96z" />
    </Icon>
);

export default Laptop;