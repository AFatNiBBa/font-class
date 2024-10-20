
import { Icon } from "../../index";

/**
 * A component that renders the `intersection` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/intersection?s=thin intersection}
 * @preview ![intersection](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/intersection.svg)
 */
const Intersection: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M24 480c4.4 0 8-3.6 8-8l0-264c0-88.4 71.6-160 160-160s160 71.6 160 160l0 264c0 4.4 3.6 8 8 8s8-3.6 8-8l0-264c0-97.2-78.8-176-176-176S16 110.8 16 208l0 264c0 4.4 3.6 8 8 8z" />
    </Icon>
);

export default Intersection;