
import { Icon, generic } from "../../index";

/**
 * A component that renders the `broom-wide` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broom-wide?s=sharp-duotone-solid broom-wide}
 * @preview ![broom-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/broom-wide.svg)
 */
const BroomWide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M328 136L464 0l48 48L376 184l-48-48z" />
        <path d="M288 96l-61.9 37.8L378.2 285.9 416 224 288 96zM240 512L356.7 321 191 155.3 0 272l68 68 60-20-20 60L240 512z" />
    </Icon>
);

export default BroomWide;