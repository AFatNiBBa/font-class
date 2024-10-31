
import { Icon } from "../../index";

/**
 * A component that renders the `sort` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort?s=thin sort}
 * @preview ![sort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/sort.svg)
 */
const Sort: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M19.5 186.7c-2.2 2.3-3.5 5.4-3.5 8.7c0 7 5.6 12.6 12.6 12.6l262.8 0c7 0 12.6-5.6 12.6-12.6c0-3.2-1.2-6.3-3.5-8.7L175.4 54.6c-4-4.2-9.6-6.6-15.4-6.6s-11.4 2.4-15.4 6.6L19.5 186.7zm-11.6-11L133 43.6c7-7.4 16.8-11.6 27-11.6s20 4.2 27 11.6L312.2 175.7c5 5.3 7.8 12.4 7.8 19.7c0 15.8-12.8 28.6-28.6 28.6L28.6 224C12.8 224 0 211.2 0 195.4c0-7.3 2.8-14.4 7.8-19.7zM19.5 325.3L144.6 457.4c4 4.2 9.6 6.6 15.4 6.6s11.4-2.4 15.4-6.6L300.5 325.3c2.2-2.3 3.5-5.4 3.5-8.7c0-7-5.6-12.6-12.6-12.6L28.6 304c-7 0-12.6 5.6-12.6 12.6c0 3.2 1.2 6.3 3.5 8.7zm-11.6 11C2.8 331 0 323.9 0 316.6C0 300.8 12.8 288 28.6 288l262.8 0c15.8 0 28.6 12.8 28.6 28.6c0 7.3-2.8 14.4-7.8 19.7L187 468.4c-7 7.4-16.8 11.6-27 11.6s-20-4.2-27-11.6L7.8 336.3z" />
    </Icon>
);

export default Sort;