
import { Icon } from "../../index";

/**
 * A component that renders the `grid-round` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-round?s=solid grid-round}
 * @preview ![grid-round](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/grid-round.svg)
 */
const GridRound: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 96A64 64 0 1 1 0 96a64 64 0 1 1 128 0zm0 160A64 64 0 1 1 0 256a64 64 0 1 1 128 0zM64 480a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM288 96A64 64 0 1 1 160 96a64 64 0 1 1 128 0zM224 320a64 64 0 1 1 0-128 64 64 0 1 1 0 128zm64 96a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zm96-256a64 64 0 1 1 0-128 64 64 0 1 1 0 128zm64 96a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zM384 480a64 64 0 1 1 0-128 64 64 0 1 1 0 128z" />
    </Icon>
);

export default GridRound;