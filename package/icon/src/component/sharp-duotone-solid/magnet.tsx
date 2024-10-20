
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnet?s=sharp-duotone-solid magnet}
 * @preview ![magnet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/magnet.svg)
 */
const Magnet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 160l128 0 0-128L0 32zm320 0l0 128 128 0 0-128L320 32z" />
        <path d="M0 160l0 96C0 379.7 100.3 480 224 480s224-100.3 224-224l0-96-128 0 0 96c0 53-43 96-96 96s-96-43-96-96l0-96L0 160z" />
    </Icon>
);

export default Magnet;