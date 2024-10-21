
import { Icon } from "../../index";

/**
 * A component that renders the `sparkles` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sparkles?s=sharp-solid sparkles}
 * @preview ![sparkles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sparkles.svg)
 */
const Sparkles: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 64L416 0l32 64 64 32-64 32-32 64-32-64L320 96l64-32zM128 192L192 64l64 128 128 64L256 320 192 448 128 320 0 256l128-64zM416 320l32 64 64 32-64 32-32 64-32-64-64-32 64-32 32-64z" />
    </Icon>
);

export default Sparkles;