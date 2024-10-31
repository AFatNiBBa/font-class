
import { Icon } from "../../index";

/**
 * A component that renders the `merge` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/merge?s=light merge}
 * @preview ![merge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/merge.svg)
 */
const Merge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 80c0-8.8 7.2-16 16-16l80 0 47.7 0c15.4 0 29.8 7.3 38.8 19.8L291.4 233.4c3 4.1 7.8 6.6 12.9 6.6l153.1 0-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l80 80c6.2 6.2 6.2 16.4 0 22.6l-80 80c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L457.4 272l-153.1 0c-5.1 0-9.9 2.4-12.9 6.6L182.5 428.2c-9 12.4-23.5 19.8-38.8 19.8L96 448l-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 47.7 0c5.1 0 9.9-2.4 12.9-6.6L265.5 259.8c1-1.3 2-2.6 3-3.8c-1.1-1.2-2.1-2.5-3-3.8L156.6 102.6c-3-4.1-7.8-6.6-12.9-6.6L96 96 16 96C7.2 96 0 88.8 0 80z" />
    </Icon>
);

export default Merge;