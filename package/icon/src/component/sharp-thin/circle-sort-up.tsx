
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sort-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort-up?s=sharp-thin circle-sort-up}
 * @preview ![circle-sort-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-sort-up.svg)
 */
const CircleSortUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256a240 240 0 1 1 480 0A240 240 0 1 1 16 256zm496 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM345.4 304L256 393.4 166.6 304 144 304 244.7 404.7 256 416l11.3-11.3L368 304l-22.6 0zM160 208l0-8.6 96-82.3 96 82.3 0 8.6-192 0zm-16-16l0 16 0 16 16 0 192 0 16 0 0-16 0-16L256 96 144 192z" />
    </Icon>
);

export default CircleSortUp;