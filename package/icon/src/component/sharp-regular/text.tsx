
import { Icon } from "../../index";

/**
 * A component that renders the `text` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text?s=sharp-regular text}
 * @preview ![text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/text.svg)
 */
const Text: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l24 0 400 0 24 0 0 24 0 72 0 24-48 0 0-24 0-48L248 80l0 352 48 0 24 0 0 48-24 0-144 0-24 0 0-48 24 0 48 0 0-352L48 80l0 48 0 24L0 152l0-24L0 56 0 32z" />
    </Icon>
);

export default Text;