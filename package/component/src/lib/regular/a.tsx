
import { Icon } from "../../index";

/**
 * A component that renders the `a` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/a?s=regular a}
 * @preview ![a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/a.svg)
 */
const A: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M214.1 46.7C210.4 37.8 201.7 32 192 32s-18.4 5.8-22.1 14.7l-168 400c-5.1 12.2 .6 26.3 12.8 31.4s26.3-.6 31.4-12.8L80.3 384l223.5 0 34.1 81.3c5.1 12.2 19.2 18 31.4 12.8s18-19.2 12.8-31.4l-168-400zM283.6 336l-183.1 0L192 118l91.6 218z" />
    </Icon>
);

export default A;