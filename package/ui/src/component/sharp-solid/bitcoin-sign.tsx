
import { Icon } from "../../index";

/**
 * A component that renders the `bitcoin-sign` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bitcoin-sign?s=sharp-solid bitcoin-sign}
 * @preview ![bitcoin-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bitcoin-sign.svg)
 */
const BitcoinSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M112 0L48 0l0 64L0 64l0 64 0 96 0 64 0 96 0 64 48 0 0 64 64 0 0-64 32 0 0 64 64 0 0-64c61.9 0 112-50.1 112-112c0-40.1-21.1-75.3-52.7-95.1C280.3 222.6 288 200.2 288 176c0-50.7-33.7-93.6-80-107.4L208 0 144 0l0 64-32 0 0-64zM64 128l112 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L64 224l0-96zM176 288l32 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L64 384l0-96 112 0z" />
    </Icon>
);

export default BitcoinSign;