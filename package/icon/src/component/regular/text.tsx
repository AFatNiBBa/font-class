
import { Icon } from "../../index";

/**
 * A component that renders the `text` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text?s=regular text}
 * @preview ![text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/text.svg)
 */
const Text: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 72C0 49.9 17.9 32 40 32l368 0c22.1 0 40 17.9 40 40l0 56c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48L248 80l0 352 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-352L48 80z" />
    </Icon>
);

export default Text;