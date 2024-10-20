
import { Icon } from "../../index";

/**
 * A component that renders the `sigma` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sigma?s=sharp-regular sigma}
 * @preview ![sigma](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sigma.svg)
 */
const Sigma: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 480l24 0 336 0 24 0 0-24 0-80 0-24-48 0 0 24 0 56L81.9 432 241 273l17-17-17-17L81.9 80 336 80l0 56 0 24 48 0 0-24 0-80 0-24-24 0L24 32 0 32 0 65.9l7 7 183 183L7 439l-7 7L0 480z" />
    </Icon>
);

export default Sigma;