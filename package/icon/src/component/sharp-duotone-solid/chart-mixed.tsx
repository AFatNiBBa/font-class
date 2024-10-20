
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-mixed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-mixed?s=sharp-duotone-solid chart-mixed}
 * @preview ![chart-mixed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-mixed.svg)
 */
const ChartMixed: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 320l0 160 64 0 0-160-64 0zm128-96l0 256 64 0 0-256-64 0zm128 64l0 192 64 0 0-192-64 0zm128-64l0 256 64 0 0-256-64 0z" />
        <path d="M500 89L340 217l-19.4 15.5-19.8-14.9L192.6 136.5 52 249 12 199 172 71l19.4-15.5 19.8 14.9 108.2 81.1L460 39l40 50z" />
    </Icon>
);

export default ChartMixed;