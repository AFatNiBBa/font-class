
import { Icon } from "../../index";

/**
 * A component that renders the `z` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/z?s=sharp-thin z}
 * @preview ![z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/z.svg)
 */
const Z: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 32l-8 0L8 32 0 32 0 48l8 0 350.7 0L1.9 466.8 0 469.1 0 480l8 0 368 0 8 0 0-16-8 0L25.3 464 382.1 45.2l1.9-2.2L384 32z" />
    </Icon>
);

export default Z;