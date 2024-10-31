
import { Icon } from "../../index";

/**
 * A component that renders the `highlighter` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/highlighter?s=sharp-light highlighter}
 * @preview ![highlighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/highlighter.svg)
 */
const Highlighter: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M263.4 416l72.6 0L560 80 480 0 144 224l0 72.6L94.6 346 72 368.6 88.4 385 4.7 468.7 0 473.4 0 480l0 16 0 16 16 0 112 0 6.6 0 4.7-4.7L175 471.6 191.4 488 214 465.4 263.4 416zm-111 33l-31 31-82.7 0L111 407.6 152.4 449zm39-6.2l-74.1-74.1 49.4-49.4 9.4-9.4 0-13.3 0-55.5 35.1-23.4L342.3 348.9 318.9 384l-55.5 0-13.3 0-9.4 9.4-49.4 49.4zm46.9-243.1L475.9 41.2l42.9 42.9L360.4 321.7 238.2 199.6z" />
    </Icon>
);

export default Highlighter;