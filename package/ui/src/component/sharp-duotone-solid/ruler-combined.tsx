
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ruler-combined` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-combined?s=sharp-duotone-solid ruler-combined}
 * @preview ![ruler-combined](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ruler-combined.svg)
 */
const RulerCombined: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L0 320 0 512l192 0 320 0 0-192-96 0 0 80 0 16-32 0 0-16 0-80-64 0 0 80 0 16-32 0 0-16 0-80-64 0 0 80 0 16-32 0 0-16 0-80-80 0-16 0 0-32 16 0 80 0 0-64-80 0-16 0 0-32 16 0 80 0 0-64-80 0-16 0 0-32 16 0 80 0 0-96L0 0z" />
        <path d="M112 96L96 96l0 32 16 0 80 0 0-32-80 0zm80 96l-80 0-16 0 0 32 16 0 80 0 0-32zm0 96l-80 0-16 0 0 32 16 0 80 0 0 80 0 16 32 0 0-16 0-80-32 0 0-32zm128 32l-32 0 0 80 0 16 32 0 0-16 0-80zm96 80l0-80-32 0 0 80 0 16 32 0 0-16z" />
    </Icon>
);

export default RulerCombined;