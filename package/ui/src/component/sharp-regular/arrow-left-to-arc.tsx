
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-to-arc` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-arc?s=sharp-regular arrow-left-to-arc}
 * @preview ![arrow-left-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-left-to-arc.svg)
 */
const ArrowLeftToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M279.7 134.4l-112 104L148.7 256l18.9 17.6 112 104 17.6 16.3 32.7-35.2-17.6-16.3L245.1 280 488 280l24 0 0-48-24 0-242.9 0 67.2-62.4 17.6-16.3-32.7-35.2-17.6 16.3zM48 256C48 141.1 141.1 48 256 48l24 0 0-48L256 0C114.6 0 0 114.6 0 256S114.6 512 256 512l24 0 0-48-24 0C141.1 464 48 370.9 48 256z" />
    </Icon>
);

export default ArrowLeftToArc;