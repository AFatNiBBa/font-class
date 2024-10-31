
import { Icon } from "../../index";

/**
 * A component that renders the `crosshairs` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crosshairs?s=sharp-solid crosshairs}
 * @preview ![crosshairs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/crosshairs.svg)
 */
const Crosshairs: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 0l0 32 0 10.4c93.7 13.9 167.7 88 181.6 181.6l10.4 0 32 0 0 64-32 0-10.4 0c-13.9 93.7-88 167.7-181.6 181.6l0 10.4 0 32-64 0 0-32 0-10.4C130.3 455.7 56.3 381.7 42.4 288L32 288 0 288l0-64 32 0 10.4 0C56.3 130.3 130.3 56.3 224 42.4L224 32l0-32 64 0zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6l0-20.6 0-32 64 0 0 32 0 20.6c58.3-12.5 104.1-58.4 116.6-116.6L384 288l-32 0 0-64 32 0 20.6 0C392.1 165.7 346.3 119.9 288 107.4l0 20.6 0 32-64 0 0-32 0-20.6C165.7 119.9 119.9 165.7 107.4 224l20.6 0 32 0 0 64-32 0-20.6 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Crosshairs;