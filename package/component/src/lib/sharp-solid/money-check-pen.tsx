
import { Icon } from "../../index";

/**
 * A component that renders the `money-check-pen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-check-pen?s=sharp-solid money-check-pen}
 * @preview ![money-check-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/money-check-pen.svg)
 */
const MoneyCheckPen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 64l576 0 0 108.4L564.4 184s0 0 0 0L331 417.4 326.6 448 0 448 0 64zM96 288l0 32 256 0 0-32L96 288zm352-96L96 192l0 32 352 0 0-32zm121 31.8l71 71-41.3 41.3-71-71L569 223.8zm-63.9 63.9l71 71L434.9 500 352 511.9 363.9 429 505.1 287.8z" />
    </Icon>
);

export default MoneyCheckPen;