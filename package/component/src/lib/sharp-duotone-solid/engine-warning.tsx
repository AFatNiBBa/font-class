
import { Icon, generic } from "../../index";

/**
 * A component that renders the `engine-warning` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/engine-warning?s=sharp-duotone-solid engine-warning}
 * @preview ![engine-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/engine-warning.svg)
 */
const EngineWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 136l0 24L0 352l0 24 48 0 0-24 0-72 48 0 0-48-48 0 0-72 0-24L0 136zM184 64l0 48 24 0 72 0 0 32 48 0 0-32 72 0 24 0 0-48-24 0L208 64l-24 0zM544 192l0 256 96 0 0-256-96 0z" />
        <path d="M160 144l-64 0 0 240 76.8 0L224 448l288 0 0-240-80-64-224 0-48 0zm164 64l0 88 0 20-40 0 0-20 0-88 0-20 40 0 0 20zm4 144l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default EngineWarning;