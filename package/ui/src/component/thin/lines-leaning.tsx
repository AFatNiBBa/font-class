
import { Icon } from "../../index";

/**
 * A component that renders the `lines-leaning` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lines-leaning?s=thin lines-leaning}
 * @preview ![lines-leaning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/lines-leaning.svg)
 */
const LinesLeaning: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M376 32c-4.4 0-8 3.6-8 8l0 432c0 4.4 3.6 8 8 8s8-3.6 8-8l0-432c0-4.4-3.6-8-8-8zm-94 .3c-4.3-1.1-8.6 1.5-9.8 5.7l-112 432c-1.1 4.3 1.5 8.6 5.7 9.8s8.6-1.5 9.8-5.7l112-432c1.1-4.3-1.5-8.6-5.7-9.8zM175.5 42.8c1.5-4.1-.6-8.7-4.7-10.3s-8.7 .6-10.3 4.7L.5 469.2c-1.5 4.1 .6 8.7 4.7 10.3s8.7-.6 10.3-4.7l160-432z" />
    </Icon>
);

export default LinesLeaning;