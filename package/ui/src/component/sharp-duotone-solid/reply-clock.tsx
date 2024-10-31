
import { Icon, generic } from "../../index";

/**
 * A component that renders the `reply-clock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply-clock?s=sharp-duotone-solid reply-clock}
 * @preview ![reply-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/reply-clock.svg)
 */
const ReplyClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 240L192 416l32 0 0-96 80 0c61.9 0 112 50.1 112 112c0 48-32 80-32 80s128-48 128-176c0-5.6-.3-11.2-.8-16.6c-5 .4-10.1 .6-15.2 .6c-91.8 0-167.2-70.3-175.3-160L224 160l0-96-32 0L0 240z" />
        <path d="M496 288A144 144 0 1 0 496 0a144 144 0 1 0 0 288zM512 80l0 48 32 0 16 0 0 32-16 0-48 0-16 0 0-16 0-64 0-16 32 0 0 16z" />
    </Icon>
);

export default ReplyClock;