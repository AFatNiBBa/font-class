
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-quarters` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quarters?s=sharp-duotone-solid square-quarters}
 * @preview ![square-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-quarters.svg)
 */
const SquareQuarters: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 96l0 320L224 256 64 96zM224 256L384 416l0-320L224 256z" />
        <path d="M384 96l0 320L64 416 64 96l320 0zM64 32L0 32 0 96 0 416l0 64 64 0 320 0 64 0 0-64 0-320 0-64-64 0L64 32z" />
    </Icon>
);

export default SquareQuarters;