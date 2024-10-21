
import { Icon } from "../../index";

/**
 * A component that renders the `plus-minus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-minus?s=sharp-regular plus-minus}
 * @preview ![plus-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/plus-minus.svg)
 */
const PlusMinus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M216 32l0-24L168 8l0 24 0 120L48 152l-24 0 0 48 24 0 120 0 0 120 0 24 48 0 0-24 0-120 120 0 24 0 0-48-24 0-120 0 0-120zM8 464l0 48 24 0 320 0 24 0 0-48-24 0L32 464 8 464z" />
    </Icon>
);

export default PlusMinus;