
import { Icon } from "../../index";

/**
 * A component that renders the `moon-stars` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon-stars?s=thin moon-stars}
 * @preview ![moon-stars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/moon-stars.svg)
 */
const MoonStars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M328 8l0 48 48 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-48 0 0 48c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-48-48 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l48 0 0-48c0-4.4 3.6-8 8-8s8 3.6 8 8zM191.8 144C94.7 144 16 222.9 16 320.2s78.7 176.2 175.8 176.2c47.6 0 90.8-19 122.5-49.8c-9 1.6-18.3 2.4-27.8 2.4c-89.6 0-162.2-72.8-162.2-162.6c0-60.8 33.3-113.8 82.5-141.7c-4.9-.4-9.9-.6-14.9-.6zM0 320.2C0 214.1 85.8 128 191.8 128c5.5 0 10.9 .2 16.3 .7c7 .6 12.8 5.7 14.3 12.5s-1.6 13.9-7.7 17.3c-44.4 25.2-74.4 73-74.4 127.8c0 81 65.5 146.6 146.2 146.6c8.6 0 17-.7 25.1-2.2c6.9-1.2 13.8 2.2 17 8.5s1.9 13.8-3.1 18.7c-34.5 33.6-81.7 54.4-133.6 54.4C85.8 512.4 0 426.3 0 320.2zM416 128c4.4 0 8 3.6 8 8l0 80 80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-80 0 0 80c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-80-80 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l80 0 0-80c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default MoonStars;