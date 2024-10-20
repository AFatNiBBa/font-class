
import { Icon } from "../../index";

/**
 * A component that renders the `highlighter` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/highlighter?s=sharp-solid highlighter}
 * @preview ![highlighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/highlighter.svg)
 */
const Highlighter: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M314.3 314.3L460.3 110.8 433.2 83.7 229.7 229.7l84.5 84.5zM128 320l0-96L440 0 544 104 320 416l-96 0-48 48L80 368l48-48s0 0 0 0zM4.7 468.7l65.4-65.4 70.6 70.6-33.4 33.4-4.7 4.7L96 512l-80 0L0 512l0-16 0-16 0-6.6 4.7-4.7z" />
    </Icon>
);

export default Highlighter;