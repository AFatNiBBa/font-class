
import { Icon } from "../../index";

/**
 * A component that renders the `microwave` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microwave?s=regular microwave}
 * @preview ![microwave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/microwave.svg)
 */
const Microwave: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 80c8.8 0 16 7.2 16 16l0 288c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l448 0zM64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8 352 0 0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 32zM432 136l0 208c0 13.3 10.7 24 24 24s24-10.7 24-24l0-208c0-13.3-10.7-24-24-24s-24 10.7-24 24zm-312-8c-13.3 0-24 10.7-24 24l0 176c0 13.3 10.7 24 24 24l240 0c13.3 0 24-10.7 24-24l0-176c0-13.3-10.7-24-24-24l-240 0z" />
    </Icon>
);

export default Microwave;