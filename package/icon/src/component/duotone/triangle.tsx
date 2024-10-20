
import { Icon, generic } from "../../index";

/**
 * A component that renders the `triangle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle?s=duotone triangle}
 * @preview ![triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/triangle.svg)
 */
const Triangle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M290.5 51.8C283.3 39.5 270.2 32 256 32s-27.3 7.5-34.5 19.8l-216 368c-7.3 12.4-7.3 27.7-.2 40.1S25.7 480 40 480l432 0c14.3 0 27.6-7.7 34.7-20.1s7-27.8-.2-40.1l-216-368z" />
    </Icon>
);

export default Triangle;