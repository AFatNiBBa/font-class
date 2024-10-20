
import { Icon } from "../../index";

/**
 * A component that renders the `sigma` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sigma?s=sharp-light sigma}
 * @preview ![sigma](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sigma.svg)
 */
const Sigma: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 480l16 0 352 0 16 0 0-16 0-96 0-16-32 0 0 16 0 80L52.5 448 219.8 266.9l10-10.9-10-10.9L52.5 64 352 64l0 80 0 16 32 0 0-16 0-96 0-16-16 0L16 32 0 32 0 54.3l4.2 4.6L186.2 256 4.2 453.1 0 457.7 0 480z" />
    </Icon>
);

export default Sigma;