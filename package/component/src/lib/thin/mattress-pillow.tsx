
import { Icon } from "../../index";

/**
 * A component that renders the `mattress-pillow` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mattress-pillow?s=thin mattress-pillow}
 * @preview ![mattress-pillow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mattress-pillow.svg)
 */
const MattressPillow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 80l0 352L64 432c-26.5 0-48-21.5-48-48l0-256c0-26.5 21.5-48 48-48l192 0zm16 0l304 0c26.5 0 48 21.5 48 48l0 256c0 26.5-21.5 48-48 48l-304 0 0-352zM64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm112 80c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32l64 0zm-64-16c-26.5 0-48 21.5-48 48l0 160c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48l-64 0z" />
    </Icon>
);

export default MattressPillow;