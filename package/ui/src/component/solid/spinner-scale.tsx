
import { Icon } from "../../index";

/**
 * A component that renders the `spinner-scale` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-scale?s=solid spinner-scale}
 * @preview ![spinner-scale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/spinner-scale.svg)
 */
const SpinnerScale: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 116a52 52 0 1 1 0-104 52 52 0 1 1 0 104zm0 364a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM448 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM32 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm399.4-96.2A56 56 0 1 1 352.2 80.6a56 56 0 1 1 79.2 79.2zM97.6 414.4a32 32 0 1 1 45.3-45.3A32 32 0 1 1 97.6 414.4zm271.5 0a32 32 0 1 1 45.3-45.3 32 32 0 1 1 -45.3 45.3zM86.3 86.3a48 48 0 1 1 67.9 67.9A48 48 0 1 1 86.3 86.3z" />
    </Icon>
);

export default SpinnerScale;