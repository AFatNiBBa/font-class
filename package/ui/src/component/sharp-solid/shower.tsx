
import { Icon } from "../../index";

/**
 * A component that renders the `shower` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shower?s=sharp-solid shower}
 * @preview ![shower](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shower.svg)
 */
const Shower: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32L0 32 0 64 0 448l0 32 64 0 0-32L64 96l50.7 0 26.7 26.7c-21 38.9-17.4 87.5 10.9 123L151 247l-17 17L168 297.9l17-17L345 121l17-17L328 70.1 311 87l-1.3 1.3c-35.5-28.3-84.2-31.9-123-10.9L150.6 41.4 141.3 32 128 32 32 32zM256 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm32-32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Shower;