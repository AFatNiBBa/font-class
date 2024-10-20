
import { Icon } from "../../index";

/**
 * A component that renders the `border-bottom-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-bottom-right?s=sharp-light border-bottom-right}
 * @preview ![border-bottom-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/border-bottom-right.svg)
 */
const BorderBottomRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 64l0-16-32 0 0 16 0 384L32 448l-16 0 0 32 16 0 400 0 16 0 0-16 0-400zM344 88l0-48-48 0 0 48 48 0zM152 88l0-48-48 0 0 48 48 0zm96-48l-48 0 0 48 48 0 0-48zM56 88l0-48L8 40 8 88l48 0zm0 144L8 232l0 48 48 0 0-48zm0-48l0-48L8 136l0 48 48 0zm0 144L8 328l0 48 48 0 0-48z" />
    </Icon>
);

export default BorderBottomRight;