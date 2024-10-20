
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-holding-box` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-box?s=sharp-duotone-solid hand-holding-box}
 * @preview ![hand-holding-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-holding-box.svg)
 */
const HandHoldingBox: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 384L0 512l32 0 192 0 160 0 12.4 0 10.2-7 128-88 33-22.7-45.3-65.9-33 22.7-94.5 65L256 416l0-32 32 0 64 0 32 0 0-64-32 0-64 0-64 0-64 0-11.2 0-8.8 7L68.8 384 0 384z" />
        <path d="M224 0l0 128 64-32 64 32L352 0 480 0l0 256L96 256 96 0 224 0z" />
    </Icon>
);

export default HandHoldingBox;