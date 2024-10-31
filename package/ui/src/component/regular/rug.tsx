
import { Icon } from "../../index";

/**
 * A component that renders the `rug` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rug?s=regular rug}
 * @preview ![rug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/rug.svg)
 */
const Rug: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M24 64C10.7 64 0 74.7 0 88s10.7 24 24 24l8 0 0 40-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l8 0 0 32-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l8 0 0 32-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l8 0 0 40-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 24 0 480 0 24 0 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-40 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-32 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-32 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-40 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0-24 0L80 64 56 64 24 64zm56 48l48 0 0 288-48 0 0-64 0-80 0-80 0-64zM464 400l-288 0 0-288 288 0 0 288zm48 0l0-288 48 0 0 64 0 80 0 80 0 64-48 0z" />
    </Icon>
);

export default Rug;