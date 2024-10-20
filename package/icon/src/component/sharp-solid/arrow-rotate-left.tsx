
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-rotate-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-rotate-left?s=sharp-solid arrow-rotate-left}
 * @preview ![arrow-rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-rotate-left.svg)
 */
const ArrowRotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 224l-32 0 0-32L16 64l0-32 64 0 0 32 0 51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0l45.3-45.3c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160l50.3 0 32 0 0 64-32 0L48 224z" />
    </Icon>
);

export default ArrowRotateLeft;