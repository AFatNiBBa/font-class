
import { Icon, generic } from "../../index";

/**
 * A component that renders the `buildings` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/buildings?s=sharp-duotone-solid buildings}
 * @preview ![buildings](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/buildings.svg)
 */
const Buildings: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128L0 512l192 0 320 0 0-384L512 0 192 0l0 128L0 128zm64 64l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zM256 64l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zM384 64l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64z" />
        <path d="M256 64l64 0 0 64-64 0 0-64zM128 192l0 64-64 0 0-64 64 0zM320 320l-64 0 0-64 64 0 0 64zM128 288l0 64-64 0 0-64 64 0zm256 32l0-64 64 0 0 64-64 0zM448 64l0 64-64 0 0-64 64 0zM256 224l0-64 64 0 0 64-64 0zm192 0l-64 0 0-64 64 0 0 64z" />
    </Icon>
);

export default Buildings;