
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-d20` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d20?s=sharp-duotone-solid dice-d20}
 * @preview ![dice-d20](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dice-d20.svg)
 */
const DiceD20: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M27.8 113.2L220.9 1.8 117.3 166.9 27.8 113.2zM149.4 176L256 6.1 362.6 176l-213.2 0zM291.1 1.8L484.2 113.2l-89.5 53.7L291.1 1.8z" />
        <path d="M240 512L17.9 416.8 240 446l0 66zm254.1-95.2L272 512l0-66 222.1-29.2zM496 143.5l0 184.9L411.7 194 496 143.5zM16 328.4l0-184.9L100.3 194 16 328.4zM155.6 208l200.9 0L256 383.8 155.6 208zM276 413.2L388.2 216.8 493.5 384.6 276 413.2zM18.5 384.6L123.8 216.8 236 413.2 18.5 384.6z" />
    </Icon>
);

export default DiceD20;