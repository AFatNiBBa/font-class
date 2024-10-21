
import { Icon } from "../../index";

/**
 * A component that renders the `chalkboard` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard?s=thin chalkboard}
 * @preview ![chalkboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chalkboard.svg)
 */
const Chalkboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 48C62.3 48 48 62.3 48 80l0 352-16 0L32 80c0-26.5 21.5-48 48-48l416 0c26.5 0 48 21.5 48 48l0 352-16 0 0-352c0-17.7-14.3-32-32-32L80 48zM0 472c0-4.4 3.6-8 8-8l248 0 0-40c0-22.1 17.9-40 40-40l80 0c22.1 0 40 17.9 40 40l0 40 152 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-152 0-8 0-144 0-8 0L8 480c-4.4 0-8-3.6-8-8zm400-8l0-40c0-13.3-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24l0 40 128 0z" />
    </Icon>
);

export default Chalkboard;