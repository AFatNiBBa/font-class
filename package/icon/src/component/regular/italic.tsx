
import { Icon } from "../../index";

/**
 * A component that renders the `italic` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/italic?s=regular italic}
 * @preview ![italic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/italic.svg)
 */
const Italic: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 56c0-13.3 10.7-24 24-24l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-68.7 0L144.7 432l87.3 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 480c-13.3 0-24-10.7-24-24s10.7-24 24-24l68.7 0L239.3 80 152 80c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Italic;