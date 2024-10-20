
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-holding-droplet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-droplet?s=sharp-duotone-solid hand-holding-droplet}
 * @preview ![hand-holding-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-holding-droplet.svg)
 */
const HandHoldingDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 384L0 512l32 0 192 0 160 0 12.4 0 10.2-7 128-88 33-22.7-45.3-65.9-33 22.7-94.5 65L256 416l0-32 32 0 64 0 32 0 0-64-32 0-64 0-64 0-64 0-11.2 0-8.8 7L68.8 384 0 384z" />
        <path d="M211.2 102.4L288 0l76.8 102.4C377.3 119 384 139.2 384 160c0 53-43 96-96 96s-96-43-96-96c0-20.8 6.7-41 19.2-57.6z" />
    </Icon>
);

export default HandHoldingDroplet;