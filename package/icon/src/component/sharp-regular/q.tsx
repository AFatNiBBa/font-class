
import { Icon } from "../../index";

/**
 * A component that renders the `q` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/q?s=sharp-regular q}
 * @preview ![q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/q.svg)
 */
const Q: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 256c0 97.2 78.8 176 176 176c31 0 60.1-8 85.4-22.1L194.9 256l59.8 0 93 125.1C380 349.2 400 304.9 400 256c0-97.2-78.8-176-176-176S48 158.8 48 256zM338.2 448.7C304.8 468.6 265.7 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 64.7-27.5 123.1-71.4 163.9L445.1 512l-59.8 0-47-63.3z" />
    </Icon>
);

export default Q;