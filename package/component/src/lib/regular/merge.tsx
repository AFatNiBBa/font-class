
import { Icon } from "../../index";

/**
 * A component that renders the `merge` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/merge?s=regular merge}
 * @preview ![merge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/merge.svg)
 */
const Merge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 88C0 74.7 10.7 64 24 64l72 0 48.2 0c17.5 0 34 8.2 44.5 22.1L297.5 228.8c1.5 2 3.9 3.2 6.4 3.2l126.2 0-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39-126.2 0c-2.5 0-4.9 1.2-6.4 3.2L188.7 425.9c-10.6 13.9-27.1 22.1-44.5 22.1L96 448l-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0 48.2 0c2.5 0 4.9-1.2 6.4-3.2L257.8 256 150.5 115.2c-1.5-2-3.9-3.2-6.4-3.2L96 112l-72 0C10.7 112 0 101.3 0 88z" />
    </Icon>
);

export default Merge;