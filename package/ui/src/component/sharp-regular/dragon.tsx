
import { Icon } from "../../index";

/**
 * A component that renders the `dragon` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dragon?s=sharp-regular dragon}
 * @preview ![dragon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dragon.svg)
 */
const Dragon: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M272 0l24 0L424 0l24 0 72 0 11 0 7.2 8.4 96 112 5.8 6.7 0 8.9 0 64 0 24-24 0-96 0-9.9 0-7-7-23-23 0 18.1 131.2 98.4 19.2 14.4L640 332l0 12 0 24 0 72 0 48 0 24-24 0-48 0-48 0-88 0L24 512 0 512l0-24 0-64 0-24 24 0 29.4 0 343-32.4-45.7-49.8-8.4-9.2-6.3-6.9 0-9.3 0-12.4 0-8 0-24 0-92-49.7-22.1L272 127.6l0-15.6 0-8 0-15.6 14.3-6.3 28-12.5L284.3 53 272 46.1 272 32l0-8 0-24zM424 48l-49.8 0 5.4 3 42.1 23.4-44 19.5L346.1 108l23.7 10.5 14.3 6.3 0 15.6L384 248l0 24 0 8 0 3.1 2.1 2.3 78.3 85.4L497 406.4l-48.1 4.5-392.2 37-1.1 .1-1.1 0L48 448l0 16 384 0 88 0 48 0 24 0 0-24 0-72 0-12-9.6-7.2L441.6 243.2 432 236l0-12 0-56 0-24 24 0 32 0 9.9 0 7 7 25 25 62.1 0 0-31.1L509 48l-61 0-24 0zm94.7 39.7c-1.8 5.3-5.5 10.1-10.8 13.1c-11.5 6.6-26.2 2.7-32.8-8.8c-2.9-5-3.8-10.6-2.9-15.9l46.4 11.6zm1.3-8.1l0 .9c0-.3 0-.6 0-.9zM160 96l144 86.4 0 97.6 0 34.2 5.3 5.8L96 320l80-80L0 256 160 96z" />
    </Icon>
);

export default Dragon;