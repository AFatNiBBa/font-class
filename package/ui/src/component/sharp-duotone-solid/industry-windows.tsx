
import { Icon, generic } from "../../index";

/**
 * A component that renders the `industry-windows` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/industry-windows?s=sharp-duotone-solid industry-windows}
 * @preview ![industry-windows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/industry-windows.svg)
 */
const IndustryWindows: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 32l128 0 0 178.1 0 13.9 0 41.4c64-36.6 128-73.1 192-109.7l0 54.4 0 13.9 0 41.4c64-36.6 128-73.1 192-109.7l0 68.4 0 256L32 480l0-96 0-160L32 32zm88 280l0 80 80 0 0-80c-26.7 0-53.3 0-80 0zm128 0l0 80 80 0 0-80c-26.7 0-53.3 0-80 0zm128 0l0 80 80 0 0-80c-26.7 0-53.3 0-80 0z" />
        <path d="M160 265.4L363.9 148.8l-23.8-41.7L160 210.1l0 55.3zm192 0L555.9 148.8l-23.8-41.7L352 210.1l0 55.3zM200 392l0-80-80 0 0 80 80 0zm128-80l-80 0 0 80 80 0 0-80zm48 0l0 80 80 0 0-80-80 0z" />
    </Icon>
);

export default IndustryWindows;