
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarter` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter?s=sharp-light circle-quarter}
 * @preview ![circle-quarter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-quarter.svg)
 */
const CircleQuarter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M34.3 224C48.3 125.9 125.9 48.3 224 34.3L224 224 34.3 224zM2 224c-1.3 10.5-2 21.2-2 32l32 0 192 0 32 0 0-32 0-192 0-32c-10.8 0-21.5 .7-32 2C108.2 16.4 16.4 108.2 2 224z" />
    </Icon>
);

export default CircleQuarter;