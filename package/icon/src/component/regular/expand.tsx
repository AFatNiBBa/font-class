
import { Icon } from "../../index";

/**
 * A component that renders the `expand` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand?s=regular expand}
 * @preview ![expand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/expand.svg)
 */
const Expand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M136 32c13.3 0 24 10.7 24 24s-10.7 24-24 24L48 80l0 88c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 56C0 42.7 10.7 32 24 32l112 0zM0 344c0-13.3 10.7-24 24-24s24 10.7 24 24l0 88 88 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 480c-13.3 0-24-10.7-24-24L0 344zM424 32c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-88-88 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0zM400 344c0-13.3 10.7-24 24-24s24 10.7 24 24l0 112c0 13.3-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l88 0 0-88z" />
    </Icon>
);

export default Expand;