
import { Icon, generic } from "../../index";

/**
 * A component that renders the `faucet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/faucet?s=sharp-duotone-solid faucet}
 * @preview ![faucet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/faucet.svg)
 */
const Faucet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L0 384l132.1 0c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48l36.1 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-88.4-71.6-160-160-160l-32 0-32-32-32 0 0-76.8L224 144l-32 3.2 0 76.8-32 0-32 32L0 256zM192 64l0 44.8 32 3.2 32-3.2L256 64l-64 0z" />
        <path d="M64 160l160-16 160 16V96L224 112 64 96v64z" />
    </Icon>
);

export default Faucet;