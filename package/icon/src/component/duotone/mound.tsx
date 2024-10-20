
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mound` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mound?s=duotone mound}
 * @preview ![mound](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mound.svg)
 */
const Mound: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M144.1 179.2C173.8 127.7 228.6 96 288 96s114.2 31.7 143.9 83.2L540.4 368c12.3 21.3-3.1 48-27.7 48H63.3c-24.6 0-40-26.6-27.7-48L144.1 179.2z" />
    </Icon>
);

export default Mound;