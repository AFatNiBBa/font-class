
import { Icon } from "../../index";

/**
 * A component that renders the `candle-holder` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candle-holder?s=regular candle-holder}
 * @preview ![candle-holder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/candle-holder.svg)
 */
const CandleHolder: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 112c0 17.7 14.3 32 32 32s32-14.3 32-32c0-3.2-3.6-14.8-17.4-33.6c-4.7-6.4-9.8-12.5-14.6-18.1c-4.9 5.5-9.9 11.7-14.6 18.1C131.6 97.2 128 108.8 128 112zm32 80c-44.2 0-80-35.8-80-80c0-39.6 49.1-90.1 66.2-106.6C149.9 1.9 154.8 0 160 0s10.1 1.9 13.8 5.4C190.9 21.9 240 72.4 240 112c0 44.2-35.8 80-80 80zm-32 80l-32 0 0 192 128 0 0-192-48 0 0 56c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-56zM48 464l0-192c0-26.5 21.5-48 48-48l128 0c26.5 0 48 21.5 48 48l0 192 36.1 0c-2.7-7.5-4.1-15.6-4.1-24c0-39.8 32.2-72 72-72s72 32.2 72 72c0 39.7-32.2 71.9-71.8 72c0 0-.1 0-.1 0s0 0-.1 0l-104 0-48 0L96 512l-48 0-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0zm352-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default CandleHolder;