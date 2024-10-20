
import { Icon, generic } from "../../index";

/**
 * A component that renders the `terminal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/terminal?s=duotone terminal}
 * @preview ![terminal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/terminal.svg)
 */
const Terminal: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M224 448c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32z" />
        <path d="M9.4 41.4C-3.1 53.9-3.1 74.1 9.4 86.6L178.7 256 9.4 425.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3l-192-192c-12.5-12.5-32.8-12.5-45.3 0z" />
    </Icon>
);

export default Terminal;