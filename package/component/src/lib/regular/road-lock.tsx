
import { Icon } from "../../index";

/**
 * A component that renders the `road-lock` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-lock?s=regular road-lock}
 * @preview ![road-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/road-lock.svg)
 */
const RoadLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M217.7 32c-30.4 0-57.5 19-67.7 47.6L40.6 383.6C23.7 430.5 58.4 480 108.3 480L384 480l0-48-40 0 0-24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24-187.7 0c-16.6 0-28.2-16.5-22.6-32.1l109.4-304c3.4-9.5 12.5-15.9 22.6-15.9L296 80l0 24c0 13.3 10.7 24 24 24s24-10.7 24-24l0-24 78.3 0c10.1 0 19.2 6.3 22.6 15.9l28.3 78.5c13.8-7.8 29.4-12.7 46-14L490 79.6C479.7 51 452.6 32 422.3 32L217.7 32zM344 216c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-80zm184 24c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default RoadLock;