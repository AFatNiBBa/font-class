
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-check-pen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-check-pen?s=sharp-duotone-solid money-check-pen}
 * @preview ![money-check-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/money-check-pen.svg)
 */
const MoneyCheckPen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l326.6 0 4.4-30.6L564.4 184c3.9-3.9 7.7-7.7 11.6-11.6L576 64 0 64zM96 192l352 0 0 32L96 224l0-32zm0 96l256 0 0 32L96 320l0-32z" />
        <path d="M640 294.8l-71-71-41.3 41.3 71 71L640 294.8zm-63.9 63.9l-71-71L363.9 429 352 511.9 434.9 500 576.1 358.7z" />
    </Icon>
);

export default MoneyCheckPen;