
import { Icon } from "../../index";

/**
 * A component that renders the `disease` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/disease?s=sharp-solid disease}
 * @preview ![disease](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/disease.svg)
 */
const Disease: typeof Icon = x => (
    <Icon {...x}>
        <path d="M227 75.5l9.4-14.1C248.7 43 269.2 32 291.3 32c30.8 0 57.6 21.4 64.3 51.5l7.1 31.5c8.1 36.2 37.1 64 73.6 70.7l28 5.1c27.7 5.1 47.8 29.2 47.8 57.3c0 24.1-14.8 45.6-37.2 54.3L438 316.7c-32.5 12.6-53.9 43.9-53.9 78.8l0 25.2c0 32.7-26.5 59.3-59.3 59.3c-13.5 0-26.5-4.6-37-13l-30.9-24.7c-21.3-17-47.7-26.3-75-26.3l-10 0c-7.9 0-15.8 .9-23.6 2.6L86.1 432.4c-36 8-70.1-19.4-70.1-56.2c0-15.5 6.2-30.3 17.3-41.2l13.1-12.8c11.3-11 17.7-26.2 17.7-42c0-15.6-6.2-30.5-17.2-41.5L17.7 209.6C6.4 198.3 .1 183 .1 167.1c0-37.2 33.4-65.5 70.1-59.4l59.6 9.9c37.9 6.3 76-10.2 97.3-42.1zM120 224l40 40 40-40-40-40-40 40zm128 96l40 40 40-40-40-40-40 40zm56-88l24-24-24-24-24 24 24 24z" />
    </Icon>
);

export default Disease;