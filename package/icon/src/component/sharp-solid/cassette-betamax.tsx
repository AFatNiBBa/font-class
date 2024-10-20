
import { Icon } from "../../index";

/**
 * A component that renders the `cassette-betamax` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cassette-betamax?s=sharp-solid cassette-betamax}
 * @preview ![cassette-betamax](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cassette-betamax.svg)
 */
const CassetteBetamax: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 32L0 32l0 96 576 0 0-96zm0 128L0 160 0 480l576 0 0-320zM192 320a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM64 320a96 96 0 1 1 192 0A96 96 0 1 1 64 320zm256-96l192 0 0 192-192 0 0-192z" />
    </Icon>
);

export default CassetteBetamax;