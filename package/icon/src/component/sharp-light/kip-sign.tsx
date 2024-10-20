
import { Icon } from "../../index";

/**
 * A component that renders the `kip-sign` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kip-sign?s=sharp-light kip-sign}
 * @preview ![kip-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/kip-sign.svg)
 */
const KipSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M96 32l0 16 0 174.5 222-179 12.5-10 20.1 24.9L338 68.5 125.3 240 368 240l16 0 0 32-16 0-242.7 0L338 443.5l12.5 10-20.1 24.9-12.5-10L96 289.5 96 465l0 16-32 0 0-16 0-193-48 0L0 272l0-32 16 0 48 0L64 48l0-16 32 0z" />
    </Icon>
);

export default KipSign;