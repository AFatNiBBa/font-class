
import { Icon, generic } from "../../index";

/**
 * A component that renders the `envelope-circle-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-circle-check?s=duotone envelope-circle-check}
 * @preview ![envelope-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/envelope-circle-check.svg)
 */
const EnvelopeCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 112C0 85.5 21.5 64 48 64l416 0c26.5 0 48 21.5 48 48c0 15.1-7.1 29.3-19.2 38.4l-13.9 10.4c-66.6 6.4-122.4 50-146.3 109.8l-57.4 43c-11.4 8.5-27 8.5-38.4 0L19.2 150.4C7.1 141.3 0 127.1 0 112zm0 64L217.6 339.2c22.8 17.1 54 17.1 76.8 0l26.4-19.8c-.5 5.5-.8 11-.8 16.6c0 42.5 15.1 81.6 40.2 112L64 448c-35.3 0-64-28.7-64-64L0 176z" />
        <path d="M496 480a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
    </Icon>
);

export default EnvelopeCircleCheck;