
import { Icon } from "../../index";

/**
 * A component that renders the `award-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/award-simple?s=sharp-solid award-simple}
 * @preview ![award-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/award-simple.svg)
 */
const AwardSimple: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0l44.2 26.9L288 25.7l24.8 45.4L358.3 96l-1.2 51.8L384 192l-26.9 44.2 1.2 51.8-45.4 24.8L288 358.3l-51.8-1.2L192 384l-44.2-26.9L96 358.3 71.2 312.8 25.7 288l1.2-51.8L0 192l26.9-44.2L25.7 96 71.2 71.2 96 25.7l51.8 1.2L192 0zm80 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM64 512L92.6 388l42.8-1 39.9 24.3L192 421.5l16.6-10.1L248.5 387l42.8 1L320 512 192 480 64 512z" />
    </Icon>
);

export default AwardSimple;