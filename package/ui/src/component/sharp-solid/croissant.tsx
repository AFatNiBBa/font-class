
import { Icon } from "../../index";

/**
 * A component that renders the `croissant` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/croissant?s=sharp-solid croissant}
 * @preview ![croissant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/croissant.svg)
 */
const Croissant: typeof Icon = x => (
    <Icon {...x}>
        <path d="M6.3 227.9l231.9 98.9L60.7 464.8C22.6 416 0 354.7 0 288c0-20.6 2.2-40.7 6.3-60.1zm320.4 10.3L227.9 6.3C247.3 2.2 267.4 0 288 0c66.7 0 128 22.6 176.8 60.7L326.7 238.2zM468.6 108C487 130 501.8 155.3 512 182.7L480 224l-90-15 78.6-101zM209 390l15 90-41.3 32c-27.4-10.2-52.7-25-74.7-43.4L209 390zM0 190.4C30.2 100.9 100.9 30.3 190.4 0L306.4 272 272 306.4 0 190.4z" />
    </Icon>
);

export default Croissant;