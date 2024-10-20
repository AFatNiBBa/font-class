
import { Icon } from "../../index";

/**
 * A component that renders the `lines-leaning` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lines-leaning?s=sharp-thin lines-leaning}
 * @preview ![lines-leaning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/lines-leaning.svg)
 */
const LinesLeaning: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M175.5 42.7l2.7-7.5-15.1-5.3-2.7 7.5-152 432-2.7 7.5 15.1 5.3 2.7-7.5 152-432zm114.2-8.4l-15.5-4-2 7.7-112 432-2 7.7 15.5 4 2-7.7 112-432 2-7.7zM384 32l-16 0 0 8 0 432 0 8 16 0 0-8 0-432 0-8z" />
    </Icon>
);

export default LinesLeaning;