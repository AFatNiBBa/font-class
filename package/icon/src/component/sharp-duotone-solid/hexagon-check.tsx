
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hexagon-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-check?s=sharp-duotone-solid hexagon-check}
 * @preview ![hexagon-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hexagon-check.svg)
 */
const HexagonCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L128 32l256 0L512 256 384 480l-256 0L0 256zm126.1 0l1 1c5.3 5.3 10.7 10.7 16 16c21.3 21.3 42.7 42.7 64 64l17 17 17-17L369 209l16-16c.3-.3 .6-.6 1-1L352 158.1c-.3 .3-.6 .6-1 1c-5.3 5.3-10.7 10.7-16 16l-111 111-47-47-16-16-1-1L126.1 256z" />
        <path d="M385 193L241 337l-17 17-17-17-80-80L161 223l63 63L351 159 385 193z" />
    </Icon>
);

export default HexagonCheck;