
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grid-round` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-round?s=sharp-duotone-solid grid-round}
 * @preview ![grid-round](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/grid-round.svg)
 */
const GridRound: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 256a64 64 0 1 0 128 0A64 64 0 1 0 0 256zM160 96a64 64 0 1 0 128 0A64 64 0 1 0 160 96zm0 320a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zM320 256a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M128 96A64 64 0 1 1 0 96a64 64 0 1 1 128 0zm0 320A64 64 0 1 1 0 416a64 64 0 1 1 128 0zm96-96a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM448 96A64 64 0 1 1 320 96a64 64 0 1 1 128 0zM384 480a64 64 0 1 1 0-128 64 64 0 1 1 0 128z" />
    </Icon>
);

export default GridRound;