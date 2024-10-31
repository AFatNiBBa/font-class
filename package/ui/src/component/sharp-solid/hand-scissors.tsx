
import { Icon } from "../../index";

/**
 * A component that renders the `hand-scissors` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-scissors?s=sharp-solid hand-scissors}
 * @preview ![hand-scissors](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hand-scissors.svg)
 */
const HandScissors: typeof Icon = x => (
    <Icon {...x}>
        <path d="M40 208L0 208l0 80 40 0 168 0 0 80 32 0 0 80 80 0 48 0 16 0c70.7 0 128-57.3 128-128l0-113.1c0-40.2-16-78.8-44.4-107.3C444.8 76.8 413.9 64 381.7 64L288 64l0 32.3 76.9 24.5 15.2 4.9-9.7 30.5-15.2-4.9L288 129.9c0 0 0 .1 0 .1L108 73.4l-38.2-12-24 76.3 38.2 12L269.5 208 40 208z" />
    </Icon>
);

export default HandScissors;