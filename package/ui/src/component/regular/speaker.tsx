
import { Icon } from "../../index";

/**
 * A component that renders the `speaker` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/speaker?s=regular speaker}
 * @preview ![speaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/speaker.svg)
 */
const Speaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 48c8.8 0 16 7.2 16 16l0 384c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l256 0zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM232 120a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zM192 432a104 104 0 1 0 0-208 104 104 0 1 0 0 208zM136 328a56 56 0 1 1 112 0 56 56 0 1 1 -112 0z" />
    </Icon>
);

export default Speaker;