
import { Icon } from "../../index";

/**
 * A component that renders the `down-to-line` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-line?s=thin down-to-line}
 * @preview ![down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/down-to-line.svg)
 */
const DownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 464l368 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 480c-4.4 0-8-3.6-8-8s3.6-8 8-8zm176-99.3c2.1 2.1 5 3.3 8 3.3s5.9-1.2 8-3.3L331.8 232.6c2.7-2.7 4.2-6.4 4.2-10.2c0-8-6.5-14.4-14.4-14.4L248 208c-4.4 0-8-3.6-8-8l0-136c0-8.8-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16l0 136c0 4.4-3.6 8-8 8l-73.6 0c-8 0-14.4 6.5-14.4 14.4c0 3.8 1.5 7.5 4.2 10.2L184 364.7zm8 19.3c-7.2 0-14.2-2.9-19.3-8L40.9 243.9c-5.7-5.7-8.9-13.4-8.9-21.5C32 205.6 45.6 192 62.4 192l65.6 0 0-128c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 128 65.6 0c16.8 0 30.4 13.6 30.4 30.4c0 8.1-3.2 15.8-8.9 21.5L211.3 376c-5.1 5.1-12.1 8-19.3 8z" />
    </Icon>
);

export default DownToLine;