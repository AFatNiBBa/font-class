
import { Icon } from "../../index";

/**
 * A component that renders the `h4` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h4?s=sharp-light h4}
 * @preview ![h4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/h4.svg)
 */
const H4: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 64l0 16 0 160 256 0 0-160 0-16 32 0 0 16 0 176 0 176 0 16-32 0 0-16 0-160L32 272l0 160 0 16L0 448l0-16L0 256 0 80 0 64l32 0zm608 0l0 16 0 352 0 16-32 0 0-16 0-128-216 0-19.4 0 3.7-19L418.8 64l32.6 0-40 208L608 272l0-192 0-16 32 0z" />
    </Icon>
);

export default H4;