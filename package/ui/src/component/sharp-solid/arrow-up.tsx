
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up?s=sharp-solid arrow-up}
 * @preview ![arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-up.svg)
 */
const ArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M214.6 57.4L192 34.7 169.4 57.4l-144 144L2.7 224 48 269.2l22.6-22.6L160 157.2 160 448l0 32 64 0 0-32 0-290.7 89.4 89.4L336 269.2 381.3 224l-22.6-22.6-144-144z" />
    </Icon>
);

export default ArrowUp;