
import { Icon } from "../../index";

/**
 * A component that renders the `plus-minus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-minus?s=sharp-thin plus-minus}
 * @preview ![plus-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/plus-minus.svg)
 */
const PlusMinus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M184 360l0 8 16 0 0-8 0-160 160 0 8 0 0-16-8 0-160 0 0-160 0-8-16 0 0 8 0 160L24 184l-8 0 0 16 8 0 160 0 0 160zM8 464l0 16 8 0 352 0 8 0 0-16-8 0L16 464l-8 0z" />
    </Icon>
);

export default PlusMinus;