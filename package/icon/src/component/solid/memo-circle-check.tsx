
import { Icon } from "../../index";

/**
 * A component that renders the `memo-circle-check` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo-circle-check?s=solid memo-circle-check}
 * @preview ![memo-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/memo-circle-check.svg)
 */
const MemoCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 134.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7L64 512c-35.3 0-64-28.7-64-64L0 64zm64 80c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 128c-8.8 0-16 7.2-16 16zm16 80c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 224zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0zm208 48a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm188.7-43.3L416 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0z" />
    </Icon>
);

export default MemoCircleCheck;