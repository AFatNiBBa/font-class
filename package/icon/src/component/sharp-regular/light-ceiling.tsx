
import { Icon } from "../../index";

/**
 * A component that renders the `light-ceiling` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-ceiling?s=sharp-regular light-ceiling}
 * @preview ![light-ceiling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/light-ceiling.svg)
 */
const LightCeiling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 24l0-24L232 0l0 24 0 137.1C117.9 171.7 25.5 257.2 4.5 368C1.5 383.5 0 399.6 0 416l48 0 416 0 48 0c0-16.4-1.5-32.5-4.5-48C486.5 257.2 394.1 171.7 280 161.1L280 24zM256 208c98.4 0 180.8 68.3 202.4 160L53.6 368C75.2 276.3 157.6 208 256 208zm0 304c35.3 0 64-28.7 64-64l-128 0c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default LightCeiling;