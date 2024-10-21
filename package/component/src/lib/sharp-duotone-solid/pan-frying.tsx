
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pan-frying` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pan-frying?s=sharp-duotone-solid pan-frying}
 * @preview ![pan-frying](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pan-frying.svg)
 */
const PanFrying: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M176 224a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M427.6 317.6C440.7 289.1 448 257.4 448 224C448 100.3 347.7 0 224 0S0 100.3 0 224S100.3 448 224 448c53.3 0 102.3-18.6 140.8-49.7L487.2 512l80.7-103.8L427.6 317.6zM254.1 115.6c15.2 15.8 44.5 32.9 65.8 38.4c13.7 3.5 26.4 11.6 35.5 23.9c21 28.4 15.1 68.5-13.3 89.5c-8.9 6.6-18.9 10.5-29.2 12c-18.6 2.6-42.2 16.3-51.6 32.6c-22.1 38.3-71 51.4-109.3 29.3s-51.4-71-29.3-109.3c12.4-21.4 19.4-53 21.5-77.6c1.3-14.9 7.8-29.4 19.4-40.5c25.5-24.5 66-23.7 90.5 1.8zM488 408a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default PanFrying;