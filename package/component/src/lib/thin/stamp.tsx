
import { Icon } from "../../index";

/**
 * A component that renders the `stamp` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stamp?s=thin stamp}
 * @preview ![stamp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/stamp.svg)
 */
const Stamp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 96c0 14.1-3.6 27.2-10 38.7c-9.6 17.4-22 39.8-22 65.1c0 48.7 39.5 88.2 88.2 88.2l7.8 0c53 0 96 43 96 96c0 8.8-7.2 16-16 16L32 400c-8.8 0-16-7.2-16-16c0-53 43-96 96-96l7.8 0c48.7 0 88.2-39.5 88.2-88.2c0-25.3-12.4-47.7-22-65.1c-6.3-11.5-10-24.6-10-38.7c0-44.2 35.8-80 80-80s80 35.8 80 80zM320 199.8c0-20.5 10.1-39.4 20-57.4c7.6-13.8 12-29.6 12-46.5c0-53-43-96-96-96s-96 43-96 96c0 16.9 4.3 32.7 12 46.5c9.9 18 20 36.8 20 57.4c0 39.9-32.3 72.2-72.2 72.2l-7.8 0C50.1 272 0 322.1 0 384c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32c0-61.9-50.1-112-112-112l-7.8 0c-39.9 0-72.2-32.3-72.2-72.2zM48 456c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 16c0 22.1 17.9 40 40 40l368 0c22.1 0 40-17.9 40-40l0-16c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 16c0 13.3-10.7 24-24 24L72 496c-13.3 0-24-10.7-24-24l0-16z" />
    </Icon>
);

export default Stamp;