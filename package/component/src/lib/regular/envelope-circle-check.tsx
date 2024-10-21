
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-circle-check` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-circle-check?s=regular envelope-circle-check}
 * @preview ![envelope-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/envelope-circle-check.svg)
 */
const EnvelopeCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 112l384 0c8.8 0 16 7.2 16 16l0 22.1-22.6 18.5C458.6 163 477 160 496 160c5.4 0 10.7 .2 16 .7l0-32.7c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l296.2 0c-11.8-14.3-21.4-30.5-28.2-48L64 400c-8.8 0-16-7.2-16-16l0-171.8L190 328.8c37.7 31 91.8 31.5 130.1 1.5c.9-29.2 8.9-56.5 22.4-80.4l-50.9 41.8c-20.7 17-50.4 17-71.1 0L48 150.1 48 128c0-8.8 7.2-16 16-16zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z" />
    </Icon>
);

export default EnvelopeCircleCheck;