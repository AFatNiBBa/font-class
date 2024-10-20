
import { Icon } from "../../index";

/**
 * A component that renders the `pen-line` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-line?s=sharp-thin pen-line}
 * @preview ![pen-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pen-line.svg)
 */
const PenLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M4.4 494.4L0 512l17.6-4.4L160 472 500.7 131.3 512 120l-11.3-11.3L403.3 11.3 392 0 380.7 11.3 40 352 4.4 494.4zM22 490L54.4 360.2 313.7 101 411 198.3 151.8 457.6 22 490zM489.4 120l-67 67L325 89.7l67-67L489.4 120zM232 496l-8 0 0 16 8 0 336 0 8 0 0-16-8 0-336 0z" />
    </Icon>
);

export default PenLine;