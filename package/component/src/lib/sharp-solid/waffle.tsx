
import { Icon } from "../../index";

/**
 * A component that renders the `waffle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/waffle?s=sharp-solid waffle}
 * @preview ![waffle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/waffle.svg)
 */
const Waffle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM176 80l-32 0 0 16 0 48-48 0-16 0 0 32 16 0 48 0 0 64-80 0-16 0 0 32 16 0 80 0 0 64-48 0-16 0 0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 64 0 0 80 0 16 32 0 0-16 0-80 64 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-64 80 0 16 0 0-32-16 0-80 0 0-64 48 0 16 0 0-32-16 0-48 0 0-48 0-16-32 0 0 16 0 48-64 0 0-80 0-16-32 0 0 16 0 80-64 0 0-48 0-16zm0 256l0-64 64 0 0 64-64 0zm96 0l0-64 64 0 0 64-64 0zm64-160l0 64-64 0 0-64 64 0zm-96 0l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default Waffle;