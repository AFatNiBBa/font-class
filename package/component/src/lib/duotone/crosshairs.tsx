
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crosshairs` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crosshairs?s=duotone crosshairs}
 * @preview ![crosshairs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/crosshairs.svg)
 */
const Crosshairs: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M42.4 224l65 0c12.5-58.3 58.4-104.1 116.6-116.6c0-21.7 0-43.3 0-65C130.3 56.3 56.3 130.3 42.4 224zm0 64c13.9 93.7 88 167.7 181.6 181.6c0-21.7 0-43.3 0-65C165.7 392.1 119.9 346.3 107.4 288c-21.7 0-43.3 0-65 0zM288 42.4l0 65c58.3 12.5 104.1 58.4 116.6 116.6l65 0C455.7 130.3 381.7 56.3 288 42.4zm0 362.3l0 65c93.7-13.9 167.7-88 181.6-181.6c-21.7 0-43.3 0-65 0C392.1 346.3 346.3 392.1 288 404.6z" />
        <path d="M256 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm256 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32zM256 352c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32zM128 288l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
    </Icon>
);

export default Crosshairs;