
import { Icon } from "../../index";

/**
 * A component that renders the `tenge-sign` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tenge-sign?s=thin tenge-sign}
 * @preview ![tenge-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/tenge-sign.svg)
 */
const TengeSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 40c0-4.4 3.6-8 8-8l368 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 48c-4.4 0-8-3.6-8-8zM0 168c0-4.4 3.6-8 8-8l184 0 184 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-176 0 0 296c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-296L8 176c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default TengeSign;