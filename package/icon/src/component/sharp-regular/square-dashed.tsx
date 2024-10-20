
import { Icon } from "../../index";

/**
 * A component that renders the `square-dashed` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed?s=sharp-regular square-dashed}
 * @preview ![square-dashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-dashed.svg)
 */
const SquareDashed: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 32l104 0 0 48L48 80l0 80L0 160 0 56 0 32l24 0zM0 192l48 0 0 128L0 320 0 192zm400 0l48 0 0 128-48 0 0-128zm48-32l-48 0 0-80-80 0 0-48 104 0 24 0 0 24 0 104zm0 192l0 104 0 24-24 0-104 0 0-48 80 0 0-80 48 0zM48 352l0 80 80 0 0 48L24 480 0 480l0-24L0 352l48 0zM288 480l-128 0 0-48 128 0 0 48zM160 80l0-48 128 0 0 48L160 80z" />
    </Icon>
);

export default SquareDashed;