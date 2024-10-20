
import { Icon } from "../../index";

/**
 * A component that renders the `trademark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trademark?s=sharp-thin trademark}
 * @preview ![trademark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/trademark.svg)
 */
const Trademark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 96l8 0 240 0 8 0 0 16-8 0-112 0 0 296 0 8-16 0 0-8 0-296L8 112l-8 0L0 96zm288 8l0-8 11.6 0 2.4 2.7L464 283.8 626 98.7l2.4-2.7L640 96l0 8 0 304 0 8-16 0 0-8 0-282.7-154 176-6 6.9-6-6.9-154-176L304 408l0 8-16 0 0-8 0-304z" />
    </Icon>
);

export default Trademark;