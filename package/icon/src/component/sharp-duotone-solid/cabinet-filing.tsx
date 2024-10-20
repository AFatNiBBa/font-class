
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cabinet-filing` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cabinet-filing?s=sharp-duotone-solid cabinet-filing}
 * @preview ![cabinet-filing](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cabinet-filing.svg)
 */
const CabinetFiling: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 0L448 0l0 240L0 240 0 0zM0 272l448 0 0 240L0 512 0 272zM128 96l0 16 0 16 0 16 0 16 16 0 16 0 0-16 0-16 128 0 0 16 0 16 16 0 16 0 0-16 0-16 0-16 0-16-16 0-16 0L160 96l-16 0-16 0zm0 256l0 16 0 16 0 16 0 16 32 0 0-16 0-16 128 0 0 16 0 16 16 0 16 0 0-16 0-16 0-16 0-16-16 0-16 0-144 0-16 0z" />
        <path d="M144 96l-16 0 0 16 0 32 0 16 32 0 0-16 0-16 128 0 0 16 0 16 32 0 0-16 0-32 0-16-16 0L144 96zm0 256l-16 0 0 16 0 32 0 16 32 0 0-16 0-16 128 0 0 16 0 16 32 0 0-16 0-32 0-16-16 0-160 0zM0 272l448 0 0-32L0 240l0 32z" />
    </Icon>
);

export default CabinetFiling;