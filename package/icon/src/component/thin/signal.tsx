
import { Icon } from "../../index";

/**
 * A component that renders the `signal` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal?s=thin signal}
 * @preview ![signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/signal.svg)
 */
const Signal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M584 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 496c0 4.4 3.6 8 8 8s8-3.6 8-8L584 8zM448 96c-4.4 0-8 3.6-8 8l0 400c0 4.4 3.6 8 8 8s8-3.6 8-8l0-400c0-4.4-3.6-8-8-8zM328 200c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 304c0 4.4 3.6 8 8 8s8-3.6 8-8l0-304zM192 288c-4.4 0-8 3.6-8 8l0 208c0 4.4 3.6 8 8 8s8-3.6 8-8l0-208c0-4.4-3.6-8-8-8zM64 384c-4.4 0-8 3.6-8 8l0 112c0 4.4 3.6 8 8 8s8-3.6 8-8l0-112c0-4.4-3.6-8-8-8z" />
    </Icon>
);

export default Signal;