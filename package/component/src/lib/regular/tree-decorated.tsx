
import { Icon } from "../../index";

/**
 * A component that renders the `tree-decorated` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-decorated?s=regular tree-decorated}
 * @preview ![tree-decorated](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/tree-decorated.svg)
 */
const TreeDecorated: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M242.9 9.3C238.4 3.4 231.4 0 224 0s-14.4 3.4-18.9 9.3L66.8 186.9c-5.6 7.2-6.6 17-2.6 25.3s12.4 13.5 21.6 13.5l16.5 0L35.1 326.2c-4.9 7.4-5.4 16.8-1.2 24.6s12.3 12.7 21.2 12.7l24 0L4.1 474.6c-5 7.4-5.5 16.9-1.3 24.7S15.1 512 24 512l400 0c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.3-24.7L369 363.5l24 0c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6L345.7 225.6l16.5 0c9.2 0 17.5-5.2 21.6-13.5s3-18-2.6-25.3L242.9 9.3zM147.2 177.6l-12.3 0L224 63.1l89.1 114.5-12.3 0c-8.9 0-17 4.9-21.2 12.7s-3.7 17.3 1.2 24.6l67.2 100.6-24.2 0c-8.9 0-17 4.9-21.2 12.7s-3.7 17.3 1.3 24.7L378.9 464 69.1 464l74.9-111.1c5-7.4 5.5-16.9 1.3-24.7s-12.3-12.7-21.2-12.7l-24.2 0 67.2-100.6c4.9-7.4 5.4-16.8 1.2-24.6s-12.3-12.7-21.2-12.7zM184 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-152a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm24 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default TreeDecorated;