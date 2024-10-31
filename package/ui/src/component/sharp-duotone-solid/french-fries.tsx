
import { Icon, generic } from "../../index";

/**
 * A component that renders the `french-fries` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/french-fries?s=sharp-duotone-solid french-fries}
 * @preview ![french-fries](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/french-fries.svg)
 */
const FrenchFries: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 80L41.8 90.5 59.7 192l-41.1 0L0 80zM64 32L112 0l16 90.7L128 272l-10.3 0L97.4 221.4 64 32zM160 0l64 32 0 208 0 32-64 0L160 0zm96 48l64-16L289.8 213.4 266.3 272 256 272l0-224zm69.8 144L342.7 90.3 384 80 365.3 192l-39.6 0z" />
        <path d="M64 512L0 224H64l32 80H288l32-80h64L320 512H64z" />
    </Icon>
);

export default FrenchFries;