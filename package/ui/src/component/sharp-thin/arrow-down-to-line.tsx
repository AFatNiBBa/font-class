
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-line` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-line?s=sharp-thin arrow-down-to-line}
 * @preview ![arrow-down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-down-to-line.svg)
 */
const ArrowDownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 480l-8 0 0-16 8 0 368 0 8 0 0 16-8 0L8 480zm189.7-98.3l-5.7 5.7-5.7-5.7-136-136L44.7 240 56 228.7l5.7 5.7L184 356.7 184 40l0-8 16 0 0 8 0 316.7L322.3 234.3l5.7-5.7L339.3 240l-5.7 5.7-136 136z" />
    </Icon>
);

export default ArrowDownToLine;