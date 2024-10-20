
import { Icon } from "../../index";

/**
 * A component that renders the `envelope` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope?s=thin envelope}
 * @preview ![envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/envelope.svg)
 */
const Envelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 80c-26.5 0-48 21.5-48 48l0 28.2L220.8 321.4c20.5 16.5 49.8 16.5 70.3 0L496 156.2l0-28.2c0-26.5-21.5-48-48-48L64 80zM16 176.7L16 384c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-207.3L301.2 333.8c-26.4 21.3-64 21.3-90.4 0L16 176.7zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
    </Icon>
);

export default Envelope;