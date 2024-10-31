
import { Icon } from "../../index";

/**
 * A component that renders the `signal` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal?s=sharp-thin signal}
 * @preview ![signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/signal.svg)
 */
const Signal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M584 8l0-8L568 0l0 8 0 496 0 8 16 0 0-8L584 8zM456 96l-16 0 0 8 0 400 0 8 16 0 0-8 0-400 0-8zM328 200l0-8-16 0 0 8 0 304 0 8 16 0 0-8 0-304zM200 288l-16 0 0 8 0 208 0 8 16 0 0-8 0-208 0-8zM72 384l-16 0 0 8 0 112 0 8 16 0 0-8 0-112 0-8z" />
    </Icon>
);

export default Signal;