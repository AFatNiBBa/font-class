
import { Icon } from "../../index";

/**
 * A component that renders the `martini-glass-empty` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass-empty?s=solid martini-glass-empty}
 * @preview ![martini-glass-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/martini-glass-empty.svg)
 */
const MartiniGlassEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 0C19.1 0 7.4 7.8 2.4 19.8s-2.2 25.7 6.9 34.9L224 269.3 224 448l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-178.7L502.6 54.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 0 480 0L32 0zM256 210.7L109.3 64l293.5 0L256 210.7z" />
    </Icon>
);

export default MartiniGlassEmpty;