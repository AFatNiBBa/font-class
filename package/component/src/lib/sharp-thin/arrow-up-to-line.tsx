
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-to-line` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-line?s=sharp-thin arrow-up-to-line}
 * @preview ![arrow-up-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-up-to-line.svg)
 */
const ArrowUpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 32L0 32 0 48l8 0 368 0 8 0 0-16-8 0L8 32zm189.7 98.3l-5.7-5.7-5.7 5.7-136 136L44.7 272 56 283.3l5.7-5.7L184 155.3 184 472l0 8 16 0 0-8 0-316.7L322.3 277.7l5.7 5.7L339.3 272l-5.7-5.7-136-136z" />
    </Icon>
);

export default ArrowUpToLine;