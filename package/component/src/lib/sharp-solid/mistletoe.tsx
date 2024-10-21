
import { Icon } from "../../index";

/**
 * A component that renders the `mistletoe` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mistletoe?s=sharp-solid mistletoe}
 * @preview ![mistletoe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mistletoe.svg)
 */
const Mistletoe: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M312 24l0-24L264 0l0 24 0 94.1-98 98L91.3 230.4C38.3 240.6 0 287 0 341c0 41.4 33.6 75 75 75c50.5 0 94.3-33.5 108.1-81.2c7.2 10.4 19.3 17.2 32.9 17.2c22.1 0 40-17.9 40-40s-17.9-40-40-40c-7.9 0-15.3 2.3-21.5 6.3l5.4-28.2L264 185.9l0 72.4c14.7 13.2 24 32.3 24 53.7c0 39.8-32.2 72-72 72c-7.2 0-14.2-1.1-20.8-3c-2.1 8.4-3.2 17.1-3.2 25.9l0 9.1c0 53 43 96 96 96s96-43 96-96l0-9.1c0-25.1-9-49.4-25.3-68.4L312 284l0-98.1L376.1 250l14.4 74.7C400.6 377.7 447 416 501 416c41.4 0 75-33.6 75-75c0-54-38.3-100.3-91.3-110.5L410 216.1l-98-98L312 24zm64 88a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
    </Icon>
);

export default Mistletoe;