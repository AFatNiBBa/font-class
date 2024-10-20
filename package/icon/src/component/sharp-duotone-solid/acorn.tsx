
import { Icon, generic } from "../../index";

/**
 * A component that renders the `acorn` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/acorn?s=sharp-duotone-solid acorn}
 * @preview ![acorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/acorn.svg)
 */
const Acorn: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 192l0 32c0 80 32 208 176 256c144-48 176-176 176-256l0-32c-117.4 0-234.7 0-352 0z" />
        <path d="M259.7 48.4l13.7-19.7L233.9 1.4 220.3 21.1c-9 12.9-15.1 27.6-18.1 42.9L96 64C43 64 0 107 0 160l0 32 448 0 0-32c0-53-43-96-96-96L251.8 64c1.9-5.5 4.6-10.7 8-15.6z" />
    </Icon>
);

export default Acorn;