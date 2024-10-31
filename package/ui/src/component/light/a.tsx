
import { Icon } from "../../index";

/**
 * A component that renders the `a` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/a?s=light a}
 * @preview ![a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/a.svg)
 */
const A: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M206.7 41.8c-2.5-5.9-8.3-9.8-14.7-9.8s-12.2 3.8-14.7 9.8l-176 416c-3.4 8.1 .4 17.5 8.5 21s17.5-.4 21-8.5L67.2 384l249.6 0 36.5 86.2c3.4 8.1 12.8 11.9 21 8.5s11.9-12.8 8.5-21l-176-416zM303.2 352L80.8 352 192 89.1 303.2 352z" />
    </Icon>
);

export default A;