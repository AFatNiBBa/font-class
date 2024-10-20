
import { Icon } from "../../index";

/**
 * A component that renders the `tick` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tick?s=regular tick}
 * @preview ![tick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/tick.svg)
 */
const Tick: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M72 104c0-13.3 10.7-24 24-24s24 10.7 24 24l0 1.9c0 1.4-.1 2.8-.4 4.3c0 0 0 0 0 0L96 252 72.4 110.1c-.2-1.4-.4-2.8-.4-4.3l0-1.9zm95 14c.7-4 1-8.1 1-12.1l0-1.9c0-39.8-32.2-72-72-72s-72 32.2-72 72l0 1.9c0 4.1 .3 8.1 1 12.1L49.4 264.5C53.2 287.3 72.9 304 96 304s42.8-16.7 46.6-39.5L167 118z" />
    </Icon>
);

export default Tick;