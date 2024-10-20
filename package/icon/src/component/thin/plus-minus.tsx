
import { Icon } from "../../index";

/**
 * A component that renders the `plus-minus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-minus?s=thin plus-minus}
 * @preview ![plus-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/plus-minus.svg)
 */
const PlusMinus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M184 200l0 160c0 4.4 3.6 8 8 8s8-3.6 8-8l0-160 160 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-160 0 0-160c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 160L24 184c-4.4 0-8 3.6-8 8s3.6 8 8 8l160 0zM8 472c0 4.4 3.6 8 8 8l352 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L16 464c-4.4 0-8 3.6-8 8z" />
    </Icon>
);

export default PlusMinus;