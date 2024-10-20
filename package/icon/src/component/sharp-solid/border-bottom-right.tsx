
import { Icon } from "../../index";

/**
 * A component that renders the `border-bottom-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-bottom-right?s=sharp-solid border-bottom-right}
 * @preview ![border-bottom-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/border-bottom-right.svg)
 */
const BorderBottomRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 64l0-32-64 0 0 32 0 352L32 416 0 416l0 64 32 0 384 0 32 0 0-32 0-384zM288 96l64 0 0-64-64 0 0 64zM96 96l64 0 0-64L96 32l0 64zm96-64l0 64 64 0 0-64-64 0zM0 96l64 0 0-64L0 32 0 96zM64 224L0 224l0 64 64 0 0-64zm0-32l0-64L0 128l0 64 64 0zm0 128L0 320l0 64 64 0 0-64z" />
    </Icon>
);

export default BorderBottomRight;