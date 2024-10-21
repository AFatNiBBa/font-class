
import { Icon } from "../../index";

/**
 * A component that renders the `road-lock` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-lock?s=thin road-lock}
 * @preview ![road-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/road-lock.svg)
 */
const RoadLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M217.4 32C194 32 173 46.6 164.9 68.6L40.4 404.6C26.9 441.1 54 480 93 480l291 0 0-16-56 0 0-56c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56L93 464c-27.9 0-47.2-27.8-37.5-53.9l124.4-336C185.7 58.4 200.7 48 217.4 48L312 48l0 56c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56 94.6 0c16.7 0 31.7 10.4 37.5 26.1l33.8 91.2c5.1-1.6 10.3-2.9 15.7-3.8l-34.4-93C467 46.6 446 32 422.6 32L217.4 32zM328 200c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 112c0 4.4 3.6 8 8 8s8-3.6 8-8l0-112zm200 8c26.5 0 48 21.5 48 48l0 64-96 0 0-64c0-26.5 21.5-48 48-48zm-64 48l0 64-16 0c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-16 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-16 80l16 0 16 0 96 0 16 0 16 0c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default RoadLock;