
import { Icon } from "../../index";

/**
 * A component that renders the `crow` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crow?s=regular crow}
 * @preview ![crow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/crow.svg)
 */
const Crow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M39.2 442.6l72-58.6 148.1 0 46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384l40.9 0c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192l0-64 0-8 96-24c-9.4-37.6-43.2-64-82-64l-43 0C496.1 12.3 469.5 0 440 0C382.6 0 336 46.6 336 104l0 35.1L94.1 336 80.9 346.8l-72 58.6s0 0 0 0s0 0 0 0C-1.4 413.8-3 428.9 5.4 439.2s23.5 11.8 33.8 3.5c0 0 0 0 0 0zM195.4 315.4L333.1 203.4c-10.9 51.4-51 93.1-104 104.7l-33.7 7.4zM384 161.9s0 0 0 0l0-22.8 0-35.1c0-30.9 25.1-56 56-56s56 25.1 56 56l0 24 0 64c0 79.5-64.5 144-144 144l-62.5 0c57.1-31.8 94.5-92.7 94.5-160.8l0-13.3zM464 104a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Crow;