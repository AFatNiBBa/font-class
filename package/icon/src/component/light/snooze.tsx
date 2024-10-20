
import { Icon } from "../../index";

/**
 * A component that renders the `snooze` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snooze?s=light snooze}
 * @preview ![snooze](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/snooze.svg)
 */
const Snooze: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M176 32c-8.8 0-16-7.2-16-16s7.2-16 16-16L304 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4L214.6 128l89.4 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4L265.4 32 176 32zM0 240c0-8.8 7.2-16 16-16l192 0c6.1 0 11.6 3.4 14.3 8.8s2.1 11.9-1.5 16.8L48 480l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 512c-6.1 0-11.6-3.4-14.3-8.8s-2.1-11.9 1.5-16.8L176 256 16 256c-8.8 0-16-7.2-16-16zm304-16l128 0c6.2 0 11.8 3.5 14.4 9.1s1.9 12.1-1.9 16.9L337.3 384l94.7 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-6.2 0-11.8-3.5-14.4-9.1s-1.9-12.1 1.9-16.9L398.7 256 304 256c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default Snooze;