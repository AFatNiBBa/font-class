
import { Icon } from "../../index";

/**
 * A component that renders the `bitcoin-sign` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bitcoin-sign?s=sharp-regular bitcoin-sign}
 * @preview ![bitcoin-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bitcoin-sign.svg)
 */
const BitcoinSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 0l48 0 0 64 32 0 0-64 48 0 0 64.7c54 6 96 51.8 96 107.3c0 27.5-10.3 52.6-27.2 71.6C295.9 261.5 320 297.9 320 340c0 59.6-48.4 108-108 108l-20 0 0 64-48 0 0-64-32 0 0 64-48 0 0-64-16 0L0 448l0-48L0 280l0-48L0 112 0 64l48 0 16 0L64 0zM48 112l0 120 132 0c33.1 0 60-26.9 60-60s-26.9-60-60-60L48 112zM180 280L48 280l0 120 164 0c33.1 0 60-26.9 60-60s-26.9-60-60-60l-32 0z" />
    </Icon>
);

export default BitcoinSign;