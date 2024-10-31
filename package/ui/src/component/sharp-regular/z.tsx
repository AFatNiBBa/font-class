
import { Icon } from "../../index";

/**
 * A component that renders the `z` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/z?s=sharp-regular z}
 * @preview ![z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/z.svg)
 */
const Z: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 32l-24 0L24 32 0 32 0 80l24 0 284.5 0L5.6 440.6 0 447.3 0 480l24 0 336 0 24 0 0-48-24 0L75.5 432 378.4 71.4l5.6-6.7L384 32z" />
    </Icon>
);

export default Z;