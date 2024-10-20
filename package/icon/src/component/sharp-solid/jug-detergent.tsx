
import { Icon } from "../../index";

/**
 * A component that renders the `jug-detergent` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jug-detergent?s=sharp-solid jug-detergent}
 * @preview ![jug-detergent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/jug-detergent.svg)
 */
const JugDetergent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M96 0L224 0l0 48 32 0 0 48L64 96l0-48 32 0L96 0zM0 256c0-70.7 57.3-128 128-128l256 0 0 384L0 512 0 256zm256-32l0 160 64 0 0-160-64 0z" />
    </Icon>
);

export default JugDetergent;