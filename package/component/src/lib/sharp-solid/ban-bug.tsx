
import { Icon } from "../../index";

/**
 * A component that renders the `ban-bug` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban-bug?s=sharp-solid ban-bug}
 * @preview ![ban-bug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ban-bug.svg)
 */
const BanBug: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 448C150 448 64 362 64 256c0-41.5 13.1-79.9 35.5-111.2L367.2 412.5C335.9 434.9 297.5 448 256 448zm89-148.3l19.9 4 15.7 3.1 6.3-31.4-15.7-3.1-35.1-7 0-18.6 35.1-7 15.7-3.1-6.3-31.4-15.7 3.1L336 214.1l0-30.6 16.2-9.7 13.7-8.2L349.5 138l-13.7 8.2-18.4 11.1L288 128l-64 0-25.4 25.4L144.8 99.5C176.1 77.1 214.5 64 256 64c106 0 192 86 192 192c0 41.5-13.1 79.9-35.5 111.2L345 299.7zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM140.9 272.3l-15.7 3.1 6.3 31.4 15.7-3.1 28.9-5.8 0 30.6-16.2 9.7L146 346.5 162.5 374l13.7-8.2 18.4-11.1L224 384l64 0 2.7-2.7L175 265.5l-34.1 6.8z" />
    </Icon>
);

export default BanBug;