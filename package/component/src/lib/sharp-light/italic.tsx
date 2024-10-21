
import { Icon } from "../../index";

/**
 * A component that renders the `italic` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/italic?s=sharp-light italic}
 * @preview ![italic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/italic.svg)
 */
const Italic: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 32l16 0 224 0 16 0 0 32-16 0-85 0L135.3 448 240 448l16 0 0 32-16 0L16 480 0 480l0-32 16 0 85 0L248.7 64 144 64l-16 0 0-32z" />
    </Icon>
);

export default Italic;