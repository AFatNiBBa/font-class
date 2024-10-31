
import { Icon } from "../../index";

/**
 * A component that renders the `text` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text?s=thin text}
 * @preview ![text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/text.svg)
 */
const Text: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M40 48c-4.4 0-8 3.6-8 8l0 48c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-48c0-13.3 10.7-24 24-24l184 0 184 0c13.3 0 24 10.7 24 24l0 48c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-48c0-4.4-3.6-8-8-8L232 48l0 416 80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-88 0-88 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l80 0 0-416L40 48z" />
    </Icon>
);

export default Text;