
import { Icon } from "../../index";

/**
 * A component that renders the `helmet-safety` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helmet-safety?s=thin helmet-safety}
 * @preview ![helmet-safety](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/helmet-safety.svg)
 */
const HelmetSafety: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M232 72l0 208c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-208c0-22.1 17.9-40 40-40l64 0c22.1 0 40 17.9 40 40l0 208c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-208c0-13.3-10.7-24-24-24l-64 0c-13.3 0-24 10.7-24 24zm-40 1.3L192 90C108.4 117 48 195.5 48 288l0 32-16 0 0-32C32 186.5 99.5 100.8 192 73.3zM384 90l0-16.8c91.8 27.3 158.9 111.9 160 212.3l0 2.4 0 32-16 0 0-34.4C527 194.1 466.9 116.8 384 90zM537.3 368L38.7 368C26.2 368 16 378.2 16 390.7c0 6.6 2.7 11.4 6.6 13.9C50.7 422.7 131.9 464 288 464s237.3-41.3 265.4-59.4c3.8-2.5 6.6-7.3 6.6-13.9c0-12.6-10.2-22.7-22.7-22.7zM38.7 352l498.5 0c21.4 0 38.7 17.3 38.7 38.7c0 11-4.7 21.4-13.9 27.3C531.3 437.9 447.1 480 288 480s-243.3-42.1-274.1-61.9C4.7 412.1 0 401.7 0 390.7C0 369.3 17.3 352 38.7 352z" />
    </Icon>
);

export default HelmetSafety;