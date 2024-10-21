
import { Icon } from "../../index";

/**
 * A component that renders the `lines-leaning` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lines-leaning?s=sharp-light lines-leaning}
 * @preview ![lines-leaning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/lines-leaning.svg)
 */
const LinesLeaning: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M191 53.5l5.5-15-30.1-11-5.5 15L9 458.5l-5.5 15 30.1 11 5.5-15 152-416zM291.2 36L260 28.8l-3.6 15.6-96 416L156.8 476l31.2 7.2 3.6-15.6 96-416L291.2 36zM384 32l-32 0 0 16 0 416 0 16 32 0 0-16 0-416 0-16z" />
    </Icon>
);

export default LinesLeaning;