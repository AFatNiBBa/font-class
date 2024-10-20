
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-from-line` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-from-line?s=solid arrow-down-from-line}
 * @preview ![arrow-down-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-down-from-line.svg)
 */
const ArrowDownFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M214.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 370.7 160 192c0-17.7 14.3-32 32-32s32 14.3 32 32l0 178.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128zM32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96z" />
    </Icon>
);

export default ArrowDownFromLine;