
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-right?s=thin circle-arrow-right}
 * @preview ![circle-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-arrow-right.svg)
 */
const CircleArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 1 16 256a240 240 0 1 1 480 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM277.7 365.7l104-104c3.1-3.1 3.1-8.2 0-11.3l-104-104c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L356.7 248 136 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l220.7 0-90.3 90.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0z" />
    </Icon>
);

export default CircleArrowRight;