
import { Icon } from "../../index";

/**
 * A component that renders the `ampersand` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ampersand?s=regular ampersand}
 * @preview ![ampersand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ampersand.svg)
 */
const Ampersand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M178 80l44.4 0c27.4 0 49.7 22.2 49.7 49.7c0 16.2-7.9 31.4-21.2 40.7l-61.4 43-47.2-48.5C133.1 155.5 128 143 128 130c0-27.6 22.4-50 50-50zm45.3 168.2l55.1-38.5c26.1-18.3 41.7-48.1 41.7-80C320 75.7 276.3 32 222.3 32L178 32c-54.1 0-98 43.9-98 98c0 25.5 10 50 27.7 68.3l41.8 43L75.9 292.8C48.4 312 32 343.5 32 377.1C32 433.9 78.1 480 134.9 480l77.8 0c35.1 0 67.8-17.7 87-47.1l14.6-22.3 60.4 62.1c9.2 9.5 24.4 9.7 33.9 .5s9.7-24.4 .5-33.9l-67.9-69.8 70.8-108.3c7.3-11.1 4.1-26-7-33.2s-26-4.1-33.2 7L307 334.2l-83.7-86zm-39.8 27.9l96.6 99.3-20.5 31.3c-10.3 15.8-28 25.4-46.9 25.4l-77.8 0C104.6 432 80 407.4 80 377.1c0-17.9 8.7-34.7 23.4-45l80-56z" />
    </Icon>
);

export default Ampersand;