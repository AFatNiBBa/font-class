
import { Icon } from "../../index";

/**
 * A component that renders the `industry` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/industry?s=sharp-solid industry}
 * @preview ![industry](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/industry.svg)
 */
const Industry: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 32L32 32l0 192 0 160 0 96 512 0 0-256 0-96L352 224l0-96L160 224l0-192z" />
    </Icon>
);

export default Industry;