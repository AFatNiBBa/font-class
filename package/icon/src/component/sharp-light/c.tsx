
import { Icon } from "../../index";

/**
 * A component that renders the `c` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/c?s=sharp-light c}
 * @preview ![c](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/c.svg)
 */
const C: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 64C118 64 32 150 32 256s86 192 192 192c51.6 0 98.4-20.3 132.9-53.4l22.2 23.1C338.8 456.2 284.2 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32c60.2 0 114.8 23.8 155.1 62.4l-22.2 23.1C322.4 84.3 275.6 64 224 64z" />
    </Icon>
);

export default C;