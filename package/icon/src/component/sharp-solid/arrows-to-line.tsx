
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-to-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-line?s=sharp-solid arrows-to-line}
 * @preview ![arrows-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrows-to-line.svg)
 */
const ArrowsToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M256 32l0-32L192 0l0 32 0 32-64 0 0 32 96 96 96-96 0-32-64 0 0-32zM192 448l0 32 0 32 64 0 0-32 0-32 64 0 0-32-96-96-96 96 0 32 64 0zM32 224L0 224l0 64 32 0 384 0 32 0 0-64-32 0L32 224z" />
    </Icon>
);

export default ArrowsToLine;