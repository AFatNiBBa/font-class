
import { Icon } from "../../index";

/**
 * A component that renders the `light-ceiling` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-ceiling?s=sharp-solid light-ceiling}
 * @preview ![light-ceiling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/light-ceiling.svg)
 */
const LightCeiling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 162L224 0l64 0 0 162c126.3 15.7 224 123.5 224 254L0 416C0 285.5 97.7 177.7 224 162zm32 350c-35.3 0-64-28.7-64-64l128 0c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default LightCeiling;