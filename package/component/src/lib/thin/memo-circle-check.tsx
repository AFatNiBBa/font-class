
import { Icon } from "../../index";

/**
 * A component that renders the `memo-circle-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo-circle-check?s=thin memo-circle-check}
 * @preview ![memo-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/memo-circle-check.svg)
 */
const MemoCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 16L64 16C37.5 16 16 37.5 16 64l0 384c0 26.5 21.5 48 48 48l247.2 0c5.8 5.5 12 10.6 18.5 15.3c-3.2 .5-6.4 .7-9.7 .7L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 134.6c-5.4 1.5-10.8 3.3-16 5.4l0-140c0-26.5-21.5-48-48-48zM64 136c0-4.4 3.6-8 8-8l240 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L72 144c-4.4 0-8-3.6-8-8zm8 88l208 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L72 240c-4.4 0-8-3.6-8-8s3.6-8 8-8zm0 96l144 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L72 336c-4.4 0-8-3.6-8-8s3.6-8 8-8zM432 496a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm58.3 98.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-80 80c-3.1 3.1-8.2 3.1-11.3 0l-48-48c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L416 396.7l74.3-74.3z" />
    </Icon>
);

export default MemoCircleCheck;