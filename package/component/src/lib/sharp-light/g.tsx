
import { Icon } from "../../index";

/**
 * A component that renders the `g` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/g?s=sharp-light g}
 * @preview ![g](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/g.svg)
 */
const G: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 64C118 64 32 150 32 256s86 192 192 192c100.6 0 183.2-77.4 191.3-176l-173 0-16 0 0-32 16 0L432 240l16 0 0 16c0 123.7-100.3 224-224 224S0 379.7 0 256S100.3 32 224 32c57.4 0 109.7 21.6 149.3 57l11.9 10.7-21.3 23.8L352 112.9C318 82.5 273.2 64 224 64z" />
    </Icon>
);

export default G;