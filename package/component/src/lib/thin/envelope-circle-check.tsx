
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-circle-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-circle-check?s=thin envelope-circle-check}
 * @preview ![envelope-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/envelope-circle-check.svg)
 */
const EnvelopeCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 80l384 0c26.5 0 48 21.5 48 48l0 32c5.4 0 10.7 .2 16 .7l0-32.7c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l296.2 0c-4.2-5.1-8.1-10.4-11.8-16L64 432c-26.5 0-48-21.5-48-48l0-207.3L210.8 333.8c26.4 21.3 64 21.3 90.4 0l19.7-15.9c.8-8.1 2.2-16.1 4.1-23.9l-33.9 27.3c-20.5 16.5-49.8 16.5-70.3 0L16 156.2 16 128c0-26.5 21.5-48 48-48zM496 208a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm69.7-189.7c-3.1-3.1-8.2-3.1-11.3 0L480 364.7l-42.3-42.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l48 48c3.1 3.1 8.2 3.1 11.3 0l80-80c3.1-3.1 3.1-8.2 0-11.3z" />
    </Icon>
);

export default EnvelopeCircleCheck;