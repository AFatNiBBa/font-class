
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-left?s=thin circle-arrow-left}
 * @preview ![circle-arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-arrow-left.svg)
 */
const CircleArrowLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256a240 240 0 1 1 480 0A240 240 0 1 1 16 256zm496 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM234.3 146.3l-104 104c-3.1 3.1-3.1 8.2 0 11.3l104 104c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L155.3 264 376 264c4.4 0 8-3.6 8-8s-3.6-8-8-8l-220.7 0 90.3-90.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0z" />
    </Icon>
);

export default CircleArrowLeft;