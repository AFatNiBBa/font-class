
import { Icon, generic } from "../../index";

/**
 * A component that renders the `faucet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/faucet?s=duotone faucet}
 * @preview ![faucet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/faucet.svg)
 */
const Faucet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288l0 64c0 17.7 14.3 32 32 32l100.1 0c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48l36.1 0c17.7 0 32 14.3 32 32s14.3 32 32 32l64 0c17.7 0 32-14.3 32-32c0-88.4-71.6-160-160-160l-32 0-22.6-22.6c-6-6-14.1-9.4-22.6-9.4L256 224l0-76-32-4-32 4 0 76-18.7 0c-8.5 0-16.6 3.4-22.6 9.4L128 256l-96 0c-17.7 0-32 14.3-32 32zM192 96l0 12 32 4 32-4 0-12c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M96 160l128-16 128 16c17.7 0 32-14.3 32-32s-14.3-32-32-32L224 112 96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
    </Icon>
);

export default Faucet;