
import { Icon } from "../../index";

/**
 * A component that renders the `plus-minus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-minus?s=sharp-light plus-minus}
 * @preview ![plus-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/plus-minus.svg)
 */
const PlusMinus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M176 352l0 16 32 0 0-16 0-144 144 0 16 0 0-32-16 0-144 0 0-144 0-16-32 0 0 16 0 144L32 176l-16 0 0 32 16 0 144 0 0 144zM16 448l0 32 16 0 320 0 16 0 0-32-16 0L32 448l-16 0z" />
    </Icon>
);

export default PlusMinus;