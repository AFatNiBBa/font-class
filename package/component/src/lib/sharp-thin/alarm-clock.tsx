
import { Icon } from "../../index";

/**
 * A component that renders the `alarm-clock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alarm-clock?s=sharp-thin alarm-clock}
 * @preview ![alarm-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/alarm-clock.svg)
 */
const AlarmClock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M93.7 0C42 0 0 42 0 93.7c0 18.5 5.4 35.8 14.6 50.3l4.3 6.7 13.5-8.6-4.3-6.7C20.4 123.4 16 109.1 16 93.7C16 50.8 50.8 16 93.7 16c20.4 0 39 7.9 52.8 20.7l5.9 5.4 10.9-11.7L157.4 25C140.7 9.5 118.3 0 93.7 0zM53.7 501.7l49.7-49.7C143.4 489.2 197 512 256 512s112.6-22.8 152.6-60.1l49.7 49.7 5.7 5.7L475.3 496l-5.7-5.7-49.7-49.7C457.2 400.6 480 347 480 288C480 164.3 379.7 64 256 64S32 164.3 32 288c0 59 22.8 112.6 60.1 152.6L42.3 490.3 36.7 496 48 507.3l5.7-5.7zM256 80a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm85 281.8l-77-61.6L264 168l0-8s0 0 0 0l-16 0s0 0 0 0l0 8 0 136 0 3.8s0 0 0 0l3 2.4s0 0 0 0l80 64s0 0 0 0l6.2 5s0 0 0 0l10-12.5s0 0 0 0l-6.2-5s0 0 0 0zM354.6 25l-5.9 5.4 10.9 11.7 5.9-5.4C379.3 23.9 397.9 16 418.3 16C461.2 16 496 50.8 496 93.7c0 15.4-4.4 29.7-12.1 41.7l-4.3 6.7 13.5 8.6 4.3-6.7c9.3-14.5 14.6-31.8 14.6-50.3C512 42 470 0 418.3 0c-24.6 0-47 9.5-63.7 25z" />
    </Icon>
);

export default AlarmClock;