
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sprinkler-ceiling` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sprinkler-ceiling?s=sharp-duotone-solid sprinkler-ceiling}
 * @preview ![sprinkler-ceiling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sprinkler-ceiling.svg)
 */
const SprinklerCeiling: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 472a24 24 0 1 0 48 0A24 24 0 1 0 0 472zm64-64a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm48-64a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 128a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm56-64a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm56-64a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 128a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm48-64a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm64 64a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M0 96l0 26.2 25.7 5.1L128 147.8l0-65.3L64 69.8 64 0 0 0 0 96zm256 51.8l102.3-20.5 25.7-5.1L384 96l0-96L320 0l0 69.8L256 82.6l0 65.3zM224 64l0-32-64 0 0 32 0 128-64 0-32 0 0 64 32 0 96 0 96 0 32 0 0-64-32 0-64 0 0-128z" />
    </Icon>
);

export default SprinklerCeiling;