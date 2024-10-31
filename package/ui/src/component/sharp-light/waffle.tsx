
import { Icon } from "../../index";

/**
 * A component that renders the `waffle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/waffle?s=sharp-light waffle}
 * @preview ![waffle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/waffle.svg)
 */
const Waffle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM272 80l0 64 64 0 0-32 0-16 32 0 0 16 0 32 32 0 16 0 0 32-16 0-32 0 0 64 64 0 16 0 0 32-16 0-64 0 0 64 32 0 16 0 0 32-16 0-32 0 0 32 0 16-32 0 0-16 0-32-64 0 0 64 0 16-32 0 0-16 0-64-64 0 0 32 0 16-32 0 0-16 0-32-32 0-16 0 0-32 16 0 32 0 0-64-64 0-16 0 0-32 16 0 64 0 0-64-32 0-16 0 0-32 16 0 32 0 0-32 0-16 32 0 0 16 0 32 64 0 0-64 0-16 32 0 0 16zm-96 96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0zm0-32l64 0 0-64-64 0 0 64z" />
    </Icon>
);

export default Waffle;