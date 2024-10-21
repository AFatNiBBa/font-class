
import { Icon } from "../../index";

/**
 * A component that renders the `reply-clock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply-clock?s=sharp-thin reply-clock}
 * @preview ![reply-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/reply-clock.svg)
 */
const ReplyClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M496 16a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 272A144 144 0 1 0 496 0a144 144 0 1 0 0 288zm8-224l-16 0 0 8 0 72 0 8 8 0 56 0 8 0 0-16-8 0-48 0 0-64 0-8zm8 272c0-5.6-.3-11.2-.8-16.6c-5 .4-10.1 .6-15.2 .6l-.8 0c.5 5.3 .8 10.6 .8 16c0 58-28.8 97.9-58.5 124c-3.7 3.2-7.4 6.2-11 9c3.3-11 5.6-23.4 5.6-37c0-70.7-57.3-128-128-128l-80 0-16 0 0 16 0 80-9.8 0L23.7 240 198.2 80l9.8 0 0 80 0 16 16 0 98.9 0c-1-5.3-1.7-10.6-2.2-16L240 160l-16 0 0-16 0-64 0-16-16 0-16 0L11.8 229.1 0 240l11.8 10.9L192 416l16 0 16 0 0-16 0-64 0-16 16 0 64 0c61.9 0 112 50.1 112 112c0 21.2-6.2 39.2-13.2 52.8C394 502 384 512 384 512s13.1-4.9 30.8-15.7C452.7 473.2 512 423.1 512 336z" />
    </Icon>
);

export default ReplyClock;