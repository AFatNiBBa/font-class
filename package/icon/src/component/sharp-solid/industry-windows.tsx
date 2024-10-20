
import { Icon } from "../../index";

/**
 * A component that renders the `industry-windows` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/industry-windows?s=sharp-solid industry-windows}
 * @preview ![industry-windows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/industry-windows.svg)
 */
const IndustryWindows: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 32l128 0 0 192 192-96 0 96 192-96 0 96 0 256L32 480l0-96 0-160L32 32zM328 312l-80 0 0 80 80 0 0-80zm-128 0l-80 0 0 80 80 0 0-80zm256 0l-80 0 0 80 80 0 0-80z" />
    </Icon>
);

export default IndustryWindows;