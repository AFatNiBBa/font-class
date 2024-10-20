
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pedestal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pedestal?s=duotone pedestal}
 * @preview ![pedestal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pedestal.svg)
 */
const Pedestal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 64C32 28.7 60.7 0 96 0L352 0c35.3 0 64 28.7 64 64l0 384L32 448 32 64zM96 88a24 24 0 1 0 48 0A24 24 0 1 0 96 88zm208 0a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M144 88A24 24 0 1 0 96 88a24 24 0 1 0 48 0zm208 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448z" />
    </Icon>
);

export default Pedestal;