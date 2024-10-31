
import { Icon } from "../../index";

/**
 * A component that renders the `peseta-sign` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peseta-sign?s=sharp-regular peseta-sign}
 * @preview ![peseta-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/peseta-sign.svg)
 */
const PesetaSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M72 32L48 32l0 24 0 120L0 176l0 48 48 0 0 104 0 128 0 24 48 0 0-24 0-104 96 0c77.4 0 142-55 156.8-128l35.2 0 0-48-32.8 0C343.2 95.1 275 32 192 32L72 32zM302.9 176L96 176l0-96 96 0c56.4 0 103.1 41.7 110.9 96zM96 224l203.4 0c-13.8 46.3-56.6 80-107.4 80l-96 0 0-80z" />
    </Icon>
);

export default PesetaSign;