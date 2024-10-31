
import { Icon } from "../../index";

/**
 * A component that renders the `q` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/q?s=regular q}
 * @preview ![q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/q.svg)
 */
const Q: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 256c0 97.2 78.8 176 176 176c35.7 0 69-10.6 96.7-28.9l-91-107.6c-8.6-10.1-7.3-25.3 2.8-33.8s25.3-7.3 33.8 2.8l90.5 107C383.7 340.6 400 300.2 400 256c0-97.2-78.8-176-176-176S48 158.8 48 256zM351.9 439.9C315.6 465.2 271.5 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 58.9-22.7 112.5-59.9 152.4l54.2 64.1c8.6 10.1 7.3 25.3-2.8 33.8s-25.3 7.3-33.8-2.8l-53.8-63.6z" />
    </Icon>
);

export default Q;