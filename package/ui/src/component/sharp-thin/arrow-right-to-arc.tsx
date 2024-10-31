
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-arc` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-arc?s=sharp-thin arrow-right-to-arc}
 * @preview ![arrow-right-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-right-to-arc.svg)
 */
const ArrowRightToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256C496 123.5 388.5 16 256 16l-8 0 0-16 8 0C397.4 0 512 114.6 512 256s-114.6 256-256 256l-8 0 0-16 8 0c132.5 0 240-107.5 240-240zM197.2 121.9l152 128 7.3 6.1-7.3 6.1-152 128-6.1 5.2L180.7 383l6.1-5.2L322.1 264 8 264l-8 0 0-16 8 0 314.1 0L186.8 134.1l-6.1-5.2L191 116.7l6.1 5.2z" />
    </Icon>
);

export default ArrowRightToArc;