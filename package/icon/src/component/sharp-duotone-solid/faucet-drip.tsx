
import { Icon, generic } from "../../index";

/**
 * A component that renders the `faucet-drip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/faucet-drip?s=sharp-duotone-solid faucet-drip}
 * @preview ![faucet-drip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/faucet-drip.svg)
 */
const FaucetDrip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192L0 320l132.1 0c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48l36.1 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-88.4-71.6-160-160-160l-32 0-32-32-32 0 0-76.8L224 80l-32 3.2 0 76.8-32 0-32 32L0 192zM192 0l0 44.8L224 48l32-3.2L256 0 192 0z" />
        <path d="M224 80L64 96l0-64L224 48 384 32l0 64L224 80zM448 416l27.8 48.7c2.7 4.8 4.2 10.2 4.2 15.7c0 17.5-14.2 31.6-31.6 31.6l-.8 0c-17.5 0-31.6-14.2-31.6-31.6c0-5.5 1.4-10.9 4.2-15.7L448 416z" />
    </Icon>
);

export default FaucetDrip;