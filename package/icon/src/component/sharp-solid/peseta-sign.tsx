
import { Icon } from "../../index";

/**
 * A component that renders the `peseta-sign` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peseta-sign?s=sharp-solid peseta-sign}
 * @preview ![peseta-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/peseta-sign.svg)
 */
const PesetaSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 32L32 32l0 32 0 96L0 160l0 64 32 0 0 96 0 160 64 0 0-128 96 0c77.4 0 142-55 156.8-128l35.2 0 0-64-35.2 0C334 87 269.4 32 192 32L64 32zM282.5 160L96 160l0-64 96 0c41.8 0 77.4 26.7 90.5 64zM96 224l186.5 0c-13.2 37.3-48.7 64-90.5 64l-96 0 0-64z" />
    </Icon>
);

export default PesetaSign;