
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-big-small` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-big-small?s=sharp-light arrow-down-big-small}
 * @preview ![arrow-down-big-small](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-down-big-small.svg)
 */
const ArrowDownBigSmall: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 478.6l11.3-11.3 88-88L270.6 368 248 345.4l-11.3 11.3L176 417.4 176 48l0-16-32 0 0 16 0 369.4L83.3 356.7 72 345.4 49.4 368l11.3 11.3 88 88L160 478.6zM352 320l-32 0 0 32 0 96 0 32 32 0 96 0 32 0 0-32 0-96 0-32-32 0-96 0zm96 32l0 96-96 0 0-96 96 0zM320 32l0 32 0 160 0 32 32 0 160 0 32 0 0-32 0-160 0-32-32 0L352 32l-32 0zM512 224l-160 0 0-160 160 0 0 160z" />
    </Icon>
);

export default ArrowDownBigSmall;