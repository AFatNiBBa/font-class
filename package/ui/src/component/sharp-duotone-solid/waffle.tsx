
import { Icon, generic } from "../../index";

/**
 * A component that renders the `waffle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/waffle?s=sharp-duotone-solid waffle}
 * @preview ![waffle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/waffle.svg)
 */
const Waffle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm48-16l16 0 80 0 0-64-48 0-16 0 0-32 16 0 48 0 0-48 0-16 32 0 0 16 0 48 64 0 0-80 0-16 32 0 0 16 0 80 64 0 0-48 0-16 32 0 0 16 0 48 48 0 16 0 0 32-16 0-48 0 0 64 80 0 16 0 0 32-16 0-80 0 0 64 48 0 16 0 0 32-16 0-48 0 0 48 0 16-32 0 0-16 0-48-64 0 0 80 0 16-32 0 0-16 0-80-64 0 0 48 0 16-32 0 0-16 0-48-48 0-16 0 0-32 16 0 48 0 0-64-80 0-16 0 0-32zm128-64l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm96-96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0z" />
        <path d="M272 64l0-16-32 0 0 16 0 80-64 0 0-48 0-16-32 0 0 16 0 48-48 0-16 0 0 32 16 0 48 0 0 64-80 0-16 0 0 32 16 0 80 0 0 64-48 0-16 0 0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 64 0 0 80 0 16 32 0 0-16 0-80 64 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-64 80 0 16 0 0-32-16 0-80 0 0-64 48 0 16 0 0-32-16 0-48 0 0-48 0-16-32 0 0 16 0 48-64 0 0-80zm64 272l-64 0 0-64 64 0 0 64zm-96 0l-64 0 0-64 64 0 0 64zm0-96l-64 0 0-64 64 0 0 64zm96 0l-64 0 0-64 64 0 0 64z" />
    </Icon>
);

export default Waffle;