
import { Icon } from "../../index";

/**
 * A component that renders the `waffle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/waffle?s=sharp-thin waffle}
 * @preview ![waffle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/waffle.svg)
 */
const Waffle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM264 72l0 80 80 0 0-48 0-8 16 0 0 8 0 48 48 0 8 0 0 16-8 0-48 0 0 80 80 0 8 0 0 16-8 0-80 0 0 80 48 0 8 0 0 16-8 0-48 0 0 48 0 8-16 0 0-8 0-48-80 0 0 80 0 8-16 0 0-8 0-80-80 0 0 48 0 8-16 0 0-8 0-48-48 0-8 0 0-16 8 0 48 0 0-80-80 0-8 0 0-16 8 0 80 0 0-80-48 0-8 0 0-16 8 0 48 0 0-48 0-8 16 0 0 8 0 48 80 0 0-80 0-8 16 0 0 8zm-96 96l0 80 80 0 0-80-80 0zm0 96l0 80 80 0 0-80-80 0zm96 0l0 80 80 0 0-80-80 0zm0-16l80 0 0-80-80 0 0 80z" />
    </Icon>
);

export default Waffle;