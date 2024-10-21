
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mound` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mound?s=sharp-duotone-solid mound}
 * @preview ![mound](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mound.svg)
 */
const Mound: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M142.6 178.3C173.3 127.2 228.4 96 288 96s114.7 31.2 145.4 82.3L576 416H0L142.6 178.3z" />
    </Icon>
);

export default Mound;