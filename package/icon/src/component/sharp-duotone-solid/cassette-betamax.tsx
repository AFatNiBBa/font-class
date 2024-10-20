
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cassette-betamax` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cassette-betamax?s=sharp-duotone-solid cassette-betamax}
 * @preview ![cassette-betamax](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cassette-betamax.svg)
 */
const CassetteBetamax: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l576 0 0 320L0 480 0 160zM64 320a96 96 0 1 0 192 0A96 96 0 1 0 64 320zm256-96l0 192 192 0 0-192-192 0z" />
        <path d="M576 32L0 32 0 160l576 0 0-128zM192 320a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-32-96a96 96 0 1 0 0 192 96 96 0 1 0 0-192z" />
    </Icon>
);

export default CassetteBetamax;