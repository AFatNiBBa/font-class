
import { Icon, generic } from "../../index";

/**
 * A component that renders the `radiation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radiation?s=sharp-duotone-solid radiation}
 * @preview ![radiation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/radiation.svg)
 */
const Radiation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M208 256a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M176 256c0-29.6 16.1-55.5 40-69.3L128 34.3C51.5 78.5 0 161.3 0 256l176 0zm40 69.3L128 477.7c37.7 21.8 81.4 34.3 128 34.3s90.4-12.5 128-34.3L296 325.3c-11.8 6.8-25.4 10.7-40 10.7s-28.2-3.9-40-10.7zM336 256l176 0c0-94.7-51.5-177.5-128-221.7L296 186.7c23.9 13.8 40 39.7 40 69.3z" />
    </Icon>
);

export default Radiation;