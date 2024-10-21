
import { Icon } from "../../index";

/**
 * A component that renders the `highlighter` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/highlighter?s=sharp-regular highlighter}
 * @preview ![highlighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/highlighter.svg)
 */
const Highlighter: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M184 315.9l-14.1 14.1L131.9 368 184 420.1l38.1-38.1L236.1 368l19.9 0 47.4 0 16.2-22.5-113-113L184 248.6l0 47.4 0 19.9zm62-111.8L347.9 306 489.2 109.1 442.9 62.8 246 204.1zM136 224L448 0 552 104 328 416l-72 0-38.1 38.1-33.7 33.7-.2 .2-.3-.3L169 473l-32 32-7 7-9.9 0-96 0L0 512l0-24 0-16 0-9.9 7-7 72-72L64 368l72-72 0-72zM113 417l-47 47 44.1 0 25-25L113 417z" />
    </Icon>
);

export default Highlighter;