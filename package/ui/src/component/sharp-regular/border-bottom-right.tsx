
import { Icon } from "../../index";

/**
 * A component that renders the `border-bottom-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-bottom-right?s=sharp-regular border-bottom-right}
 * @preview ![border-bottom-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/border-bottom-right.svg)
 */
const BorderBottomRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 56l0-24-48 0 0 24 0 376L24 432 0 432l0 48 24 0 400 0 24 0 0-24 0-400zM352 96l0-64-64 0 0 64 64 0zM160 96l0-64L96 32l0 64 64 0zm96-64l-64 0 0 64 64 0 0-64zM64 96l0-64L0 32 0 96l64 0zm0 128L0 224l0 64 64 0 0-64zm0-32l0-64L0 128l0 64 64 0zm0 128L0 320l0 64 64 0 0-64z" />
    </Icon>
);

export default BorderBottomRight;