
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-blank` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-blank?s=sharp-duotone-solid house-blank}
 * @preview ![house-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/house-blank.svg)
 */
const HouseBlank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 272l.1 240 448.5 0-.5-224c-.1-5.3-.1-10.7-.1-16C437.3 210.7 362.7 149.3 288 88C213.3 149.3 138.7 210.7 64 272z" />
        <path d="M0 240L288 0 576 240v32H512L288 88 64 272H0V240z" />
    </Icon>
);

export default HouseBlank;