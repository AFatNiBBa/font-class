
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-middle-finger` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-middle-finger?s=sharp-duotone-solid hand-middle-finger}
 * @preview ![hand-middle-finger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-middle-finger.svg)
 */
const HandMiddleFinger: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M272 0L192 0l0 192-80 0 0 32 0 13.3 0 2.7 0 80 0 16-32 0 0-16 0-56L32 304l0 57.5c0 44.7 19.8 87 54.1 115.6c27 22.5 61.1 34.9 96.3 34.9L304 512c70.7 0 128-57.3 128-128l0-16 0-48 0-80-80 0 0-32-80 0L272 0z" />
    </Icon>
);

export default HandMiddleFinger;