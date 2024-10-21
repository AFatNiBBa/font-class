
import { Icon } from "../../index";

/**
 * A component that renders the `g` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/g?s=sharp-regular g}
 * @preview ![g](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/g.svg)
 */
const G: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 80C126.8 80 48 158.8 48 256s78.8 176 176 176c89.1 0 162.7-66.2 174.4-152l-149 0-24 0 0-48 24 0L424 232l24 0 0 24c0 123.7-100.3 224-224 224S0 379.7 0 256S100.3 32 224 32c66.7 0 126.7 29.2 167.7 75.5l-35.9 31.8C323.5 102.9 276.4 80 224 80z" />
    </Icon>
);

export default G;