
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-left?s=thin circle-chevron-left}
 * @preview ![circle-chevron-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-chevron-left.svg)
 */
const CircleChevronLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256a240 240 0 1 1 480 0A240 240 0 1 1 16 256zm496 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM290.3 130.3l-120 120c-3.1 3.1-3.1 8.2 0 11.3l120 120c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L187.3 256 301.7 141.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0z" />
    </Icon>
);

export default CircleChevronLeft;