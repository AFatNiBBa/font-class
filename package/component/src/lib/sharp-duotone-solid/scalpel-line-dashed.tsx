
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scalpel-line-dashed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scalpel-line-dashed?s=sharp-duotone-solid scalpel-line-dashed}
 * @preview ![scalpel-line-dashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/scalpel-line-dashed.svg)
 */
const ScalpelLineDashed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 512L176 320l112 0C288 496 0 512 0 512z" />
        <path d="M320 320L495.1 115.7C506 103 512 86.8 512 70.1l0-3.7C512 29.7 482.3 0 445.6 0c-18.8 0-36.8 8-49.4 22L128 320l192 0zM240 480l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0zm128 0l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0zm128 0l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0z" />
    </Icon>
);

export default ScalpelLineDashed;