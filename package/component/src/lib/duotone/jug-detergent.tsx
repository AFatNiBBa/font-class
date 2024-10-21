
import { Icon, generic } from "../../index";

/**
 * A component that renders the `jug-detergent` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jug-detergent?s=duotone jug-detergent}
 * @preview ![jug-detergent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/jug-detergent.svg)
 */
const JugDetergent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M64 72c0 13.3 10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-24c0-13.3-10.7-24-24-24L120 0C106.7 0 96 10.7 96 24l0 24-8 0C74.7 48 64 58.7 64 72z" />
        <path d="M128 128C57.3 128 0 185.3 0 256L0 480c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-224c0-70.7-57.3-128-128-128l-128 0zm160 96c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default JugDetergent;