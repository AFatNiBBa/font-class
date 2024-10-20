
import { Icon } from "../../index";

/**
 * A component that renders the `align-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-right?s=regular align-right}
 * @preview ![align-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/align-right.svg)
 */
const AlignRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M424 40c13.3 0 24 10.7 24 24s-10.7 24-24 24L184 88c-13.3 0-24-10.7-24-24s10.7-24 24-24l240 0zm0 128c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 216c-13.3 0-24-10.7-24-24s10.7-24 24-24l400 0zm24 152c0 13.3-10.7 24-24 24l-240 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l240 0c13.3 0 24 10.7 24 24zM424 424c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 472c-13.3 0-24-10.7-24-24s10.7-24 24-24l400 0z" />
    </Icon>
);

export default AlignRight;