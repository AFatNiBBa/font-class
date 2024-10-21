
import { Icon } from "../../index";

/**
 * A component that renders the `waffle` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/waffle?s=thin waffle}
 * @preview ![waffle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/waffle.svg)
 */
const Waffle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM264 72l0 80 80 0 0-48c0-4.4 3.6-8 8-8s8 3.6 8 8l0 48 48 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-48 0 0 80 80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-80 0 0 80 48 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-48 0 0 48c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-48-80 0 0 80c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-80-80 0 0 48c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-48-48 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l48 0 0-80-80 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l80 0 0-80-48 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l48 0 0-48c0-4.4 3.6-8 8-8s8 3.6 8 8l0 48 80 0 0-80c0-4.4 3.6-8 8-8s8 3.6 8 8zm-96 96l0 80 80 0 0-80-80 0zm0 96l0 80 80 0 0-80-80 0zm96 0l0 80 80 0 0-80-80 0zm0-16l80 0 0-80-80 0 0 80z" />
    </Icon>
);

export default Waffle;