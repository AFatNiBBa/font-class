
import { Icon, generic } from "../../index";

/**
 * A component that renders the `salt-shaker` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/salt-shaker?s=sharp-duotone-solid salt-shaker}
 * @preview ![salt-shaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/salt-shaker.svg)
 */
const SaltShaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 512l64.5 0 255 0 64.5 0-8-64L344 192l-64.5 0 32 256-239 0 32-256L40 192 8 448 0 512z" />
        <path d="M335.9 127l8.1 65-64.5 0-175 0L40 192l8.1-65C57.2 54.5 118.9 0 192 0s134.8 54.5 143.9 127zM192 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM160 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm80 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default SaltShaker;