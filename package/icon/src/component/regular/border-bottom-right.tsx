
import { Icon } from "../../index";

/**
 * A component that renders the `border-bottom-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-bottom-right?s=regular border-bottom-right}
 * @preview ![border-bottom-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/border-bottom-right.svg)
 */
const BorderBottomRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 352c0 13.3-10.7 24-24 24L24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l352 0c39.8 0 72-32.2 72-72l0-352zM320 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM128 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96-64a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM32 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 128a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 128a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default BorderBottomRight;