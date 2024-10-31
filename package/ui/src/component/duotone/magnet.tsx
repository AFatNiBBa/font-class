
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnet?s=duotone magnet}
 * @preview ![magnet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/magnet.svg)
 */
const Magnet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 96 128 0 0-96c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64zm320 0l0 96 128 0 0-96c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32z" />
        <path d="M0 160l0 96C0 379.7 100.3 480 224 480s224-100.3 224-224l0-96-128 0 0 96c0 53-43 96-96 96s-96-43-96-96l0-96L0 160z" />
    </Icon>
);

export default Magnet;