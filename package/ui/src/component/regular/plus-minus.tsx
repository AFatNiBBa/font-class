
import { Icon } from "../../index";

/**
 * A component that renders the `plus-minus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-minus?s=regular plus-minus}
 * @preview ![plus-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/plus-minus.svg)
 */
const PlusMinus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M216 32c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 120L48 152c-13.3 0-24 10.7-24 24s10.7 24 24 24l120 0 0 120c0 13.3 10.7 24 24 24s24-10.7 24-24l0-120 120 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-120 0 0-120zM8 488c0 13.3 10.7 24 24 24l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L32 464c-13.3 0-24 10.7-24 24z" />
    </Icon>
);

export default PlusMinus;