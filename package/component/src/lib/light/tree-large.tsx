
import { Icon } from "../../index";

/**
 * A component that renders the `tree-large` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-large?s=light tree-large}
 * @preview ![tree-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/tree-large.svg)
 */
const TreeLarge: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0c4.8 0 9.3 2.2 12.4 5.9L377.7 178.6c4.1 5 6.3 11.2 6.3 17.6c0 15.3-12.4 27.8-27.8 27.8l-18.9 0 72.6 90.8c4 4.9 6.1 11.1 6.1 17.4c0 15.4-12.5 27.8-27.8 27.8l-21.3 0 76 107.6c3.4 4.7 5.2 10.4 5.2 16.2c0 15.5-12.6 28.1-28.1 28.1L288 512l-128 0L28.1 512C12.6 512 0 499.4 0 483.9c0-5.8 1.8-11.5 5.2-16.2L81.1 360l-21.3 0C44.5 360 32 347.5 32 332.2c0-6.3 2.2-12.5 6.1-17.4L110.7 224l-18.9 0C76.4 224 64 211.6 64 196.2c0-6.4 2.2-12.6 6.3-17.6L211.6 5.9c3-3.7 7.6-5.9 12.4-5.9zM160 480l128 0 124.4 0L322.9 353.2c-3.4-4.9-3.9-11.3-1.1-16.6s8.2-8.6 14.2-8.6l43.5 0-88-110c-3.8-4.8-4.6-11.4-1.9-16.9s8.3-9.1 14.4-9.1l43.3 0L224 41.3 100.7 192l43.3 0c6.2 0 11.8 3.5 14.4 9.1s1.9 12.1-1.9 16.9l-88 110 43.5 0c6 0 11.5 3.3 14.2 8.6s2.3 11.7-1.1 16.6L35.6 480 160 480z" />
    </Icon>
);

export default TreeLarge;