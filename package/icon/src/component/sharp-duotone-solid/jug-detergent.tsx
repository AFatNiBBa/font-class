
import { Icon, generic } from "../../index";

/**
 * A component that renders the `jug-detergent` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jug-detergent?s=sharp-duotone-solid jug-detergent}
 * @preview ![jug-detergent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/jug-detergent.svg)
 */
const JugDetergent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M64 48l0 48 192 0 0-48-32 0 0-48L96 0l0 48L64 48z" />
        <path d="M128 128C57.3 128 0 185.3 0 256L0 512l384 0 0-384-256 0zm192 96l0 160-64 0 0-160 64 0z" />
    </Icon>
);

export default JugDetergent;