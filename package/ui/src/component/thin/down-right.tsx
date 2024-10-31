
import { Icon } from "../../index";

/**
 * A component that renders the `down-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-right?s=thin down-right}
 * @preview ![down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/down-right.svg)
 */
const DownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 416c8.8 0 16-7.2 16-16l0-235.7c0-11.2-9.1-20.3-20.3-20.3c-5.4 0-10.5 2.1-14.3 5.9l-75.7 75.7c-3.1 3.1-8.2 3.1-11.3 0L93.7 89c-5.7-5.7-13.5-9-21.7-9s-15.9 3.2-21.7 9L25 114.4c-5.7 5.7-9 13.5-9 21.7s3.2 15.9 9 21.7L161.7 294.3c1.5 1.5 2.3 3.5 2.3 5.7s-.8 4.2-2.3 5.7L85.9 381.4c-3.8 3.8-5.9 9-5.9 14.3c0 11.2 9.1 20.3 20.3 20.3L336 416zm32-16c0 17.7-14.3 32-32 32l-235.7 0c-20 0-36.3-16.2-36.3-36.3c0-9.6 3.8-18.9 10.6-25.7L144.7 300 13.7 169C4.9 160.2 0 148.4 0 136s4.9-24.2 13.7-33L39 77.7C47.8 68.9 59.6 64 72 64s24.2 4.9 33 13.7l131 131 70.1-70.1c6.8-6.8 16-10.6 25.7-10.6c20 0 36.3 16.2 36.3 36.3L368 400z" />
    </Icon>
);

export default DownRight;