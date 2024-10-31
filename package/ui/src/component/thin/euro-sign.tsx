
import { Icon } from "../../index";

/**
 * A component that renders the `euro-sign` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/euro-sign?s=thin euro-sign}
 * @preview ![euro-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/euro-sign.svg)
 */
const EuroSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M35.7 208c-2.4 13-3.7 26.3-3.7 40l0 16c0 13.7 1.3 27 3.7 40L8 304c-4.4 0-8 3.6-8 8s3.6 8 8 8l31.3 0C64 412.1 148.1 480 248 480l65 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-65 0c-91 0-167.8-60.8-192.1-144L280 320c4.4 0 8-3.6 8-8s-3.6-8-8-8L52 304c-2.6-12.9-4-26.3-4-40l0-16c0-13.7 1.4-27.1 4-40l228 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L55.9 192C80.2 108.8 157 48 248 48l65 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-65 0C148.1 32 64 99.9 39.3 192L8 192c-4.4 0-8 3.6-8 8s3.6 8 8 8l27.7 0z" />
    </Icon>
);

export default EuroSign;