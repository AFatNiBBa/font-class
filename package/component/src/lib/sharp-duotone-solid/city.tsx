
import { Icon, generic } from "../../index";

/**
 * A component that renders the `city` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/city?s=sharp-duotone-solid city}
 * @preview ![city](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/city.svg)
 */
const City: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96l64 0 48 0 64 0 48 0 64 0 0-96L480 0l0 192 160 0 0 320-160 0-128 0-64 0L0 512 0 192 0 96zm64 64l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zM192 160l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zM352 64l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm160 0l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0z" />
        <path d="M112 24l0-24L64 0l0 24 0 72 48 0 0-72zm112 0l0-24L176 0l0 24 0 72 48 0 0-72zM192 224l64 0 0-64-64 0 0 64zm384 32l-64 0 0 64 64 0 0-64zM64 416l64 0 0-64-64 0 0 64zm192-64l-64 0 0 64 64 0 0-64zm320 0l-64 0 0 64 64 0 0-64zM128 160l-64 0 0 64 64 0 0-64zm64 96l0 64 64 0 0-64-64 0zm-64 64l0-64-64 0 0 64 64 0z" />
    </Icon>
);

export default City;