
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-big-small` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-big-small?s=sharp-light arrow-up-big-small}
 * @preview ![arrow-up-big-small](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-up-big-small.svg)
 */
const ArrowUpBigSmall: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 32l32 0 160 0 32 0 0 32 0 160 0 32-32 0-160 0-32 0 0-32 0-160 0-32zm32 192l160 0 0-160L352 64l0 160zM160 33.4l11.3 11.3 88 88L270.6 144 248 166.6l-11.3-11.3L176 94.6 176 464l0 16-32 0 0-16 0-369.4L83.3 155.3 72 166.6 49.4 144l11.3-11.3 88-88L160 33.4zM352 320l96 0 32 0 0 32 0 96 0 32-32 0-96 0-32 0 0-32 0-96 0-32 32 0zm96 32l-96 0 0 96 96 0 0-96z" />
    </Icon>
);

export default ArrowUpBigSmall;