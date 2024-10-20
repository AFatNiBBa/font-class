
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cassette-betamax` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cassette-betamax?s=duotone cassette-betamax}
 * @preview ![cassette-betamax](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cassette-betamax.svg)
 */
const CassetteBetamax: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l576 0 0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 160zM64 320a96 96 0 1 0 192 0A96 96 0 1 0 64 320zm256-64l0 128c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-128 0c-17.7 0-32 14.3-32 32z" />
        <path d="M64 32C28.7 32 0 60.7 0 96l0 64 576 0 0-64c0-35.3-28.7-64-64-64L64 32zM192 320a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-32-96a96 96 0 1 0 0 192 96 96 0 1 0 0-192z" />
    </Icon>
);

export default CassetteBetamax;