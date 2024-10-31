
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-rotate-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-rotate-right?s=sharp-solid arrow-rotate-right}
 * @preview ![arrow-rotate-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-rotate-right.svg)
 */
const ArrowRotateRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 224l32 0 0-32 0-128 0-32-64 0 0 32 0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0l-45.3-45.3c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160 336 160l-32 0 0 64 32 0 128 0z" />
    </Icon>
);

export default ArrowRotateRight;