
import { Icon, generic } from "../../index";

/**
 * A component that renders the `burger-fries` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger-fries?s=sharp-duotone-solid burger-fries}
 * @preview ![burger-fries](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/burger-fries.svg)
 */
const BurgerFries: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 80L18.7 192l41.1 0L41.8 90.5 0 80zM0 224L64 512l192 0 0-208L96 304 64 224 0 224zM64 32L97.4 221.4 117.7 272l10.3 0 0-181.3L112 0 64 32zM160 0l0 272 64 0 0-32 0-208L160 0zm96 48l0 224 4 0c2.2-5.2 4.7-10.3 7.6-15.3c3.1-5.3 7-11.3 11.9-17.7l10.2-25.5L320 32 256 48zm69.8 144l7.3 0c10.4-6.1 22-11.7 35-16.5L384 80 342.7 90.3 325.8 192z" />
        <path d="M640 319.8l0-32s-32-96-176-96s-176 96-176 96l0 32 352 0zm-272-64a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm96-32a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm64 32a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm-240 160l352 0 0-64-352 0 0 64zm0 96l352 0 0-64-352 0 0 64z" />
    </Icon>
);

export default BurgerFries;