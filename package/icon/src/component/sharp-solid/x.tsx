
import { Icon } from "../../index";

/**
 * A component that renders the `x` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/x?s=sharp-solid x}
 * @preview ![x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/x.svg)
 */
const X: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M306.2 32l77.5 0-1.4 2L230.7 256 382.3 478l1.4 2-77.5 0L192 312.8 77.8 480 .3 480l1.4-2L153.3 256 1.7 34 .3 32l77.5 0L192 199.2 306.2 32z" />
    </Icon>
);

export default X;