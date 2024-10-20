
import { Icon } from "../../index";

/**
 * A component that renders the `g` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/g?s=thin g}
 * @preview ![g](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/g.svg)
 */
const G: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48C109.1 48 16 141.1 16 256s93.1 208 208 208c109.7 0 199.6-84.9 207.4-192.6c.3-3.8-2.9-7.4-7.4-7.4l-192 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l192 0c13.1 0 24.4 10.8 23.4 24.6C438.9 388.6 342.1 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32c57.4 0 109.7 21.6 149.3 57c3.3 2.9 3.6 8 .6 11.3s-8 3.6-11.3 .6C325.9 68 277.3 48 224 48z" />
    </Icon>
);

export default G;