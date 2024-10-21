
import { Icon } from "../../index";

/**
 * A component that renders the `g` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/g?s=regular g}
 * @preview ![g](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/g.svg)
 */
const G: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 80C126.8 80 48 158.8 48 256s78.8 176 176 176c89.1 0 162.7-66.2 174.4-152l-149 0c-13.3 0-24-10.7-24-24s10.7-24 24-24L408 232c21.6 0 41.2 17.9 39.3 41.9C438.2 389.3 341.7 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32c57.4 0 109.7 21.6 149.3 57c9.9 8.8 10.7 24 1.9 33.9s-24 10.7-33.9 1.9C310.2 96.9 269.1 80 224 80z" />
    </Icon>
);

export default G;