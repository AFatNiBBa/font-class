
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-line?s=sharp-solid arrow-down-to-line}
 * @preview ![arrow-down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-down-to-line.svg)
 */
const ArrowDownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M214.6 342.6L192 365.3l-22.6-22.6-128-128L18.7 192 64 146.7l22.6 22.6L160 242.7 160 64l0-32 64 0 0 32 0 178.7 73.4-73.4L320 146.7 365.3 192l-22.6 22.6-128 128zM32 416l320 0 32 0 0 64-32 0L32 480 0 480l0-64 32 0z" />
    </Icon>
);

export default ArrowDownToLine;