
import { Icon } from "../../index";

/**
 * A component that renders the `d` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/d?s=thin d}
 * @preview ![d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/d.svg)
 */
const D: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l128 0c114.9 0 208-93.1 208-208s-93.1-208-208-208L32 48zM0 64C0 46.3 14.3 32 32 32l128 0c123.7 0 224 100.3 224 224s-100.3 224-224 224L32 480c-17.7 0-32-14.3-32-32L0 64z" />
    </Icon>
);

export default D;