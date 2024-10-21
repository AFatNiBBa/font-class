
import { Icon } from "../../index";

/**
 * A component that renders the `road-circle-xmark` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-circle-xmark?s=thin road-circle-xmark}
 * @preview ![road-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/road-circle-xmark.svg)
 */
const RoadCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M217.4 32C194 32 173 46.6 164.9 68.6L40.4 404.6C26.9 441.1 54 480 93 480l267.3 0c-4.2-5.1-8.1-10.4-11.8-16L328 464l0-43.4c-2-6.5-3.7-13.2-5-20c-.9-.4-1.9-.6-3-.6c-4.4 0-8 3.6-8 8l0 56L93 464c-27.9 0-47.2-27.8-37.5-53.9l124.4-336C185.7 58.4 200.7 48 217.4 48L312 48l0 56c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56 94.6 0c16.7 0 31.7 10.4 37.5 26.1l43.7 118.1c6 .3 11.9 .8 17.7 1.7L475.1 68.6C467 46.6 446 32 422.6 32L217.4 32zM328 200c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 112c0 4.4 3.6 8 8 8s8-3.6 8-8l0-112zm40 168a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zm272 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-132.7 0l50.3-50.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L496 356.7l-50.3-50.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L484.7 368l-50.3 50.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L496 379.3l50.3 50.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L507.3 368z" />
    </Icon>
);

export default RoadCircleXmark;