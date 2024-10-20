
import { Icon } from "../../index";

/**
 * A component that renders the `award` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/award?s=sharp-solid award}
 * @preview ![award](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/award.svg)
 */
const Award: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0l43.7 28.8L288 25.7l23.5 46.8L358.3 96l-3.1 52.3L384 192l-28.8 43.7 3.1 52.3-46.8 23.5L288 358.3l-52.3-3.1L192 384l-43.7-28.8L96 358.3 72.5 311.5 25.7 288l3.1-52.3L0 192l28.8-43.7L25.7 96 72.5 72.5 96 25.7l52.3 3.1L192 0zm80 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM0 456L49.8 337.6l17.6 35 9.4 18.8 21-1.2 41.7-2.4 31.9 21L128 512 75.8 456 0 456zm256 56L212.5 408.8l31.9-21 41.7 2.4 21 1.2 9.4-18.8 17.6-35L384 456l-75.8 0L256 512z" />
    </Icon>
);

export default Award;