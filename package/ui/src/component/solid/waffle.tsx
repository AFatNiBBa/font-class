
import { Icon } from "../../index";

/**
 * A component that renders the `waffle` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/waffle?s=solid waffle}
 * @preview ![waffle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/waffle.svg)
 */
const Waffle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM160 80c-8.8 0-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 64-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 64-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 64 0 0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80 64 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-64 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-80 0 0-64 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-64 0 0-80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80-64 0 0-48c0-8.8-7.2-16-16-16zm16 256l0-64 64 0 0 64-64 0zm96 0l0-64 64 0 0 64-64 0zm64-160l0 64-64 0 0-64 64 0zm-96 0l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default Waffle;