
import { Icon } from "../../index";

/**
 * A component that renders the `z` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/z?s=sharp-light z}
 * @preview ![z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/z.svg)
 */
const Z: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 32l-16 0L16 32 0 32 0 64l16 0 317.5 0L3.8 453.7 0 458.1 0 480l16 0 352 0 16 0 0-32-16 0L50.5 448 380.2 58.3l3.8-4.5L384 32z" />
    </Icon>
);

export default Z;