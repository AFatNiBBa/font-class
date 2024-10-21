
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spinner-scale` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-scale?s=duotone spinner-scale}
 * @preview ![spinner-scale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/spinner-scale.svg)
 */
const SpinnerScale: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M72.2 120.2a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM97.6 369.1a32 32 0 1 0 45.3 45.2A32 32 0 1 0 97.6 369.1zM352.2 80.6a56 56 0 1 0 79.2 79.2A56 56 0 1 0 352.2 80.6zm17 288.5a32 32 0 1 0 45.3 45.3 32 32 0 1 0 -45.3-45.3z" />
        <path d="M256 12a52 52 0 1 0 0 104 52 52 0 1 0 0-104zm0 404a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM448 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM96 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default SpinnerScale;