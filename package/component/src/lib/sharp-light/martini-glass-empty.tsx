
import { Icon } from "../../index";

/**
 * A component that renders the `martini-glass-empty` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass-empty?s=sharp-light martini-glass-empty}
 * @preview ![martini-glass-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/martini-glass-empty.svg)
 */
const MartiniGlassEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 258.7L32 34.7 32 32l448 0 0 2.7-224 224zM512 0L480 0 32 0 0 0 0 32 0 48 233.4 281.4 240 288l0 192-96 0-16 0 0 32 16 0 112 0 112 0 16 0 0-32-16 0-96 0 0-192 6.6-6.6L512 48l0-16 0-32z" />
    </Icon>
);

export default MartiniGlassEmpty;