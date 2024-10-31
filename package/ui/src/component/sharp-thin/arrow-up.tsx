
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up?s=sharp-thin arrow-up}
 * @preview ![arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-up.svg)
 */
const ArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M197.8 42.5l-5.8-6-5.8 6-176 184-5.5 5.8 11.6 11.1 5.5-5.8L184 67.9 184 472l0 8 16 0 0-8 0-404.1L362.2 237.5l5.5 5.8 11.6-11.1-5.5-5.8-176-184z" />
    </Icon>
);

export default ArrowUp;