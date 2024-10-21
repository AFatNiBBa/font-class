
import { Icon } from "../../index";

/**
 * A component that renders the `igloo` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/igloo?s=regular igloo}
 * @preview ![igloo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/igloo.svg)
 */
const Igloo: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 432l-112 0 0-64 128 0 0 48c0 8.8-7.2 16-16 16zM395.4 320c-13.8-46.3-56.6-80-107.4-80s-93.6 33.7-107.4 80L144 320l0-128 288 0 0 128-36.6 0zm95.7-128c23.4 37 36.9 80.9 36.9 128l-48 0 0-128 11.1 0zM96 192l0 128-48 0c0-47.1 13.5-91 36.9-128L96 192zM288 80c5.4 0 10.7 .2 16 .5l0 63.5-179.2 0C167.7 104.3 225 80 288 80zm64 64l0-55.4c37.6 10.4 71.4 29.6 99.2 55.4L352 144zM176 368l0 64L64 432c-8.8 0-16-7.2-16-16l0-48 128 0zM64 480l112 0 224 0 112 0c35.3 0 64-28.7 64-64l0-96C576 160.9 447.1 32 288 32S0 160.9 0 320l0 96c0 35.3 28.7 64 64 64zM288 288c35.3 0 64 28.7 64 64l0 80-128 0 0-80c0-35.3 28.7-64 64-64z" />
    </Icon>
);

export default Igloo;