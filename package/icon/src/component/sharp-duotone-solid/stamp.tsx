
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stamp` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stamp?s=sharp-duotone-solid stamp}
 * @preview ![stamp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/stamp.svg)
 */
const Stamp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 416l64 0 0 32 320 0 0-32 64 0 0 32 0 64-64 0L96 512l-64 0 0-64 0-32z" />
        <path d="M352 96c0 28.4-12.4 54-32 71.6l0 88.4 80 0c61.9 0 112 50.1 112 112l0 48L0 416l0-48c0-61.9 50.1-112 112-112l80 0 0-88.4C172.4 150 160 124.4 160 96c0-53 43-96 96-96s96 43 96 96z" />
    </Icon>
);

export default Stamp;