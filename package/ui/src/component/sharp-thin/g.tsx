
import { Icon } from "../../index";

/**
 * A component that renders the `g` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/g?s=sharp-thin g}
 * @preview ![g](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/g.svg)
 */
const G: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48C109.1 48 16 141.1 16 256s93.1 208 208 208c112.2 0 203.6-88.8 207.8-200L232 264l-8 0 0-16 8 0 208 0 8 0 0 8c0 123.7-100.3 224-224 224S0 379.7 0 256S100.3 32 224 32c57.4 0 109.7 21.6 149.3 57l6 5.3-10.7 11.9-6-5.3C325.9 68 277.3 48 224 48z" />
    </Icon>
);

export default G;