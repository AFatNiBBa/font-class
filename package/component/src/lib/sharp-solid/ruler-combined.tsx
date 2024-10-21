
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-combined` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-combined?s=sharp-solid ruler-combined}
 * @preview ![ruler-combined](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ruler-combined.svg)
 */
const RulerCombined: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 512L0 320 0 0 192 0l0 96-80 0L96 96l0 32 16 0 80 0 0 64-80 0-16 0 0 32 16 0 80 0 0 64-80 0-16 0 0 32 16 0 80 0 0 80 0 16 32 0 0-16 0-80 64 0 0 80 0 16 32 0 0-16 0-80 64 0 0 80 0 16 32 0 0-16 0-80 96 0 0 192-320 0L0 512z" />
    </Icon>
);

export default RulerCombined;