
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grate-droplet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grate-droplet?s=sharp-duotone-solid grate-droplet}
 * @preview ![grate-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/grate-droplet.svg)
 */
const GrateDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 256 0 448l0 32 32 0 96 0 96 0 96 0 24.2 0c-15.3-22.9-24.2-50.4-24.2-80l0-2.1c0-28.3 8.2-56 23.7-79.7L448 157.9 448 64l0-32-32 0-96 0-96 0-96 0L32 32 0 32zM64 96l32 0 0 128-32 0L64 96zm0 192l32 0 0 128-32 0 0-128zM160 96l32 0 0 128-32 0 0-128zm0 192l32 0 0 128-32 0 0-128zM256 96l32 0 0 128-32 0 0-128zm0 192l32 0 0 128-32 0 0-128zM352 96l32 0 0 128-32 0 0-128z" />
        <path d="M370.5 335.6L464 192l93.5 143.6c12.1 18.5 18.5 40.2 18.5 62.3V400c0 61.9-50.1 112-112 112s-112-50.1-112-112v-2.1c0-22.1 6.4-43.7 18.5-62.3z" />
    </Icon>
);

export default GrateDroplet;