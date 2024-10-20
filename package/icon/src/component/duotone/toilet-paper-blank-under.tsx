
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilet-paper-blank-under` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-paper-blank-under?s=duotone toilet-paper-blank-under}
 * @preview ![toilet-paper-blank-under](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/toilet-paper-blank-under.svg)
 */
const ToiletPaperBlankUnder: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192C0 86 43 0 96 0L416 0c-53 0-96 86-96 192c0 1.3 0 2.6 0 3.9c1 104.2 43.6 188.1 96 188.1l-256 0-32 0-32 0C43 384 0 298 0 192z" />
        <path d="M416 384c-52.4 0-94.9-83.8-96-188.1c0-1.3 0-2.6 0-3.9C320 86 363 0 416 0s96 86 96 192l0 272c0 26.5-21.5 48-48 48l-256 0c-26.5 0-48-21.5-48-48l0-80 256 0zm0-128c17.7 0 32-28.7 32-64s-14.3-64-32-64s-32 28.7-32 64s14.3 64 32 64z" />
    </Icon>
);

export default ToiletPaperBlankUnder;