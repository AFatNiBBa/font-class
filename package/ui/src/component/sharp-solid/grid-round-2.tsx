
import { Icon } from "../../index";

/**
 * A component that renders the `grid-round-2` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-round-2?s=sharp-solid grid-round-2}
 * @preview ![grid-round-2](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/grid-round-2.svg)
 */
const GridRound_2: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 32a96 96 0 1 0 0 192 96 96 0 1 0 0-192zm0 256a96 96 0 1 0 0 192 96 96 0 1 0 0-192zM288 128a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zm96 160a96 96 0 1 0 0 192 96 96 0 1 0 0-192z" />
    </Icon>
);

export default GridRound_2;