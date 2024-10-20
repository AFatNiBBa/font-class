
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-combined` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-combined?s=sharp-thin ruler-combined}
 * @preview ![ruler-combined](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ruler-combined.svg)
 */
const RulerCombined: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 304l-16 0 0-16 0-64 0-16 0-80 0-16 0-96 0-16L192 0 16 0 0 0 0 16 0 304 0 496l0 16 16 0 192 0 288 0 16 0 0-16 0-176 0-16-16 0-96 0-16 0-80 0-16 0-64 0zm160 16l0 88 0 8 16 0 0-8 0-88 96 0 0 176-288 0L16 496l0-192L16 16l176 0 0 96-88 0-8 0 0 16 8 0 88 0 0 80-88 0-8 0 0 16 8 0 88 0 0 80-88 0-8 0 0 16 8 0 88 0 0 88 0 8 16 0 0-8 0-88 80 0 0 88 0 8 16 0 0-8 0-88 80 0z" />
    </Icon>
);

export default RulerCombined;