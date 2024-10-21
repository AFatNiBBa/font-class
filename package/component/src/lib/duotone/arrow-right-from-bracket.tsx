
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-from-bracket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-from-bracket?s=duotone arrow-right-from-bracket}
 * @preview ![arrow-right-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-right-from-bracket.svg)
 */
const ArrowRightFromBracket: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128z" />
        <path d="M502.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 288 192 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l210.7 0-73.4-73.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l128 128z" />
    </Icon>
);

export default ArrowRightFromBracket;