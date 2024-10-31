
import { Icon } from "../../index";

/**
 * A component that renders the `chess-queen` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen?s=sharp-thin chess-queen}
 * @preview ![chess-queen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chess-queen.svg)
 */
const ChessQueen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M216 56a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm96 0A56 56 0 1 0 200 56a56 56 0 1 0 112 0zM150.6 120l-6.7 0-1.2 6.6c-6.8 37.3-39.5 65.5-78.7 65.5c-15 0-28.9-4.1-40.9-11.2l-3.9-2.3-4 2.2L7.4 185 .5 188.7l3.6 6.9L102 384l18 0-96-184.6c12.2 5.6 25.7 8.7 39.9 8.7c44.8 0 82.4-30.6 93-72.1l6.7 0c17.3 33.3 52.1 56 92.3 56s74.9-22.7 92.3-56l6.7 0c10.6 41.5 48.2 72.1 93 72.1c14.2 0 27.8-3.1 39.9-8.7L391.9 384l18 0 97.9-188.3 3.6-6.9-6.9-3.8-7.8-4.3-4-2.2-3.9 2.3c-12 7.1-25.9 11.2-40.9 11.2c-39.2 0-71.9-28.3-78.7-65.5l-1.2-6.6-6.7 0-18.1 0-5.1 0-2.1 4.7C322.1 155 291.5 176 256 176s-66.1-21-80-51.3l-2.1-4.7-5.1 0-18.1 0zM80 475.5L119.1 432l273.7 0L432 475.5l0 20.5L80 496l0-20.5zm-16-6.1L64 496l0 16 16 0 352 0 16 0 0-16 0-26.7L400 416l-288 0L64 469.3z" />
    </Icon>
);

export default ChessQueen;