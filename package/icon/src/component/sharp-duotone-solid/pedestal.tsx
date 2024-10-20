
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pedestal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pedestal?s=sharp-duotone-solid pedestal}
 * @preview ![pedestal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pedestal.svg)
 */
const Pedestal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 0L416 0l0 448L32 448 32 0zM96 88a24 24 0 1 0 48 0A24 24 0 1 0 96 88zm208 0a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M144 88A24 24 0 1 0 96 88a24 24 0 1 0 48 0zm208 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM32 448L0 448l0 64 32 0 384 0 32 0 0-64-32 0L32 448z" />
    </Icon>
);

export default Pedestal;