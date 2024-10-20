
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hexagon-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-exclamation?s=sharp-duotone-solid hexagon-exclamation}
 * @preview ![hexagon-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hexagon-exclamation.svg)
 */
const HexagonExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L128 32l256 0L512 256 384 480l-256 0L0 256zM232 128l0 24 0 112 0 24 48 0 0-24 0-112 0-24-48 0zm0 192l0 48 48 0 0-48-48 0z" />
        <path d="M280 152l0-24-48 0 0 24 0 112 0 24 48 0 0-24 0-112zm0 168l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default HexagonExclamation;