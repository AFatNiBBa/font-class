
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-from-line` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-from-line?s=sharp-thin arrow-right-from-line}
 * @preview ![arrow-right-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-right-from-line.svg)
 */
const ArrowRightFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M440 264l5.7-5.7-5.7-5.7-136-136-5.7-5.7L287 122.3l5.7 5.7L415 250.3l-308.7 0-8 0 0 16 8 0 308.7 0L292.7 388.7l-5.7 5.7 11.3 11.3L304 400 440 264zM18.3 74.3l0-8-16 0 0 8 0 368 0 8 16 0 0-8 0-368z" />
    </Icon>
);

export default ArrowRightFromLine;